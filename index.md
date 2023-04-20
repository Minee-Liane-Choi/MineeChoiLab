---
title: Home
carousels:
  - images: 
    - image: /images/carousel/contact-kaist.jpg
    - image: /images/carousel/minee.jpg
    - image: /images/carousel/post2-seminar3.jpg
    - image: /images/carousel/contact-crick.jpg
---

# New approaches for brain repair

The {{ site.title }} Lab is a team of researchers at the Korea Advanced Institute of Science and Technology (KAIST) dedicated to making human neurodegenerative disease more curable than yesterday. The ultimate hope is that by better understanding the molecular and cellular origins of neurodegenerative diseases. 
<br>

We aim to build a personalized therapeutic platform to solve the three major problems in neurodegenerative diseases.
<br>
<ol>
  <li>Uniqueness of the human brain </li>
  <li>Clinically individually variable </li>
  <li>Causes mostly unknown</li>
</ol>

Our therapeutic platform will utilize the following two technical advances.
<br>

<ol>
  <li>Patient-induced pluripotent stem cell (iPSC) technology, which allows the adoption of the “disease in a dish” paradigm to profile an individual’s brain cells and define the mechanism driving their own diseases</li>
  <li>Machine learning, which can capture and understand disease heterogeneity, and ultimately generate a predictive model for an individual patient</li>
</ol>

{% include section.html size="full" %}

{% include carousel.html height="40" unit="%" duration="10" number="1" %}
  
{% include section.html %}

## {{ site.team }} News

Bon Voyage !!!
Team {{ site.team }} has set off on her voyage to the cures for human neurodegenerative disorders.

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
  image="images/post/issue3/seminar1.jpg"
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
  image="images/home/research.jpg"
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
  image="images/home/project.jpg"
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
  image="images/home/team.jpg"
  link="team"
  title="Our Team"
  text=text
%}
