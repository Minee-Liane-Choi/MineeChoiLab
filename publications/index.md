---
title: Publications
nav:
  order: 1
  tooltip: Published works

links:  
  orcid: 0000-0001-9414-8214
  google-scholar: _N6YhZUAAAAJ
  research-gate: Minee-Liane-Choi-2
---

# {% include icon.html icon="fa-solid fa-layer-group" %}Publications

We post our published works on this page. You can also find additional information about our research activities via the links below.

{% for link in page.links %}
    {% assign key = link[0] %}
    {% assign value = link[1] %}
    {% include button.html type=key link=value style="bare" %}
{% endfor %}

## {% include icon.html icon="fa-regular fa-star" %}Selected

{% include citation.html lookup="Astrocytic RNA editing" style="rich" %}
{% include citation.html lookup="Prediction of mechanistic subtypes" style="rich" %}
{% include citation.html lookup="Pathological structural conversion" style="rich" %}

{% include section.html %}

## {% include icon.html icon="fa-solid fa-landmark-dome" %}All

{% include search-box.html %}

{% include tags.html tags="AI, hiPSC, Parkinson's, Alzheimer's, Mitochondria, Protein aggregation, Cell death, Ferroptosis, Inflammation, Synucleinopathy, Fabry disease, Huntington's, Hippocampus, Learning Memory, Neurogenesis, 1st Author, Corresponding Author" %}

{% include search-info.html %}

{% include list.html data="citations" component="citation" style="rich" %}
