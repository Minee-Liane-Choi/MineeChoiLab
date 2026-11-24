# Keep the website pages in redesign/** exactly as Jekyll rendered them.
#
# jekyll-spaceship re-parses every HTML page with Nokogiri's HTML4 parser and
# re-serializes it in a post_render hook (Manager.dispatch_html_block), with no
# per-page opt-out. That suits the Markdown pages (newsletters, the previous website), but it
# rewrites finished HTML: for example it lowercases the SVG `viewBox` attribute,
# which breaks the inline icons of the new pages.
#
# For pages under redesign/ only (the main site; member pages and newsletters are
# not affected), this saves the output right after Liquid and
# layout rendering (post_render, high priority, before other post_render
# plugins) and puts it back after all post_render hooks have run (low priority).
# Other pages are not touched.

module RedesignPassthrough
  PREFIX = "redesign/"

  def self.applies?(page)
    page.respond_to?(:relative_path) &&
      page.relative_path.to_s.tr("\\", "/").start_with?(PREFIX)
  end
end

Jekyll::Hooks.register :pages, :post_render, priority: :high do |page|
  if RedesignPassthrough.applies?(page)
    page.instance_variable_set(:@redesign_rendered, page.output.dup)
  end
end

Jekyll::Hooks.register :pages, :post_render, priority: :low do |page|
  rendered = page.instance_variable_get(:@redesign_rendered)
  if rendered
    page.output = rendered
    page.remove_instance_variable(:@redesign_rendered)
  end
end
