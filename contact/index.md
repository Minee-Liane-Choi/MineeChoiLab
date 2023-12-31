---
title: Contact
nav:
  order: 5
  tooltip: Email, address, and location
---

# {% include icon.html icon="fa-regular fa-envelope" %}Contact

The {{ site.title }} Lab is part of the Department of Brain and Cognitive Sciences (BCS) of KAIST. Minee is also affiliated with The Francis Crick Institute, London as an honorary fellow. We are located at Building N5 on the main campus of KAIST.

Prof. Minee-Liane Choi <br>
Room 4  <br>
5F Meta-Fusion Building (W13) <br>
KAIST, 291 Daehak-ro <br>
Yuseong-gu, Daejeon <br>
South Korea.

{%
  include button.html
  type="email"
  text="minee.choi@kaist.ac.kr"
  link="minee.choi@kaist.ac.kr"
%}
{%
  include button.html
  type="phone"
  text="+82 (0)42-350-6516"
  link="+82-42-350-6516"
%}
{%
  include button.html
  type="adress"
  text="Google Maps"
  tooltip="Our location on Google Maps for easy navigation"
  link="https://maps.app.goo.gl/syAAaNp9j1fhXz2i8"
%}

{% include section.html %}

## {% include icon.html icon="fa-regular fa-id-card" %}Join Team {{ site.team }}
There are currently no vacancies.

{% include section.html dark=true %}

## {% include icon.html icon="fa-solid fa-location-dot" %}Affiliations

{% capture col1 %}

{%
  include figure.html
  image="images/contact/kaist.jpg"
  link="https://kaist.ac.kr"
%}

{% endcapture %}

{% capture col2 %}

{%
  include figure.html
  image="images/contact/bcs.jpg"
  link="https://bcs.kaist.ac.kr"
%}

{% endcapture %}

{% capture col3 %}

{%
  include figure.html
  image="images/contact/crick.jpg"
  link="https://www.crick.ac.uk"
%}

{% endcapture %}

{% include cols.html col1=col1 col2=col2 col3=col3 %}

{% capture col1 %}
Korea Advanced Institute of Science and Technology (KAIST) <br>
291 Daehak-ro <br>
Yuseong-gu, Daejeon <br>
South Korea <br>
{% endcapture %}

{% capture col2 %}
Department of Brain & Cognitive Sciences <br>
5F Meta-Fusion building (W13) <br>
KAIST
{% endcapture %}

{% capture col3 %}
The Francis Crick Institute <br>
1 Midland Road <br>
London NW1 1AT <br>
UK <br>
{% endcapture %}

{% include cols.html col1=col1 col2=col2 col3=col3 %}
