---
title: Home
carousels:
  - images: 
    - image: /images/carousel/contact-kaist.jpg
    - image: /images/carousel/minee.jpg
    - image: /images/carousel/contact-crick.jpg
---

# Make neurodegerative disease curable

The {{ site.title }} Lab a team of researchers at Korea Advanced Institute of Science and Technology (KAIST) dedicated to making human neurodegenerative disease curable.

We use patient-derived human stem cells as a model for investigating the causes of Parkinson’s disease (PD), with the ultimate aim of translating our insights into improved diagnostics, biomarkers, and novel targets for therapies. We also use human-induced pluripotent stem cells (hiPSCs) to investigate the key cellular and molecular events underlying neurodegeneration. We also examine human stem cells using cutting-edge dynamic imaging, in order to investigate the mechanisms that lead to neurodegeneration. 

We are particularly interested in two key mechanisms: protein misfolding and perturbed RNA regulation, and how these mechanisms influence cell dysfunction during disease.

Overall, our aim is to understand how these two key processes (protein misfolding and perturbed RNA regulation) conspire in neurodegenerative disease. The ultimate hope is that through a better understanding of the molecular and cellular origins of diseases like Parkinson’s disease (PD), we will be able to take a more strategic approach to the development of novel therapies, such as an AI-based platform for personalized drug discovery.

{% include section.html size="full" %}

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
