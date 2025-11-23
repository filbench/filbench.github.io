---
layout: page
title: Publications
permalink: /publications/
---

<style>
/* Publications styling */
.publications {
  margin-top: 1.5em;
}

.year-group {
  margin-bottom: 2em;
}

.year-heading {
  font-size: 1.2em;
  font-weight: 600;
  margin-bottom: 0.75em;
  padding-bottom: 0.25em;
  border-bottom: 1px solid #e0e0e0;
  color: #333;
}

.publication {
  display: flex;
  gap: 1em;
  margin-bottom: 1.5em;
  padding-bottom: 1.25em;
  border-bottom: 1px solid #f0f0f0;
}

.publication:last-child {
  border-bottom: none;
}

.pub-image {
  flex-shrink: 0;
  width: 150px;
  height: auto;
}

.pub-image img {
  width: 100%;
  height: auto;
  border-radius: 4px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
}

.pub-content {
  flex: 1;
  min-width: 0;
}

.pub-title {
  font-size: 1em;
  font-weight: 600;
  margin-bottom: 0.25em;
  line-height: 1.3;
  color: #111827;
}

.pub-authors {
  color: #666;
  margin-bottom: 0.2em;
  font-size: 0.9em;
}

.pub-venue {
  font-style: italic;
  color: #999;
  margin-bottom: 0.5em;
  font-size: 0.85em;
}

.pub-links {
  margin-top: 0.5em;
}

.pub-links a {
  display: inline-block;
  margin-right: 0.5em;
  margin-bottom: 0.25em;
  padding: 0.2em 0.6em;
  background-color: #f5f5f5;
  border-radius: 3px;
  text-decoration: none;
  font-size: 0.85em;
  color: #0066cc;
  font-weight: 500;
}

.pub-links a:hover {
  background-color: #e0e0e0;
  text-decoration: none;
}

.pub-abstract {
  margin-top: 0.5em;
  padding: 0.75em 1em;
  background-color: #fafafa;
  border-left: 2px solid #e0e0e0;
  border-radius: 2px;
  font-size: 0.85em;
  color: #666;
  line-height: 1.4;
}

@media (max-width: 768px) {
  .publication {
    flex-direction: column;
  }

  .pub-image {
    width: 100%;
  }
}
</style>

<div class="publications">

<div class="year-group">
  <div class="year-heading">2024</div>

  <div class="publication">
    <div class="pub-image">
      <img src="{{ '/assets/images/publications/sample-paper-1.svg' | relative_url }}" alt="Paper visualization">
    </div>
    <div class="pub-content">
      <div class="pub-title">Title of Your Research Paper</div>
      <div class="pub-authors">Author 1, Author 2, and Author 3</div>
      <div class="pub-venue">Conference Name (CONF) 2024</div>
      <div class="pub-links">
        <a href="#">PDF</a>
        <a href="#">arXiv</a>
        <a href="#">Code</a>
        <a href="#">BibTeX</a>
      </div>
    </div>
  </div>

  <div class="publication">
    <div class="pub-image">
      <img src="{{ '/assets/images/publications/sample-paper-2.svg' | relative_url }}" alt="Paper visualization">
    </div>
    <div class="pub-content">
      <div class="pub-title">Another Research Paper Title</div>
      <div class="pub-authors">Author 1, Author 2, and Author 3</div>
      <div class="pub-venue">Journal Name, Volume(Issue), 2024</div>
      <div class="pub-links">
        <a href="#">PDF</a>
        <a href="#">DOI</a>
        <a href="#">Code</a>
      </div>
      <div class="pub-abstract">
        Optional abstract text that provides more detail about the research. This can be shown or hidden based on preference.
      </div>
    </div>
  </div>

</div>

<div class="year-group">
  <div class="year-heading">2023</div>

  <div class="publication">
    <div class="pub-image">
      <img src="{{ '/assets/images/publications/sample-paper-3.svg' | relative_url }}" alt="Paper visualization">
    </div>
    <div class="pub-content">
      <div class="pub-title">Previous Year Publication Example</div>
      <div class="pub-authors">Author 1, Author 2, and Author 3</div>
      <div class="pub-venue">Conference Name (CONF) 2023</div>
      <div class="pub-links">
        <a href="#">PDF</a>
        <a href="#">Slides</a>
        <a href="#">Video</a>
      </div>
    </div>
  </div>

</div>

</div>
