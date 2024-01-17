---
title: Contact
nav:
  order: 5
  tooltip: Email, address, and location
---

# {% include icon.html icon="fa-regular fa-envelope" %}Contact

Prof. Minee-Liane Choi <br>
Room 4 <br>
5F Meta Convergence building (W13) <br>
Korea Advanced Institute of Science and Technology (KAIST) <br>
291 Daehak-ro <br>
Yuseong-gu, Daejeon <br>
South Korea

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

{%
  include figure.html
  image="images/contact/map.jpg"
  link="https://maps.app.goo.gl/syAAaNp9j1fhXz2i8"
%}

{% include section.html dark=false %}

## {% include icon.html icon="fa-solid fa-location-dot" %}Affiliations

The {{ site.title }} Lab is part of the Department of Brain and Cognitive Sciences (BCS) of KAIST. We are located at 5F Meta-Fusion building (W13) on the main campus of KAIST.
Minee is also affiliated with two research institutions in London, The Francis Crick Institute and the UCL Queen Square Institute of Neurology, as an honorary fellow. 

{% capture col1 %}

{%
  include figure.html
  image="images/contact/bcs.jpg"
  link="https://bcs.kaist.ac.kr"
%}

{% endcapture %}

{% capture col2 %}

{%
  include figure.html
  image="images/contact/crick.jpg"
  link="https://www.crick.ac.uk"
%}

{% endcapture %}

{% capture col3 %}

{%
  include figure.html
  image="images/contact/ucl.jpg"
  link="https://www.ucl.ac.uk/ion"
%}

{% endcapture %}

{% include cols.html col1=col1 col2=col2 col3=col3 %}

{% capture col1 %}
<p style="font-size: 13px; color: #1e90ff;">
Department of Brain & Cognitive Sciences <br>
5F Meta Convergence building (W13) <br>
Korea Advanced Institute of Science and Technology (KAIST) <br>
291 Daehak-ro <br>
Yuseong-gu, Daejeon <br>
South Korea
</p>
{% endcapture %}

{% capture col2 %}
<p style="font-size: 13px; color: #1e90ff;">
The Francis Crick Institute <br>
1 Midland Road <br>
London NW1 1AT <br>
UK
</p>
{% endcapture %}

{% capture col3 %}
<p style="font-size: 13px; color: --primary;">
The UCL Queen Square Institute of Neurology <br>
Queen Square<br>
London WC1N 3BG <br>
UK
</p>
{% endcapture %}

{% include cols.html col1=col1 col2=col2 col3=col3 %}
