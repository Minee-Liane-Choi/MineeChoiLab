---
title: Team
nav:
  order: 3
  tooltip: About our team
---

# {% include icon.html icon="fa-solid fa-users" %}Team

"The strength of the team is each individual member. The strength of each member is the team." – Phil Jackson

{% include section.html %}

{% include list.html data="members" component="portrait" filters="role: pi" %}
{% include list.html data="members" component="portrait" filters="role: ^(?!pi$)" %}

{% include section.html background="images/background.jpg" dark=true %}

"Collaboration is multiplication." – John C. Maxwell

{% include section.html %}

{% capture content %}

{% include figure.html image="images/partner-roger-barker.jpg" caption="Prof. Roger A. Barker" link="https://www.brc.cam.ac.uk" %}
{% include figure.html image="images//partner-sonia-gandhi.jpg" caption="Prof. Sonia Gandhi" link="https://www.crick.ac.uk/research/labs/sonia-gandhi" %}
{% include figure.html image="images//partner-andrey-abramov.jpg" caption="Prof. Andrey Y. Abramov" link="https://www.ucl.ac.uk/ion/research/our-departments/clinical-and-movement-neurosciences/centres-and-projects/andrey-y-abramov" %}
{% include figure.html image="images/photo.jpg"%}
{% include figure.html image="images/photo.jpg"%}
{% include figure.html image="images/photo.jpg"%}

{% endcapture %}

{% include grid.html style="square" content=content %}

{% include section.html background="images/background.jpg" dark=true %}

"Collaboration is multiplication." – John C. Maxwell
