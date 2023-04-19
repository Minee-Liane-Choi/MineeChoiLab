---
---

{%
  include tags.html
  tags="Clinical neuroscience, Parkinson's, Alzheimer's, Dimentia, AI-based drug discovery, Mitochondria, Protein aggregation, Cell death"
  link="projects"
%}

<div class="slideshow-container">

<div class="mySlides fade">
  <div class="numbertext">1 / 3</div>
  <img src="images/background.jpg" style="width:100%">
  <div class="text">Caption Text</div>
</div>

<div class="mySlides fade">
  <div class="numbertext">2 / 3</div>
  <img src="images/contact-kaist.jpg" style="width:100%">
  <div class="text">Caption Two</div>
</div>

<div class="mySlides fade">
  <div class="numbertext">3 / 3</div>
  <img src="images/contact-crick.jpg" style="width:100%">
  <div class="text">Caption Three</div>
</div>

</div>
<br>

<div style="text-align:center">
  <span class="dot" onclick="currentSlide(1)"></span> 
  <span class="dot" onclick="currentSlide(2)"></span> 
  <span class="dot" onclick="currentSlide(3)"></span> 
</div>

<script>
let slideIndex = 0;
showSlides();
  
function currentSlide(n) {
  showSlides(slideIndex = n);
}
  
function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
}

function showSlides() {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}    
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
  setTimeout(showSlides, 5000); // Change image every 2 seconds
}
</script>

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
