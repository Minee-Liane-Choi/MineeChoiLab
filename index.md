---
---

{%
  include tags.html
  tags="Clinical neuroscience, Parkinson's, Alzheimer's, Dimentia, AI-based drug discovery, Mitochondria, Protein aggregation, Cell death"
  repo="your-lab/some-repo"
  link="blog"
%}

# Bon Voyage !!!

Team {{ site.team }} has set off her voyage to the cures for human neurodegenerative disorders.

{%
  include figure.html
  image="images/post3-seminar.jpg"
  caption="The First Wednesday Multidisciplinary Forum, April 2023"
  link="blog"
  width="600px"
%}

{% include section.html %}

## Highlights

{% capture text %}

See our publications.

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
  title="Our Research"
  text=text
%}

{% capture text %}

Find our ongoing projects and upcoming plans.

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
