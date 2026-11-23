---
layout: null
sitemap: false
---
{% raw %}(() => {
  const root=document.getElementById('bro1-concepts');
  if(!root)return;
  const site=root.querySelector('.bro-detail')||root.querySelector('.bro-interactive');
  if(!site)return;
  const detail=site.classList.contains('bro-detail');
  const t=(ko,en)=>site.lang==='en'?en:ko;
  const esc=v=>String(v).replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
  const language=site.querySelector('.bro-language');
  const stored=()=>{try{return localStorage.getItem('bro1-language');}catch{return null;}};
  const persist=lang=>{document.documentElement.lang=lang;try{localStorage.setItem('bro1-language',lang);}catch{}};
  function translate(lang){
    site.lang=lang;persist(lang);
    site.querySelectorAll('[data-ko][data-en]').forEach(el=>el.innerHTML=el.dataset[lang]);
    site.querySelectorAll('[data-placeholder-ko]').forEach(el=>el.placeholder=el.dataset[lang==='en'?'placeholderEn':'placeholderKo']);
    site.querySelectorAll('[data-alt-ko]').forEach(el=>el.alt=el.dataset[lang==='en'?'altEn':'altKo']);
    language.textContent=lang==='en'?'KO':'EN';
    language.setAttribute('aria-label',lang==='en'?'한국어로 전환':'Switch to English');
    site.dispatchEvent(new CustomEvent('bro-language-change',{detail:{lang}}));
  }
  if(detail){
    language.addEventListener('click',()=>translate(site.lang==='en'?'ko':'en'));
    const menu=site.querySelector('.bro-mobile-toggle');
    menu.addEventListener('click',()=>{const open=menu.getAttribute('aria-expanded')!=='true';menu.setAttribute('aria-expanded',String(open));site.querySelector('header').dataset.menuOpen=String(open);});
    site.querySelector('header').addEventListener('keydown',e=>{if(e.key==='Escape'&&menu.getAttribute('aria-expanded')==='true'){menu.setAttribute('aria-expanded','false');site.querySelector('header').dataset.menuOpen='false';e.preventDefault();menu.focus();}});
    site.querySelectorAll('.bro-nav a').forEach(a=>a.addEventListener('click',()=>{menu.setAttribute('aria-expanded','false');site.querySelector('header').dataset.menuOpen='false';}));
  }else{
    const local=(a,path)=>{a.href=path;a.removeAttribute('target');a.removeAttribute('rel');};
    site.querySelectorAll('.bro-brand').forEach(a=>{local(a,'{% endraw %}{{ '/redesign' | relative_url }}{% raw %}/');a.setAttribute('aria-label','KAIST BRØ1 홈');});
    site.querySelectorAll('.bro-nav a').forEach(a=>{const paths={Research:'{% endraw %}{{ '/redesign' | relative_url }}{% raw %}/research/',Publications:'{% endraw %}{{ '/redesign' | relative_url }}{% raw %}/publications/',Media:'{% endraw %}{{ '/redesign' | relative_url }}{% raw %}/media/',People:'{% endraw %}{{ '/redesign' | relative_url }}{% raw %}/team/','Join us':'{% endraw %}{{ '/redesign' | relative_url }}{% raw %}/join/'};if(paths[a.textContent.trim()])local(a,paths[a.textContent.trim()]);});
    site.querySelectorAll('a[href="https://mineechoilab.kaist.ac.kr/projects/"]').forEach(a=>local(a,'{% endraw %}{{ '/redesign' | relative_url }}{% raw %}/research/'));
    site.querySelectorAll('a[href="https://mineechoilab.kaist.ac.kr/team/"]').forEach(a=>local(a,'{% endraw %}{{ '/redesign' | relative_url }}{% raw %}/team/'));
    site.querySelectorAll('a[href="https://mineechoilab.kaist.ac.kr/vacancy/"]').forEach(a=>local(a,'{% endraw %}{{ '/redesign' | relative_url }}{% raw %}/join/'));
    site.querySelectorAll('a[href="https://mineechoilab.kaist.ac.kr/contact/"]').forEach(a=>local(a,'{% endraw %}{{ '/redesign' | relative_url }}{% raw %}/contact/'));
    site.querySelectorAll('a[href="https://mineechoilab.kaist.ac.kr/publications/"]').forEach(a=>local(a,'{% endraw %}{{ '/redesign' | relative_url }}{% raw %}/publications/'));
    const paperRoutes={'https://doi.org/10.1126/sciadv.adp8504':'{% endraw %}{{ '/redesign' | relative_url }}{% raw %}/publications/adar1/','https://doi.org/10.1038/s42256-023-00702-9':'{% endraw %}{{ '/redesign' | relative_url }}{% raw %}/publications/parkinsons-ai/','https://doi.org/10.1038/s41593-022-01140-3':'{% endraw %}{{ '/redesign' | relative_url }}{% raw %}/publications/alpha-synuclein/'};
    site.querySelectorAll('.bro-publication a').forEach(a=>{if(paperRoutes[a.href]){local(a,paperRoutes[a.href]);a.dataset.ko='연구 소개';a.dataset.en='About the study';a.textContent=a.dataset.ko;}});
    site.querySelector('.bro-hero .bro-action.secondary').href='{% endraw %}{{ '/redesign' | relative_url }}{% raw %}/contact/';
    site.querySelector('.bro-instrument .bro-text-link').href='{% endraw %}{{ '/redesign' | relative_url }}{% raw %}/research/imaging/';
    site.querySelector('.bro-instrument .bro-text-link').removeAttribute('target');
    const footer=site.querySelector('.bro-footer');
    footer.innerHTML=footer.innerHTML.replace('© 2026 BRØ1 Lab · Concept preview','© 2026 KAIST BRØ1 Lab');
    const links=document.createElement('div');links.className='detail-footer-links';links.innerHTML='<a href="{% endraw %}{{ '/redesign' | relative_url }}{% raw %}/contact/" data-ko="연락처" data-en="Contact">연락처</a><a href="{% endraw %}{{ '/redesign' | relative_url }}{% raw %}/tools/" data-ko="Lab tools" data-en="Lab tools">Lab tools</a><a href="{% endraw %}{{ '/redesign' | relative_url }}{% raw %}/designs/" data-ko="다른 시안" data-en="Design concepts">다른 시안</a>';footer.lastElementChild.append(links);
    ['[data-publications]','.bro-imaging','.bro-media','.bro-news'].forEach((selector,i)=>{const section=site.querySelector(selector);if(!section)return;const path=['{% endraw %}{{ '/redesign' | relative_url }}{% raw %}/publications/','{% endraw %}{{ '/redesign' | relative_url }}{% raw %}/research/imaging/','{% endraw %}{{ '/redesign' | relative_url }}{% raw %}/media/#videos','{% endraw %}{{ '/redesign' | relative_url }}{% raw %}/media/#news'][i];if(i>0){const a=document.createElement('a');a.className='bro-text-link';a.href=path;a.dataset.ko='전체 보기';a.dataset.en='View all';a.textContent='전체 보기';section.querySelector('.bro-section-head').append(a);}});
    site.addEventListener('bro-language-change',e=>persist(e.detail.lang));
  }
  if(stored()==='en'){if(detail)translate('en');else language.click();}
  const groups=[...site.querySelectorAll('[data-filter-group]')];
  groups.forEach(group=>{
    const items=[...group.querySelectorAll('[data-filter-item]')],search=group.querySelector('[data-search]'),selects=[...group.querySelectorAll('[data-select]')],count=group.querySelector('[data-result-count]'),empty=group.querySelector('[data-empty]');
    function filter(){
      const query=(search?.value||'').toLocaleLowerCase().trim();let total=0;
      items.forEach(item=>{const matchesQuery=(item.dataset.search||item.textContent).toLocaleLowerCase().includes(query);const matchesSelect=selects.every(select=>!select.value||item.dataset[select.dataset.select]===select.value);item.hidden=!(matchesQuery&&matchesSelect);if(!item.hidden)total++;});
      if(count)count.textContent=search?.id==='people-search'?t(`${total}명`,`${total} people`):search?.id==='publication-search'?t(`${total}편의 논문`,`${total} publications`):t(`${total}개의 기사`,`${total} stories`);
      if(empty)empty.hidden=total!==0;
    }
    search?.addEventListener('input',filter);selects.forEach(select=>select.addEventListener('change',filter));site.addEventListener('bro-language-change',filter);filter();
  });
  site.querySelectorAll('[data-copy-citation]').forEach(button=>button.addEventListener('click',async()=>{const output=button.parentElement.querySelector('[data-copy-status]');try{await navigator.clipboard.writeText(button.dataset.copyCitation);output.textContent=t('서지정보를 복사했습니다.','Citation copied.');}catch{output.textContent=t('아래 서지정보를 선택해 복사해주세요.','Select and copy the citation below.');}}));
  site.querySelectorAll('[data-play-video]').forEach(button=>button.addEventListener('click',()=>{
    const player=button.closest('.bro-video-player');const iframe=document.createElement('iframe');
    iframe.title=button.dataset.title;iframe.allow='autoplay; encrypted-media; picture-in-picture; fullscreen';iframe.allowFullscreen=true;iframe.referrerPolicy='strict-origin-when-cross-origin';
    iframe.src=button.dataset.platform==='Instagram'?`https://www.instagram.com/reel/${button.dataset.playVideo}/embed/`:`https://www.youtube-nocookie.com/embed/${button.dataset.playVideo}?autoplay=1&rel=0`;
    player.replaceChildren(iframe);
  }));
  if(detail){
    const images=globalThis.BRO1_CONTENT?.images||[];
    let dialog,zoom=1,current,lastFocus;
    function openImage(index){
      current=Number(index);const item=images[current];if(!item)return;
      if(!dialog){
        dialog=document.createElement('dialog');dialog.className='bro-image-dialog';dialog.setAttribute('aria-labelledby','detail-viewer-title');
        dialog.innerHTML='<div class="bro-viewer-header"><h2 id="detail-viewer-title"></h2><button type="button" data-close>×</button></div><div class="bro-viewer-viewport"><img alt=""></div><div class="bro-viewer-footer"><div><h3></h3><p></p><a class="bro-viewer-source" target="_blank" rel="noopener noreferrer"></a><a class="bro-viewer-license" target="_blank" rel="noopener noreferrer">CC BY 4.0</a></div><div class="bro-viewer-controls"><button type="button" data-prev>←</button><button type="button" data-next>→</button><button type="button" data-out>−</button><output></output><button type="button" data-in>+</button><button type="button" data-fit></button></div></div>';
        document.body.append(dialog);
        dialog.querySelector('[data-close]').addEventListener('click',()=>dialog.close());
        dialog.addEventListener('close',()=>lastFocus?.focus({preventScroll:true}));
        dialog.querySelector('img').addEventListener('load',fit);
        new ResizeObserver(fit).observe(dialog.querySelector('.bro-viewer-viewport'));
        dialog.querySelector('[data-in]').addEventListener('click',()=>{zoom=Math.min(4,zoom+.5);fit();});dialog.querySelector('[data-out]').addEventListener('click',()=>{zoom=Math.max(1,zoom-.5);fit();});dialog.querySelector('[data-fit]').addEventListener('click',()=>{zoom=1;fit();});
        const advance=delta=>openImage((current+delta+images.length)%images.length);
        dialog.querySelector('[data-prev]').addEventListener('click',()=>advance(-1));dialog.querySelector('[data-next]').addEventListener('click',()=>advance(1));
        dialog.addEventListener('keydown',e=>{if(['ArrowLeft','ArrowRight'].includes(e.key)){e.preventDefault();advance(e.key==='ArrowLeft'?-1:1);}});
      }
      zoom=1;dialog.lang=site.lang||'ko';dialog.querySelector('h2').textContent=t('이미지 크게 보기','Image viewer');dialog.querySelector('h3').textContent=item.title;dialog.querySelector('p').textContent=item.description;
      const img=dialog.querySelector('img');img.src='{% endraw %}{{ '/redesign' | relative_url }}{% raw %}/'+item.file;img.alt=item.title;const source=dialog.querySelector('.bro-viewer-source');source.href=item.url;source.textContent=item.source+' ↗';const license=dialog.querySelector('.bro-viewer-license');license.hidden=!item.license;if(item.license)license.href=item.license;
      for(const [selector,ko,en] of [['close','닫기','Close'],['prev','이전 이미지','Previous image'],['next','다음 이미지','Next image'],['in','확대','Zoom in'],['out','축소','Zoom out'],['fit','화면에 맞춤','Fit image']])dialog.querySelector(`[data-${selector}]`).setAttribute('aria-label',t(ko,en));dialog.querySelector('[data-fit]').textContent=t('화면에 맞춤','Fit image');
      if(!dialog.open){lastFocus=document.activeElement;dialog.showModal();}const viewport=dialog.querySelector('.bro-viewer-viewport');viewport.scrollTop=viewport.scrollLeft=0;fit();
    }
    function fit(){if(!dialog?.open)return;const viewport=dialog.querySelector('.bro-viewer-viewport'),img=viewport.querySelector('img');if(!img.naturalWidth)return;const scale=Math.min((viewport.clientWidth-48)/img.naturalWidth,(viewport.clientHeight-48)/img.naturalHeight,1);img.style.width=Math.max(1,img.naturalWidth*scale*zoom)+'px';dialog.querySelector('output').textContent=`${zoom}×`;dialog.querySelector('[data-out]').disabled=zoom<=1;dialog.querySelector('[data-in]').disabled=zoom>=4;}
    const imageLabels=()=>site.querySelectorAll('[data-open-image]').forEach(button=>button.setAttribute('aria-label',t('이미지 확대: ','Enlarge image: ')+images[Number(button.dataset.openImage)].title));
    site.addEventListener('bro-language-change',imageLabels);imageLabels();
    site.querySelectorAll('[data-open-image]').forEach(button=>button.addEventListener('click',()=>openImage(button.dataset.openImage)));
    const progress=site.querySelector('.bro-scroll-progress');const scroll=()=>progress?.style.setProperty('--progress',Math.min(100,scrollY/Math.max(1,document.documentElement.scrollHeight-innerHeight)*100)+'%');addEventListener('scroll',scroll,{passive:true});scroll();
  }
})();
{% endraw %}
