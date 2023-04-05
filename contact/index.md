---
title: Contact
nav:
  order: 5
  tooltip: Email, address, and location
---

# {% include icon.html icon="fa-regular fa-envelope" %}Contact

<b>Team BReP<mark><strong><em>A</em>I</strong></mark>R</b> is part of the Department of Brain and Cognitive Sciences (BCS) of KAIST. Minee is also affiliated with The Francis Crick Institute, London as an honorary fellow. We are located at Building N5 on the main campus of KAIST.

Prof. Minee-Liane Choi <br>
N5-2260, KAIST <br>
291 Daehak-ro <br>
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
  link="https://www.google.com/maps/place/Basic+Experiment+RESEARCH+B%2FD+,N5+Building,+KAIST/@36.3740132,127.3617587,17z/data=!3m1!4b1!4m6!3m5!1s0x35654bca45175ce3:0xb89a3db6416dea2c!8m2!3d36.3740132!4d127.3639474!16s%2Fg%2F119wl0_vz"
%}

{% include section.html %}

{% capture col1 %}

{%
  include figure.html
  image="images/contact-kaist.jpg"
  caption="KAIST"
  link="https://kaist.ac.kr"
%}

{% endcapture %}

{% capture col2 %}

{%
  include figure.html
  image="images/contact-bcs.jpg"
  caption="Department of Brain & Cognitive Sciences"
  link="https://bcs.kaist.ac.kr"
%}

{% endcapture %}

{% capture col3 %}

{%
  include figure.html
  image="images/contact-crick.jpg"
  caption="The Francis Crick Institute"
  link="https://www.crick.ac.uk"
%}

{% endcapture %}

{% capture col4 %}

{%
  include figure.html
  image="images/photo.jpg"
  caption=""
%}

{% endcapture %}

{% include cols.html col1=col1 col2=col2 col3=col3 %}

{% include section.html dark=true %}

{% capture col1 %}
Korea Advanced Institute of Science and Technology (KAIST) <br>
291 Daehak-ro <br>
Yuseong-gu, Daejeon <br>
South Korea <br>
{% endcapture %}

{% capture col2 %}
Department of Brain and Cognitive Sciences <br>
Meta-Fusion building <br>
KAIST
{% endcapture %}

{% capture col3 %}
The Francis Crick Institute <br>
1 Midland Road <br>
London NW1 1AT <br>
UK <br>
{% endcapture %}

{% include cols.html col1=col1 col2=col2 col3=col3 %}
