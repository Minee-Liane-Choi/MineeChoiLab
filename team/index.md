---
title: Team
nav:
  order: 3
  tooltip: About our team
---

# {% include icon.html icon="fa-solid fa-users" %}Team

{% include section.html background="images/wallpaper/phil-jackson.jpg" dark=true %}

"The strength of the team is each individual member. The strength of each member is the team." – Phil Jackson

{% include button.html icon="fa-solid fa-handshake-angle" text="Join the Team" link="contact" style="button" %}

{% include section.html %}

{% include list.html data="members" component="portrait" filters="role: pi" %}
{% include list.html data="members" component="portrait" filters="role: postdoc, group: " %}
{% include list.html data="members" component="portrait" filters="role: phd, group: " %}
{% include list.html data="members" component="portrait" filters="role: ms, group: " %}
{% include list.html data="members" component="portrait" filters="role: undergrad, group: " %}
{% include list.html data="members" component="portrait" filters="role: associate, group: " %}
{% include list.html data="members" component="portrait" filters="role: admin, group: " %}

{% include section.html background="images/wallpaper/john-maxwell.jpg" dark=true %}

"Collaboration is multiplication." – John C. Maxwell

{% include section.html %}

{% capture content %}

{% include figure.html image="images/collaborator/sonia-gandhi.jpg" caption="Prof. Sonia Gandhi" link="https://www.crick.ac.uk/research/labs/sonia-gandhi" %}
{% include figure.html image="images/collaborator/andrey-abramov.jpg" caption="Prof. Andrey Y. Abramov" link="https://www.ucl.ac.uk/ion/research/our-departments/clinical-and-movement-neurosciences/centres-and-projects/andrey-y-abramov" %}

{% endcapture %}

{% include grid.html style="square" content=content %}

{% include section.html background="images/wallpaper/issac-newton.jpg" dark=true %}

"If I have seen further, it is by standing on the shoulders of giants." — Isaac Newton

{% include section.html %}

{% include list.html data="members" component="catalogue" filters="role: disease" %}
{% include list.html data="members" component="portrait" filters="role: ms, group: " %}

{% capture content %}

{% include figure.html image="images/photo.jpg"%}
{% include figure.html image="images/photo.jpg"%}
{% include figure.html image="images/photo.jpg"%}

{% endcapture %}

{% include grid.html style="square" content=content %}
