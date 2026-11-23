---
layout: null
sitemap: false
---
{% raw %}(() => {
  const site = document.querySelector('.bro-interactive');
  if (!site || site.dataset.enhanced) return;
  site.dataset.enhanced = 'true';
  const content = globalThis.BRO1_CONTENT;
  const esc = value => String(value).replace(/[&<>"']/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
  const t = (ko, en) => site.lang === 'en' ? en : ko;
  const hero = site.querySelector('.bro-hero');
  hero.setAttribute('aria-label','Explore 첫 화면');
  const heading = hero.querySelector('h1');
  heading.dataset.ko = heading.dataset.en = 'Explore the<br>human brain.';
  heading.innerHTML = heading.dataset.ko;
  const research = site.querySelector('#interactive-research');
  const researchHeading = research.querySelector('h2');
  researchHeading.dataset.ko = '연구 모델과 분석 기술';
  researchHeading.dataset.en = 'Research models & methods';
  researchHeading.textContent = researchHeading.dataset.ko;
  research.querySelector('.bro-eyebrow').textContent = 'RESEARCH EXPLORER';
  const instructions = document.createElement('p');
  instructions.className = 'bro-section-intro';
  instructions.dataset.ko = '연구 모델과 분석 방법을 선택해 살펴보세요.';
  instructions.dataset.en = 'Choose a research model or an analysis method to explore.';
  instructions.textContent = instructions.dataset.ko;
  research.querySelector('.bro-section-head').after(instructions);

  const modes = [
    {id:'models',label:'Human models',ko:'세포와 오가노이드',number:'01'},
    {id:'imaging',label:'Cell imaging',ko:'Opera Phenix · ICC',number:'02'},
    {id:'activity',label:'Neural activity',ko:'MEA · 신경 활동',number:'03'},
    {id:'ai',label:'AI analysis',ko:'세포 데이터 분석',number:'04'}
  ];
  let selected = 'models';
  const options = {models:'neurons',imaging:'opera',activity:'recording',ai:'images'};
  const explorer = document.createElement('div');
  explorer.className = 'bro-explorer';
  explorer.innerHTML = `<div class="bro-explorer-tabs" role="tablist" aria-label="연구 방법 선택">${modes.map(mode => `<button class="bro-explorer-tab" type="button" role="tab" id="explore-tab-${mode.id}" aria-controls="explore-panel" aria-selected="${mode.id===selected}" tabindex="${mode.id===selected?'0':'-1'}" data-mode="${mode.id}"><small>${mode.number} /</small><strong>${mode.label}</strong><span data-ko="${esc(mode.ko)}" data-en="${esc(mode.label)}">${mode.ko}</span></button>`).join('')}</div><div class="bro-explorer-panel" id="explore-panel" role="tabpanel" aria-labelledby="explore-tab-models"></div>`;
  research.querySelector('[data-pillars]').replaceWith(explorer);
  const panel = explorer.querySelector('.bro-explorer-panel');
  const sourceImage = part => content.images.find(image => image.file.includes(part));
  const organoidArt = {file:'assets/hero-dark.webp',title:'Brain organoid · conceptual artwork',description:'오가노이드와 전자 인터페이스를 표현한 콘셉트 이미지입니다.',source:'BRØ1 홈페이지 디자인 콘셉트',url:'https://mineechoilab.kaist.ac.kr/projects/'};

  function diagram(type, option) {
    if (type === 'activity') {
      const dots = Array.from({length:64},(_,i) => {
        const x=55+(i%8)*42, y=44+Math.floor(i/8)*34;
        const active = option === 'network' ? [9,18,27,36,45,54].includes(i) : [27,28,35,36].includes(i);
        return `<circle cx="${x}" cy="${y}" r="${active?6:3}" fill="${active?'#65c6ff':'#344655'}"/>`;
      }).join('');
      return `<svg class="bro-explorer-svg" viewBox="0 0 404 324" role="img" aria-label="${t('MEA 전극 배열 개념도','Conceptual MEA electrode array')}"><rect x="24" y="17" width="354" height="283" rx="16" fill="#09131e" stroke="#344655"/>${option==='network'?'<path d="M97 78L139 112L181 146L223 180L265 214L307 248" stroke="#65c6ff" stroke-width="2" fill="none" opacity=".65"/>':'<path d="M120 106Q195 87 249 163Q288 211 212 250M95 206Q168 155 248 106M140 264Q189 183 224 60" stroke="#65c6ff" stroke-width="2" fill="none" opacity=".5"/>'}${dots}<text x="202" y="320" fill="#b0bac4" text-anchor="middle" font-family="sans-serif" font-size="12">MEA / ELECTRODE ARRAY</text></svg><p class="bro-svg-note">${t('MEA의 측정 원리를 설명하는 개념도입니다.','Conceptual illustration of MEA recording.')}</p>`;
    }
    const names = {images:t('세포 이미지','Cell images'),molecular:t('분자 데이터','Molecular data'),activity:t('신경 활동','Neural activity')};
    return `<svg class="bro-explorer-svg" viewBox="0 0 440 324" role="img" aria-label="${t('세포 데이터를 AI로 분석하는 과정의 개념도','Conceptual cellular data analysis workflow')}">${Object.keys(names).map((key,i)=>`<path class="bro-diagram-link ${option===key?'is-active':''}" d="M143 ${63+i*96}C185 ${63+i*96} 165 159 213 159" stroke="${option===key?'#65c6ff':'#344655'}" fill="none" stroke-width="2"/><g class="bro-diagram-node" data-active="${option===key}"><rect x="16" y="${34+i*96}" width="126" height="58" rx="7" fill="${option===key?'#12344c':'#101c27'}" stroke="${option===key?'#65c6ff':'#344655'}"/><text x="79" y="${68+i*96}" fill="#f5f7fa" text-anchor="middle" font-family="sans-serif" font-size="13">${names[key]}</text></g>`).join('')}<rect x="213" y="124" width="91" height="70" rx="9" fill="#17374a" stroke="#65c6ff"/><text x="258" y="164" fill="#f5f7fa" text-anchor="middle" font-family="sans-serif" font-size="15">AI model</text><path d="M305 159H335" stroke="#65c6ff" stroke-width="2"/><rect x="337" y="124" width="88" height="70" rx="9" fill="#101c27" stroke="#344655"/><text x="381" y="154" fill="#f5f7fa" text-anchor="middle" font-family="sans-serif" font-size="12">${t('세포 특성','Cellular')}</text><text x="381" y="173" fill="#f5f7fa" text-anchor="middle" font-family="sans-serif" font-size="12">${t('비교·분석','patterns')}</text></svg><p class="bro-svg-note">${t('데이터 유형을 선택해 분석 목적을 확인하세요.','Choose a data type to read about its analysis.')}</p>`;
  }

  function state() {
    const option = options[selected];
    if (selected === 'models') {
      const neuron = option === 'neurons';
      return {
        title:neuron?t('환자 유래 신경세포','Patient-derived neurons'):t('뇌 오가노이드','Brain organoids'),
        text:neuron?t('환자 유래 hiPSC로 신경세포를 만들고, 질환과 관련된 세포 변화와 약물 반응을 연구합니다.','We generate neurons from patient-derived hiPSCs to study disease-related cellular changes and drug responses.'):t('3차원 뇌 오가노이드 모델로 질병과 약물 반응을 연구합니다.','We use three-dimensional brain organoid models to study disease and drug responses.'),
        choices:[['neurons',t('신경세포','Neurons')],['organoids',t('오가노이드','Organoids')]],
        tags:neuron?['Patient-derived iPSC','Human neurons']:['3D models','Brain organoids'],
        image:neuron?sourceImage('lab-cell-fluorescence'):organoidArt,
        related:'{% endraw %}{{ '/redesign' | relative_url }}{% raw %}/research/models/'
      };
    }
    if (selected === 'imaging') {
      return {
        title:option==='opera'?'Opera Phenix':'Immunocytochemistry',
        text:option==='opera'?t('고속 이미징으로 많은 세포의 형태와 표지 신호를 관찰하고 비교합니다.','High-content imaging allows us to observe and compare cell morphology and staining signals at scale.'):t('ICC로 세포 내 단백질의 위치와 분포를 관찰합니다. 아래 이미지는 최민이 교수님이 참여한 논문의 공개 그림입니다.','ICC reveals protein localization and distribution in cells. This reference figure comes from a paper co-authored by Minee Choi.'),
        choices:[['opera','Opera Phenix'],['icc','ICC']],tags:['High-content imaging','Cell phenotypes'],
        image:option==='opera'?sourceImage('opera-neurons'):sourceImage('icc-choi'),
        related:option==='opera'?'{% endraw %}{{ '/redesign' | relative_url }}{% raw %}/research/imaging/':'{% endraw %}{{ '/redesign' | relative_url }}{% raw %}/publications/alpha-synuclein/',
        relatedLabel:option==='opera'?t('이미징 상세 소개','Explore imaging'):t('관련 연구 보기','Related research')
      };
    }
    if (selected === 'activity') {
      return {
        title:option==='recording'?t('신경망의 전기활동 기록','Recording neural activity'):t('신경망 기능 분석','Analyzing network function'),
        text:option==='recording'?t('MEA는 여러 전극에서 신경세포의 전기활동을 기록합니다. 세포 이미징과 함께 신경망의 기능을 살펴볼 수 있습니다.','MEA records electrical activity across multiple electrodes, complementing cell imaging with a functional view of neural networks.'):t('기록된 신호로 발화 패턴과 신경세포들이 함께 활동하는 양상을 살펴봅니다.','Recorded signals are used to examine firing patterns and coordinated network activity.'),
        choices:[['recording',t('신호 기록','Recording')],['network',t('네트워크 분석','Network analysis')]],tags:['MEA','Organoid intelligence'],
        visual:diagram('activity',option),related:'{% endraw %}{{ '/redesign' | relative_url }}{% raw %}/research/activity/'
      };
    }
    const text = {
      images:t('세포 이미지에서 형태와 표현형의 차이를 분석하고, 질병과 관련된 패턴을 찾습니다.','We analyze morphology and phenotype differences in cell images to identify disease-related patterns.'),
      molecular:t('분자 정보와 세포 특성을 함께 분석해 질환과 관련된 변화를 연구합니다.','We analyze molecular information alongside cellular characteristics to study disease-related changes.'),
      activity:t('신경 활동 데이터의 발화와 동시활동 등 여러 특징을 비교해 신경망의 기능을 살펴봅니다.','Features such as firing and coordinated activity help us compare neural network function.')
    };
    return {title:t('세포 데이터 분석','Cellular data analysis'),text:text[option],choices:[['images',t('이미지','Images')],['molecular',t('분자 정보','Molecular data')],['activity',t('신경 활동','Neural activity')]],tags:['AI cell models','Data analysis'],visual:diagram('ai',option),related:option==='images'?'{% endraw %}{{ '/redesign' | relative_url }}{% raw %}/publications/parkinsons-ai/':'{% endraw %}{{ '/redesign' | relative_url }}{% raw %}/research/ai/'};
  }

  function renderPanel() {
    const view=state();
    panel.setAttribute('aria-labelledby','explore-tab-'+selected);
    panel.innerHTML=`<div class="bro-explorer-copy"><h3>${esc(view.title)}</h3><p>${esc(view.text)}</p><div class="bro-method-switch" aria-label="${t('세부 항목 선택','Choose an option')}">${view.choices.map(([id,label])=>`<button class="bro-method-option" type="button" data-option="${id}" aria-pressed="${id===options[selected]}">${esc(label)}</button>`).join('')}</div><div class="bro-method-tags">${view.tags.map(tag=>`<span class="bro-method-tag">${esc(tag)}</span>`).join('')}</div><a class="bro-text-link" href="${view.related}">${view.relatedLabel||t('관련 연구 보기','Related research')} ↗</a></div><div class="bro-explorer-visual">${view.image?`<figure><button class="bro-explorer-image-button" type="button" aria-label="${t('연구 이미지 확대','Enlarge research image')}"><img src="${esc(view.image.file)}" alt="${esc(view.image.title)}"><span class="bro-explorer-open">${t('이미지 확대','Enlarge image')} ↗</span></button><figcaption class="bro-explorer-caption">${esc(view.image.source)}<br><a href="${esc(view.image.url)}" target="_blank" rel="noopener noreferrer">${t('출처 보기','View source')} ↗</a></figcaption></figure>`:view.visual}</div>`;
    panel.querySelectorAll('[data-option]').forEach(button=>button.addEventListener('click',()=>{
      options[selected]=button.dataset.option;renderPanel();panel.querySelector(`[data-option="${options[selected]}"]`).focus({preventScroll:true});
    }));
    panel.querySelector('.bro-explorer-image-button')?.addEventListener('click',()=>openImage(view.image));
  }
  function selectMode(id, scroll=false) {
    selected=id;
    explorer.querySelectorAll('[role="tab"]').forEach(tab=>{const active=tab.dataset.mode===id;tab.setAttribute('aria-selected',String(active));tab.tabIndex=active?0:-1;});
    renderPanel();
    if(scroll){explorer.querySelector(`[data-mode="${id}"]`).focus({preventScroll:true});research.scrollIntoView({behavior:motion?'smooth':'auto',block:'start'});}
  }
  explorer.querySelectorAll('[role="tab"]').forEach((tab,index)=>{
    tab.addEventListener('click',()=>selectMode(tab.dataset.mode));
    tab.addEventListener('keydown',event=>{
      const step=event.key==='ArrowRight'?1:event.key==='ArrowLeft'?-1:0;
      if(!step&&event.key!=='Home'&&event.key!=='End')return;
      event.preventDefault();const next=event.key==='Home'?0:event.key==='End'?modes.length-1:(index+step+modes.length)%modes.length;
      selectMode(modes[next].id);explorer.querySelector(`[data-mode="${modes[next].id}"]`).focus();
    });
  });

  const dialog=document.createElement('dialog');dialog.className='bro-image-dialog';dialog.id='bro1-image-viewer';dialog.setAttribute('aria-labelledby','bro-viewer-title');
  dialog.innerHTML='<div class="bro-viewer-header"><strong id="bro-viewer-title"></strong><button type="button" data-viewer-close>×</button></div><div class="bro-viewer-viewport"><img alt=""></div><div class="bro-viewer-footer"><div><h3></h3><p></p><a class="bro-viewer-source" target="_blank" rel="noopener noreferrer"></a><a class="bro-viewer-license" target="_blank" rel="noopener noreferrer">CC BY 4.0</a></div><div class="bro-viewer-controls"><button type="button" data-viewer-prev>←</button><button type="button" data-viewer-next>→</button><button type="button" data-viewer-out>−</button><span class="bro-viewer-zoom" aria-live="polite">1×</span><button type="button" data-viewer-in>+</button><button type="button" data-viewer-fit></button></div></div>';
  document.body.append(dialog);
  const viewport=dialog.querySelector('.bro-viewer-viewport'), largeImage=viewport.querySelector('img');
  let imageIndex=-1,zoom=1,lastFocus;
  function fitImage(){
    if(!dialog.open||!largeImage.naturalWidth)return;
    const fit=Math.min((viewport.clientWidth-48)/largeImage.naturalWidth,(viewport.clientHeight-48)/largeImage.naturalHeight,1);
    largeImage.style.width=Math.max(1,Math.round(largeImage.naturalWidth*fit*zoom))+'px';
    dialog.querySelector('.bro-viewer-zoom').textContent=zoom.toFixed(1).replace('.0','')+'×';
    dialog.querySelector('[data-viewer-out]').disabled=zoom<=1;
    dialog.querySelector('[data-viewer-in]').disabled=zoom>=4;
  }
  largeImage.addEventListener('load',fitImage);
  new ResizeObserver(fitImage).observe(viewport);
  function openImage(item){
    dialog.lang=site.lang||'ko';
    if(!dialog.open){lastFocus=document.activeElement;dialog.showModal();}
    imageIndex=content.images.indexOf(item);zoom=1;
    largeImage.src=item.file;largeImage.alt=item.title;
    dialog.querySelector('#bro-viewer-title').textContent=t('이미지 크게 보기','Image viewer');
    dialog.querySelector('h3').textContent=item.title;
    dialog.querySelector('.bro-viewer-footer p').textContent=item.description;
    const source=dialog.querySelector('.bro-viewer-source');source.href=item.url;source.textContent=item.source+' ↗';
    const license=dialog.querySelector('.bro-viewer-license');license.hidden=!item.license;if(item.license)license.href=item.license;
    [['close',t('닫기','Close')],['prev',t('이전 이미지','Previous image')],['next',t('다음 이미지','Next image')],['out',t('축소','Zoom out')],['in',t('확대','Zoom in')],['fit',t('화면에 맞춤','Fit image')]].forEach(([key,label])=>dialog.querySelector(`[data-viewer-${key}]`).setAttribute('aria-label',label));
    dialog.querySelector('[data-viewer-fit]').textContent=t('화면에 맞춤','Fit image');
    dialog.querySelector('[data-viewer-prev]').hidden=dialog.querySelector('[data-viewer-next]').hidden=imageIndex<0;
    viewport.scrollTop=viewport.scrollLeft=0;fitImage();
  }
  function advanceImage(step){if(imageIndex>=0)openImage(content.images[(imageIndex+step+content.images.length)%content.images.length]);}
  dialog.querySelector('[data-viewer-close]').addEventListener('click',()=>dialog.close());
  dialog.addEventListener('close',()=>{if(lastFocus?.isConnected)lastFocus.focus({preventScroll:true});});
  dialog.addEventListener('click',event=>{if(event.target===dialog){const rect=dialog.getBoundingClientRect();if(event.clientX<rect.left||event.clientX>rect.right||event.clientY<rect.top||event.clientY>rect.bottom)dialog.close();}});
  dialog.addEventListener('keydown',event=>{if(event.key==='ArrowRight'||event.key==='ArrowLeft'){event.preventDefault();advanceImage(event.key==='ArrowRight'?1:-1);}});
  dialog.querySelector('[data-viewer-prev]').addEventListener('click',()=>advanceImage(-1));
  dialog.querySelector('[data-viewer-next]').addEventListener('click',()=>advanceImage(1));
  dialog.querySelector('[data-viewer-in]').addEventListener('click',()=>{zoom=Math.min(4,zoom+.5);fitImage();});
  dialog.querySelector('[data-viewer-out]').addEventListener('click',()=>{zoom=Math.max(1,zoom-.5);fitImage();});
  dialog.querySelector('[data-viewer-fit]').addEventListener('click',()=>{zoom=1;fitImage();viewport.scrollTop=viewport.scrollLeft=0;});
  const galleryLink=site.querySelector('.bro-gallery-image-link');
  galleryLink.setAttribute('aria-label',t('갤러리 이미지 확대','Enlarge gallery image'));
  galleryLink.addEventListener('click',event=>{
    const image=site.querySelector('.bro-gallery-image');const item=content.images.find(item=>image.getAttribute('src')===item.file);if(item){event.preventDefault();openImage(item);}
  });

  const preference=matchMedia('(prefers-reduced-motion: reduce)');
  let motion=!preference.matches;
  const pins=document.createElement('div');pins.className='bro-hero-pins';pins.setAttribute('aria-label','연구 방법 바로가기');
  pins.innerHTML=[['imaging','Cell imaging',70,28],['activity','Neural activity',79,52],['ai','AI analysis',68,76]].map(([id,label,x,y])=>`<button type="button" class="bro-hotspot" data-target="${id}" style="--pin-x:${x}%;--pin-y:${y}%"><i aria-hidden="true"></i><span>${label} ↗</span></button>`).join('');
  hero.append(pins);pins.querySelectorAll('button').forEach(pin=>pin.addEventListener('click',()=>selectMode(pin.dataset.target,true)));
  const progress=document.createElement('span');progress.className='bro-scroll-progress';progress.setAttribute('aria-hidden','true');site.querySelector('.bro-header').append(progress);
  const updateProgress=()=>{if(!site.hidden)progress.style.setProperty('--progress',Math.min(100,Math.max(0,(scrollY-site.offsetTop)/Math.max(1,site.scrollHeight-innerHeight)*100))+'%');};
  addEventListener('scroll',updateProgress,{passive:true});
  research.style.scrollMarginTop='105px';

  const canvas=document.createElement('canvas');canvas.className='bro-hero-canvas';canvas.setAttribute('aria-hidden','true');hero.querySelector('.bro-hero-media').after(canvas);
  const ctx=canvas.getContext('2d');let width=0,height=0,frame=0,lastTime=0,visible=false;
  const pointer={x:0,y:0,targetX:0,targetY:0};
  function resizeCanvas(){const rect=hero.getBoundingClientRect();width=rect.width;height=rect.height;if(!width)return;const ratio=Math.min(devicePixelRatio||1,1.5);canvas.width=Math.round(width*ratio);canvas.height=Math.round(height*ratio);ctx?.setTransform(ratio,0,0,ratio,0,0);refreshAnimation();}
  function active(){return !!ctx&&motion&&!site.hidden&&visible&&document.visibilityState==='visible'&&width>850;}
  function draw(time){
    frame=0;if(!active())return;
    if(time-lastTime<32){frame=requestAnimationFrame(draw);return;}lastTime=time;
    pointer.x+=(pointer.targetX-pointer.x)*.065;pointer.y+=(pointer.targetY-pointer.y)*.065;
    hero.style.setProperty('--shift-x',(pointer.x*11).toFixed(2)+'px');hero.style.setProperty('--shift-y',(pointer.y*8).toFixed(2)+'px');
    ctx.clearRect(0,0,width,height);
    const points=Array.from({length:38},(_,i)=>{const angle=i*2.39996;const radius=Math.sqrt((i+.5)/38);return{x:width*.73+Math.cos(angle+time*.000012)*radius*Math.min(width*.24,height*.43)+pointer.x*17,y:height*.5+Math.sin(angle+time*.000012)*radius*height*.34+pointer.y*13};});
    points.forEach((point,i)=>{
      points.slice(i+1).forEach(other=>{const distance=Math.hypot(point.x-other.x,point.y-other.y);if(distance<110){ctx.strokeStyle=`rgba(101,198,255,${(1-distance/110)*.14})`;ctx.beginPath();ctx.moveTo(point.x,point.y);ctx.lineTo(other.x,other.y);ctx.stroke();}});
      ctx.fillStyle='rgba(147,224,255,.46)';ctx.beginPath();ctx.arc(point.x,point.y,1.4,0,Math.PI*2);ctx.fill();
    });
    frame=requestAnimationFrame(draw);
  }
  function refreshAnimation(){cancelAnimationFrame(frame);frame=0;site.dataset.motion=motion?'on':'off';if(active())frame=requestAnimationFrame(draw);else{ctx?.clearRect(0,0,width,height);hero.style.setProperty('--shift-x','0px');hero.style.setProperty('--shift-y','0px');}}
  hero.addEventListener('pointermove',event=>{if(event.pointerType!=='mouse'||!motion)return;const rect=hero.getBoundingClientRect();pointer.targetX=(event.clientX-rect.left)/rect.width*2-1;pointer.targetY=(event.clientY-rect.top)/rect.height*2-1;});
  hero.addEventListener('pointerleave',()=>{pointer.targetX=pointer.targetY=0;});
  preference.addEventListener('change',()=>{motion=!preference.matches;refreshAnimation();});
  document.addEventListener('visibilitychange',refreshAnimation);
  new ResizeObserver(resizeCanvas).observe(hero);
  new MutationObserver(()=>{resizeCanvas();updateProgress();}).observe(site,{attributes:true,attributeFilter:['hidden']});
  new IntersectionObserver(entries=>{visible=entries[0].isIntersecting;refreshAnimation();},{threshold:0}).observe(hero);
  if('IntersectionObserver' in window){
    const reveal=new IntersectionObserver(entries=>entries.forEach(entry=>{if(entry.isIntersecting){entry.target.classList.add('is-visible');reveal.unobserve(entry.target);}}),{threshold:.08});
    site.querySelectorAll('.bro-section').forEach(section=>{section.classList.add('bro-reveal');reveal.observe(section);});
  }
  site.addEventListener('bro-language-change',()=>{renderPanel();galleryLink.setAttribute('aria-label',t('갤러리 이미지 확대','Enlarge gallery image'));});
  renderPanel();resizeCanvas();updateProgress();
})();
{% endraw %}
