---
layout: null
sitemap: false
---
{% raw %}(() => {
  const site = document.querySelector('.bro-interactive:not(.bro-detail)');
  if (!site || site.dataset.carousel) return;
  site.dataset.carousel = 'ready';
  const hero = site.querySelector('.bro-hero');
  const media = hero.querySelector('.bro-hero-media');
  const heading = hero.querySelector('h1');
  const copy = hero.querySelector('.bro-hero-copy');
  const action = hero.querySelector('.bro-action');
  const t = (ko, en) => site.lang === 'en' ? en : ko;
  const slides = [
    {label:'Patient-derived hiPSC', short:'Patient-derived hiPSC', title:'Disease in<br>a dish.', image:'hero-ipsc-v6.webp',
      ko:'환자 유래 hiPSC를 신경세포로 분화해, 뇌질환의 세포 특성과 약물 반응을 연구합니다.',
      en:'We differentiate patient-derived hiPSCs into neurons to study cellular features of brain disease and drug responses.',
      altKo:'배양 접시 속 신경세포와 줄기세포를 표현한 콘셉트 이미지', altEn:'Conceptual artwork of neurons and stem cells in a culture dish', href:'{% endraw %}{{ '/redesign' | relative_url }}{% raw %}/research/models/#neurons'},
    {label:'Brain organoid production', short:'Brain organoids', title:'Patient-derived<br>brain organoids.', image:'hero-organoid-v6.webp',
      ko:'사람의 세포로 3차원 뇌 오가노이드를 만들고, 뇌의 발달과 질병을 연구합니다.',
      en:'We grow three-dimensional brain organoids from human cells to study brain development and disease.',
      altKo:'다중 웰 배양판 속 뇌 오가노이드를 표현한 콘셉트 이미지', altEn:'Conceptual artwork of brain organoids in a multiwell culture plate', href:'{% endraw %}{{ '/redesign' | relative_url }}{% raw %}/research/models/#organoids'},
    {label:'Brain Organoid Intelligence', short:'Organoid Intelligence', title:'Brain organoid<br>intelligence.', image:'hero-dark.webp',
      ko:'신경세포와 오가노이드를 전자 인터페이스에 연결해, 신경망의 정보 처리와 학습을 연구합니다.',
      en:'We connect neurons and organoids with electronic interfaces to investigate neural information processing and learning.',
      altKo:'전극 배열 위 뇌 오가노이드와 신경 신호를 표현한 콘셉트 이미지', altEn:'Conceptual artwork of a brain organoid above an electrode array', href:'{% endraw %}{{ '/redesign' | relative_url }}{% raw %}/research/activity/#network'},
    {label:'AI · Digital Brain Cell Foundation Model', short:'AI · Digital brain cells', title:'Digital brain<br>cell models.', image:'hero-ai-v6.webp',
      ko:'세포 데이터를 학습해 뇌질환과 약물 반응 연구에 활용할 AI 기초 모델을 개발하는 것이 목표입니다.',
      en:'We aim to develop AI foundation models that learn from cellular data and support studies of brain disease and drug responses.',
      altKo:'신경세포가 디지털 점군과 데이터로 이어지는 콘셉트 이미지', altEn:'Conceptual artwork of a neuron connected to a digital point cloud and data', href:'{% endraw %}{{ '/redesign' | relative_url }}{% raw %}/research/ai/#foundation-model'}
  ];
  const setCopy = (element, ko, en) => {
    element.dataset.ko = ko; element.dataset.en = en;
    element.innerHTML = t(ko, en);
  };
  hero.classList.add('bro-carousel-hero');
  hero.setAttribute('aria-roledescription', t('슬라이드 쇼', 'carousel'));
  hero.setAttribute('aria-label', t('KAIST BRØ1의 네 연구 분야', 'Four research areas at KAIST BRØ1'));
  hero.querySelector('.bro-hero-pins')?.remove();
  setCopy(hero.querySelector('.bro-eyebrow'), 'KAIST · BRAIN & COGNITIVE SCIENCES', 'KAIST · BRAIN & COGNITIVE SCIENCES');
  const topic = document.createElement('p'); topic.className = 'bro-hero-topic';
  heading.before(topic);
  const images = slides.map((slide, i) => {
    const image = document.createElement('img');
    image.className = 'bro-hero-image bro-slide-image' + (i === 0 ? ' is-active' : '');
    image.src = '{% endraw %}{{ '/redesign' | relative_url }}{% raw %}/assets/' + slide.image;
    image.width = 1400; image.height = 788;
    image.decoding = 'async'; image.fetchPriority = i === 0 ? 'high' : 'low';
    image.alt = t(slide.altKo, slide.altEn);
    image.setAttribute('aria-hidden', String(i !== 0));
    return image;
  });
  media.replaceChildren(...images);
  // Keep the opening scene free of playback widgets and instructional copy.
  hero.querySelector('.bro-art-caption')?.remove();
  const textLayer = document.createElement('div');
  textLayer.className = 'bro-slide-text';
  topic.before(textLayer);
  [topic, heading, copy].forEach(element => textLayer.append(element));
  setCopy(action, '연구 소개 ↗', 'Explore our research ↗');
  action.href = '{% endraw %}{{ '/redesign' | relative_url }}{% raw %}/research/'; action.removeAttribute('target'); action.removeAttribute('rel');
  const reduced = matchMedia('(prefers-reduced-motion: reduce)');
  let index = 0, visible = false, timer = 0, copyTimer = 0, blendTimer = 0;
  let started = 0, remaining = 7000, pending = null;
  const canPlay = () => visible && !site.hidden && !document.hidden && !reduced.matches && !hero.contains(document.activeElement);
  function renderCopy() {
    const slide = slides[index];
    topic.textContent = slide.label;
    setCopy(heading, slide.title, slide.title);
    setCopy(copy, slide.ko, slide.en);
    hero.dataset.topic = String(index + 1);
  }
  function commitCopy() {
    clearTimeout(copyTimer); copyTimer = 0;
    if (pending !== null) { index = pending; pending = null; renderCopy(); }
    textLayer.classList.remove('is-changing');
  }
  function finishBlend() {
    clearTimeout(blendTimer); blendTimer = 0;
    images.forEach(image => image.classList.remove('is-previous'));
    hero.dataset.transitioning = 'false';
  }
  function schedule(reset = false) {
    if (timer) { clearTimeout(timer); timer = 0; remaining = Math.max(0, remaining - (performance.now() - started)); }
    if (reset) remaining = 7000;
    hero.dataset.autoplay = String(canPlay());
    if (!canPlay()) { commitCopy(); finishBlend(); return; }
    started = performance.now();
    timer = setTimeout(() => { timer = 0; show((index + 1) % slides.length); }, remaining);
  }
  function show(next) {
    commitCopy(); finishBlend();
    const previous = index;
    const destination = (next + slides.length) % slides.length;
    if (!images[destination].complete || !images[destination].naturalWidth) {
      remaining = 1500; schedule(); return;
    }
    if (destination === previous || reduced.matches) {
      index = destination; renderCopy();
      images.forEach((image, i) => { image.classList.toggle('is-active', i === index); image.setAttribute('aria-hidden', String(i !== index)); });
      schedule(true); return;
    }
    // The outgoing image stays opaque beneath the incoming image, avoiding a dark dip.
    images.forEach((image, i) => {
      image.classList.toggle('is-previous', i === previous);
      image.classList.toggle('is-active', i === destination);
      image.setAttribute('aria-hidden', String(i !== destination));
    });
    pending = destination;
    hero.dataset.transitioning = 'true';
    textLayer.classList.add('is-changing');
    copyTimer = setTimeout(commitCopy, 380);
    blendTimer = setTimeout(finishBlend, 1800);
    schedule(true);
  }
  hero.addEventListener('focusin', () => schedule());
  hero.addEventListener('focusout', () => queueMicrotask(() => schedule()));
  new IntersectionObserver(entries => { visible = entries[0].isIntersecting; schedule(); }, {threshold:0.1}).observe(hero);
  new MutationObserver(() => schedule()).observe(site, {attributes:true, attributeFilter:['hidden']});
  document.addEventListener('visibilitychange', () => schedule());
  reduced.addEventListener('change', () => schedule(true));
  site.addEventListener('bro-language-change', () => {
    images.forEach((image, i) => image.alt = t(slides[i].altKo, slides[i].altEn));
    hero.setAttribute('aria-roledescription', t('슬라이드 쇼', 'carousel'));
    hero.setAttribute('aria-label', t('KAIST BRØ1의 네 연구 분야', 'Four research areas at KAIST BRØ1'));
    renderCopy();
  });
  renderCopy(); schedule();
})();
{% endraw %}
