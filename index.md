---
title: Home
carousels:
  - images: 
    - image: /images/carousel/wex.webp
    - image: /images/carousel/wex.webp
    - image: /images/carousel/wex.webp
    - image: /images/carousel/wex.webp
    - image: /images/carousel/wex.webp
---

# {% include icon.html icon="fa-solid fa-users" %}Home


Here

{% include section.html size="full" %}

{% include figure.html image="images/background.jpg" width="100%" %}

Here

{% include carousel.html height="40" unit="%" duration="10" number="1" %}
  
{% include section.html %}

## {{ site.team }} News

Bon Voyage !!!
Team {{ site.team }} has set off her voyage to the cures for human neurodegenerative disorders.

## {{ site.team }} Courses

<table>
  <tr>
    <th>Term</th>
    <th>Course</th>
    <th>For</th>
  </tr>
  <tr>
    <td><b>Spring 2023</b></td>
    <td><b>Biology of Neurons</b></td>
    <td><b>Undergraduate</b></td>
  </tr>
  <tr>
    <td>Autumn 2023</td>
    <td>Neurological Disorders</td>
    <td>Graduate</td>
  </tr>
</table>

## {{ site.team }} Talks & Seminars
{%
  include figure.html
  image="images/post3-seminar1.jpg"
  caption="The First Wednesday Multidisciplinary Forum, April 2023"
  link="blog"
  width="600px"
%}

## Join {{ site.team }} 

There are currently no vacancies available.

{% include section.html %}

## About {{ site.team }}

{% capture text %}

See our published works.

{%
  include button.html
  link="research"
  text="See our publications"
  icon="fa-solid fa-arrow-right"
  flip=true
  style="bare"
%}

{% endcapture %}

{%
  include feature.html
  image="images/home-research.jpg"
  link="research"
  title="Our Publications"
  text=text
%}

{% capture text %}

Find our projects, expertise, STPs and plans.

{%
  include button.html
  link="projects"
  text="Browse our projects"
  icon="fa-solid fa-arrow-right"
  flip=true
  style="bare"
%}

{% endcapture %}

{%
  include feature.html
  image="images/home-project.jpg"
  link="projects"
  title="Our Projects"
  flip=true
  style="bare"
  text=text
%}

{% capture text %}

Meet our team mates, collaborators and partners.

{%
  include button.html
  link="team"
  text="Meet our team"
  icon="fa-solid fa-arrow-right"
  flip=true
  style="bare"
%}

{% endcapture %}

{%
  include feature.html
  image="images/home-team.jpg"
  link="team"
  title="Our Team"
  text=text
%}
