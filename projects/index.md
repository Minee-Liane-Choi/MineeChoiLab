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

## Disease
{% include list.html data="programmes" component="catalogue" filters="role: disease, group: project" %}

## Syndrome
{% include list.html data="programmes" component="catalogue" filters="role: syndrome, group: project" %}

## Technology
{% include list.html data="programmes" component="catalogue" filters="role: tech, group: project" %}

## Mechanism
{% include list.html data="programmes" component="catalogue" filters="role: mech, group: project" %}

<!--{% include list.html component="card" data="projects" filters="group: mechanism" style="small" %} -->
