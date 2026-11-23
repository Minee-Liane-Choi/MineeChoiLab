# Keep the redesign preview pages (redesign/**) exactly as Jekyll rendered them.
#
# jekyll-spaceship re-parses every HTML page with Nokogiri's HTML4 parser and
# re-serializes it in a post_render hook (Manager.dispatch_html_block), with no
# per-page opt-out. That suits the Markdown pages of the current site, but the
# redesign pages are finished HTML/JavaScript that was tested in browsers as-is.
#
# For pages under redesign/ only, this saves the output right after Liquid
# rendering (post_convert, before any post_render plugin) and puts it back after
# all post_render hooks have run. Other pages are not touched.

module RedesignPassthrough
  PREFIX = "redesign/"

  def self.applies?(page)
    page.respond_to?(:relative_path) &&
      page.relative_path.to_s.tr("\\", "/").start_with?(PREFIX)
  end
end

Jekyll::Hooks.register :pages, :post_convert do |page|
  if RedesignPassthrough.applies?(page)
    page.instance_variable_set(:@redesign_rendered, page.content.dup)
  end
end

Jekyll::Hooks.register :pages, :post_render, priority: :low do |page|
  rendered = page.instance_variable_get(:@redesign_rendered)
  if rendered
    page.output = rendered
    page.remove_instance_variable(:@redesign_rendered)
  end
end
