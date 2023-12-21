---
title: Projects
nav:
  order: 2
  tooltip: Projects, plans, and more
---

# {% include icon.html icon="fa-solid fa-wrench" %}Projects

{% include search-box.html %}

{% include tags.html tags="Parkinson's, Autism, Drug addiction, Alzheimer's, Lewy body dementia, AI, Drug discovery, Screening, hiPSC, Organoid, Mitochondria, Protein misfolding, Cell death" %}

{% include search-info.html %}

{% include section.html %}

## Diseases & Disorders
{% include list.html data="programmes" component="catalogue" filters="role: disease, group: project" style="small" %}
{% include list.html data="programmes" component="catalogue" filters="role: disorder, group: project" style="small" %}

## Technological Advances
{% include list.html data="programmes" component="catalogue" filters="role: tech, group: project" style="small" %}

## Mechanisms
{% include list.html data="programmes" component="catalogue" filters="role: mech, group: project" style="small" %}
