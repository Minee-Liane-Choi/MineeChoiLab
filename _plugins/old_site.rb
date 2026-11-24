# Builds the previous website again, unchanged, under /old/ after the main site is written.
#
# The main site (/) is the new design. The previous website's pages (index.md, team/,
# projects/, ...) are excluded from it in _config.yaml. This second build, with the
# `old_site` settings from _config.yaml, renders those pages, the member pages, the
# newsletters and the project pages in their previous layouts into _site/old/, with
# baseurl "<baseurl>/old", so all of the previous website's own links keep working.
#
# Folders listed in `old_site.shared` (images, about 200 MB) are not copied again:
# links to them in the previous website's pages are pointed at the main site's copy.
#
# Templates can tell the two builds apart with `site.is_old_site`; in the old-site
# build `site.new_site_baseurl` is the main site's baseurl.

module OldSite
  FLAG = "is_old_site"

  def self.build(site)
    settings = site.config["old_site"]
    return unless settings.is_a?(Hash)

    folder = settings.fetch("folder", "old").to_s.delete("/")
    main_base = site.config["baseurl"].to_s.chomp("/")
    shared = Array(settings["shared"]).map { |dir| dir.to_s.delete("/") }

    overrides = {
      FLAG => true,
      "new_site_baseurl" => main_base,
      "old_site_shared" => shared,
      "baseurl" => "#{main_base}/#{folder}",
      "destination" => File.join(site.dest, folder),
      "exclude" => Array(settings["exclude"]) + shared,
      "keep_files" => [".git", ".svn"],
      "defaults" => Array(settings["defaults"]),
      "collections" => settings["collections"] || {},
    }
    config = Jekyll::Configuration.from(Jekyll::Utils.deep_merge_hashes(site.config, overrides))

    Jekyll.logger.info "Old site:", "building the previous website under /#{folder}/"
    Jekyll::Site.new(config).process
  end

  # Point links to shared folders at the main site's copy:
  # "<old baseurl>/images/x", "images/x" and "../images/x" become "<baseurl>/images/x".
  def self.relink(output, config)
    old_base = config["baseurl"].to_s
    main_base = config["new_site_baseurl"].to_s
    config["old_site_shared"].each do |dir|
      output = output.gsub("#{old_base}/#{dir}/", "#{main_base}/#{dir}/")
      output = output.gsub(%r{(["'(=]\s*)(?:\./|\.\./)*#{Regexp.escape(dir)}/}) { "#{Regexp.last_match(1)}#{main_base}/#{dir}/" }
    end
    output
  end
end

Jekyll::Hooks.register :site, :post_write do |site|
  OldSite.build(site) unless site.config[OldSite::FLAG]
end

Jekyll::Hooks.register [:pages, :documents], :post_render, priority: :low do |doc|
  config = doc.site.config
  if config[OldSite::FLAG] && doc.output.is_a?(String)
    doc.output = OldSite.relink(doc.output, config)
  end
end
