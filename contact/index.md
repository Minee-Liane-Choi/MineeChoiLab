---
title: Contact
nav:
  order: 5
  tooltip: Email, address, and location
---

# {% include icon.html icon="fa-regular fa-envelope-open" %}Contact

<table align="left">
  <tr style="font-size: 16px;">
    <td>{% include icon.html icon="fa-solid fa-user-secret" %}</td>
    <td align="Left" style="width:55%" >Prof. Minee Choi</td>
    <td rowspan="4">{% include figure.html image="images/archive/0000-00-drNubzuki.jpg" caption="" link="https://brandkaist.com/product-category/accessories/page/3/" width="280px" %}</td>
  </tr>
  <tr style="font-size: 16px;">
    <td>{% include icon.html icon="fa-regular fa-building" %}</td>
    <td align="Left">Room 4 <br>
                     5F Meta Convergence building (W13) <br>
                     Korea Advanced Institute of Science and Technology (KAIST) <br>
                     291 Daehak-ro <br>
                     Yuseong-gu, Daejeon <br>
                     South Korea </td>
  </tr>
  <tr style="font-size: 16px;">
    <td>{% include icon.html icon="fa-regular fa-envelope" %}</td>
    <td align="Left">minee.choi@kaist.ac.kr</td>
  </tr>  
  <tr style="font-size: 16px;">
    <td>{% include icon.html icon="fa-solid fa-phone" %}</td>
    <td align="Left">+82 (0)42-350-6516</td>
  </tr>
  <tr style="font-size: 16px;">
    <td>{% include icon.html icon="fa-regular fa-compass" %}</td>
    <td colspan="2" align="Center"> 
                        {%
                          include button.html
                          type="adress"
                          text="Google Maps"
                          tooltip="Our location on Google Maps"
                          link="https://maps.app.goo.gl/syAAaNp9j1fhXz2i8"
                        %}
                        {%
                          include button.html
                          type="adress"
                          text="Naver Map"
                          tooltip="Our location on Naver Map"
                          link="https://naver.me/GdiqLWG9"
                        %}
                        {%
                          include button.html
                          type="adress"
                          text="Kakao Map"
                          tooltip="Our location on Kakao Map"
                          link="https://kko.to/e_0hLHT5B6"
                        %}
                        {%
                          include figure.html
                          image="images/contact/map.jpg"
                          link="https://maps.app.goo.gl/syAAaNp9j1fhXz2i8"
                        %} </td>
  </tr>
</table>

{% include section.html dark=false %}

## {% include icon.html icon="fa-solid fa-passport" %}Affiliations

The {{ site.title }} Lab is part of the Department of Brain and Cognitive Sciences (BCS) of KAIST. Minee holds an honorary fellowship at two research institutions in London, the Francis Crick Institute and the UCL Queen Square Institute of Neurology. She also serves in an adjunct professorship at Chang Gung University and Memorial Hospital in Taiwan.

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
<p style="font-size: 13px; color: #0ea5e9;">
Department of Brain & Cognitive Sciences <br>
5F Meta Convergence building (W13) <br>
Korea Advanced Institute of Science and Technology (KAIST) <br>
291 Daehak-ro <br>
Yuseong-gu, Daejeon <br>
South Korea
</p>
{% endcapture %}

{% capture col2 %}
<p style="font-size: 13px; color: #0ea5e9;">
The Francis Crick Institute <br>
1 Midland Road <br>
London NW1 1AT <br>
UK
</p>
{% endcapture %}

{% capture col3 %}
<p style="font-size: 13px; color: #0ea5e9;">
The UCL Queen Square Institute of Neurology <br>
Queen Square<br>
London WC1N 3BG <br>
UK
</p>
{% endcapture %}

{% include cols.html col1=col1 col2=col2 col3=col3 %}

{% capture col1 %}

{%
  include figure.html
  image="images/contact/cgu.jpg"
  link="https://www.cgu.edu.tw/en"
%}

{% endcapture %}

{% capture col2 %}

{%
  include figure.html
  image="images/contact/cgm.jpg"
  link="https://www.cgmh.org.tw/eng"
%}

{% endcapture %}

{% capture col3 %}

{%
  include figure.html
  image="images/contact/ssr.jpg"
  link=""
%}

{% endcapture %}

{% include cols.html col1=col1 col2=col2 col3=col3 %}

{% capture col1 %}
<p style="font-size: 13px; color: #0ea5e9;">
Chang Gung University <br>
No.259, Wenhua 1st Rd <br>
Guishan Dist <br>
Taoyuan City 33302 <br>
Taiwan (R.O.C.)
</p>
{% endcapture %}

{% capture col2 %}
<p style="font-size: 13px; color: #0ea5e9;">
Chang Gung Memorial Hospital <br>
Taiwan
</p>
{% endcapture %}

{% capture col3 %}
<p style="font-size: 13px; color: #0ea5e9;">
Graduate School of Stem Cell and Regenerative Biology <br>
Korea Advanced Institute of Science and Technology (KAIST) <br>
291 Daehak-ro <br>
Yuseong-gu, Daejeon <br>
South Korea
</p>
{% endcapture %}

{% include cols.html col1=col1 col2=col2 col3=col3 %}
