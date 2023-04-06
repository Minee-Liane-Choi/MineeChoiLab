---
title: Team
nav:
  order: 3
  tooltip: About our team
---

# {% include icon.html icon="fa-solid fa-users" %}Team

{% include section.html background="images/team-phil-jackson.jpg" dark=true %}

"The strength of the team is each individual member. The strength of each member is the team." – Phil Jackson

{% include section.html %}

{% include list.html data="members" component="portrait" filters="role: pi" %}
{% include list.html data="members" component="portrait" filters="role: ^(?!pi$)" %}

{% include section.html background="images/team-john-maxwell.jpg" dark=true %}

"Collaboration is multiplication." – John C. Maxwell

{% include section.html %}

{% capture content %}

{% include figure.html image="images/collaborator-roger-barker.jpg" caption="Prof. Roger A. Barker" link="https://www.brc.cam.ac.uk" %}
{% include figure.html image="images//collaborator-sonia-gandhi.jpg" caption="Prof. Sonia Gandhi" link="https://www.crick.ac.uk/research/labs/sonia-gandhi" %}
{% include figure.html image="images//collaborator-andrey-abramov.jpg" caption="Prof. Andrey Y. Abramov" link="https://www.ucl.ac.uk/ion/research/our-departments/clinical-and-movement-neurosciences/centres-and-projects/andrey-y-abramov" %}

{% include figure.html image="images/collaborator-jaeseung-jeong.jpg" caption="Prof. Jaeseung Jeong" link="http://raphe.kaist.ac.kr/" %}
{% include figure.html image="images//collaborator-daesoo-kim.jpg" caption="Prof. Sonia Gandhi" link="http://bglab.kr/" %}
{% include figure.html image="images//collaborator-sebum-paik.jpg" caption="Prof. Sebum Paik" link="http://vs.kaist.ac.kr/" %}

{% include figure.html image="images//collaborator-sangwan-lee.jpg" caption="Prof. Sangwan Lee" link="https://aibrain.kaist.ac.kr/sang-wan-lee" %}
{% include figure.html image="images//collaborator-seungwoo-lee.jpg" caption="Prof. Seungwoo Lee" link="" %}
{% include figure.html image="images//collaborator-jeongtae-kwon.jpg" caption="Prof. Jeongtae Kwon" link="" %}

{% endcapture %}

{% include grid.html style="square" content=content %}

{% include section.html background="images/team-issac-newton.jpg" dark=true %}

"If I have seen further, it is by standing on the shoulders of giants." — Isaac Newton

{% include section.html %}

{% capture content %}

{% include figure.html image="images/photo.jpg"%}
{% include figure.html image="images/photo.jpg"%}
{% include figure.html image="images/photo.jpg"%}

{% endcapture %}

{% include grid.html style="square" content=content %}
