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

## {% include icon.html icon="fa-solid fa-brain" %}Diseases
{% include list.html data="programmes" component="catalogue" filters="role: disease, group: project" style="small" %}

## {% include icon.html icon="fa-regular fa-face-meh" %}Disorders
{% include list.html data="programmes" component="catalogue" filters="role: disorder, group: project" style="small" %}

## {% include icon.html icon="fa-regular fa-lightbulb" %}Innovations
{% include list.html data="programmes" component="catalogue" filters="role: tech, group: project" style="small" %}

## {% include icon.html icon="fa-solid fa-gears" %}Mechanisms
{% include list.html data="programmes" component="catalogue" filters="role: mech, group: project" style="small" %}
