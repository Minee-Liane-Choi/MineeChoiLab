// KAIST BRØ1 redesign: menu, home ticker/slides/cards/indicator, list filters.
(function () {
  var reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  // mobile menu
  var burger = document.querySelector('.burger');
  var gnb = document.getElementById('gnb');
  if (burger && gnb) {
    var setOpen = function (open) {
      gnb.classList.toggle('open', open);
      burger.setAttribute('aria-expanded', open ? 'true' : 'false');
      burger.setAttribute('aria-label', open ? '메뉴 닫기' : '메뉴 열기');
    };
    burger.addEventListener('click', function () { setOpen(!gnb.classList.contains('open')); });
    gnb.addEventListener('click', function (e) { if (e.target.closest('a')) setOpen(false); });
    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape' && gnb.classList.contains('open')) { setOpen(false); burger.focus(); }
    });
  }

  // latest news line: one item at a time, arrows move through the list
  var ticker = document.querySelector('.ticker');
  if (ticker) {
    var items = ticker.querySelectorAll('li');
    var n = 0;
    var show = function () { items.forEach(function (li, i) { li.hidden = i !== n; }); };
    ticker.querySelector('[data-dir="prev"]').addEventListener('click', function () { n = (n + items.length - 1) % items.length; show(); });
    ticker.querySelector('[data-dir="next"]').addEventListener('click', function () { n = (n + 1) % items.length; show(); });
    show();
  }

  // home photos cross-fade
  var slides = document.querySelectorAll('.slides img');
  var slideCap = document.querySelector('.slide-cap');
  if (slides.length > 1 && !reduceMotion) {
    var s = 0;
    setInterval(function () {
      slides[s].classList.remove('on');
      s = (s + 1) % slides.length;
      slides[s].classList.add('on');
      if (slideCap) slideCap.textContent = slides[s].dataset.cap || '';
    }, 6000);
  }

  // member cards slider
  var cards = document.querySelector('.cards');
  if (cards) {
    var step = function () { var c = cards.querySelector('.card'); return c ? c.getBoundingClientRect().width + 20 : 240; };
    document.querySelectorAll('[data-cards]').forEach(function (b) {
      b.addEventListener('click', function () {
        cards.scrollBy({ left: (b.dataset.cards === 'prev' ? -2 : 2) * step(), behavior: reduceMotion ? 'auto' : 'smooth' });
      });
    });
  }

  // right-side section indicator
  var dots = document.querySelector('.dots');
  if (dots && 'IntersectionObserver' in window) {
    var links = dots.querySelectorAll('a');
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) {
        if (!e.isIntersecting) return;
        links.forEach(function (a) { a.classList.toggle('on', a.getAttribute('href') === '#' + e.target.id); });
        dots.classList.toggle('on-dark', e.target.dataset.theme === 'dark');
      });
    }, { rootMargin: '-45% 0px -45% 0px' });
    document.querySelectorAll('main section[id]').forEach(function (sec) { io.observe(sec); });
  }

  // publications: filter by words
  var search = document.getElementById('pub-search');
  if (search) {
    var pubs = document.querySelectorAll('.pubs li');
    var years = document.querySelectorAll('.pubs-year');
    var none = document.getElementById('pub-none');
    search.addEventListener('input', function () {
      var words = search.value.toLowerCase().split(/\s+/).filter(Boolean);
      var shown = 0;
      pubs.forEach(function (li) {
        var text = li.textContent.toLowerCase();
        var ok = words.every(function (w) { return text.indexOf(w) !== -1; });
        li.hidden = !ok;
        if (ok) shown++;
      });
      years.forEach(function (y) { y.hidden = !y.querySelector('.pubs li:not([hidden])'); });
      if (none) none.hidden = shown !== 0;
    });
  }

  // news: filter press by category
  var filters = document.querySelectorAll('[data-filter]');
  if (filters.length) {
    var rows = document.querySelectorAll('.press li');
    filters.forEach(function (b) {
      b.addEventListener('click', function () {
        filters.forEach(function (x) { x.setAttribute('aria-pressed', x === b ? 'true' : 'false'); });
        rows.forEach(function (li) { li.hidden = b.dataset.filter !== 'all' && li.dataset.cat !== b.dataset.filter; });
      });
    });
  }
})();
