---
title: Projects
nav:
  order: 2
  tooltip: Projects, plans, and more
---

# {% include icon.html icon="fa-solid fa-wrench" %}Projects

{% include search-box.html %}

{% include tags.html tags="Parkinson's, Autism, Drug, Addiction, Brain organoid, AI, Drug discovery, hiPSC, Organoid, Neuron, Astrocyte, Microglia, Alzheimer's, Mitochondria, Protein misfolding, Lewy body dementia, Cell death" %}

{% include search-info.html %}

{% include section.html %}

{% include list.html component="card" data="projects" filters="group: disease" style="small" %}

{% include list.html component="card" data="projects" filters="group: tech" style="small" %}

{% include list.html component="card" data="projects" filters="group: mechanism" style="small" %}

{% include list.html component="card" data="projects" filters="group: " style="small" %}
