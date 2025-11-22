---
layout: page
title: Research
permalink: /research/
---

<style>
/* Projects styling */
.projects {
  margin-bottom: 4em;
  padding-bottom: 3em;
  border-bottom: 3px solid #e5e7eb;
}

.project {
  margin-bottom: 2em;
  padding: 1.5em;
  background: linear-gradient(135deg, #f0f9ff 0%, #e0f2fe 100%);
  border-radius: 12px;
  border-left: 4px solid #3b82f6;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);
  transition: transform 0.2s, box-shadow 0.2s;
}

.project:hover {
  transform: translateY(-2px);
  box-shadow: 0 4px 8px rgba(59, 130, 246, 0.15);
}

.project-title {
  font-size: 1.3em;
  font-weight: 700;
  margin-bottom: 0.7em;
  color: #1e40af;
}

.project-description {
  color: #374151;
  line-height: 1.7;
  font-size: 1.05em;
}

/* Publications styling */
.publications {
  margin-top: 3em;
}

.year-group {
  margin-bottom: 3em;
}

.year-heading {
  font-size: 1.5em;
  font-weight: bold;
  margin-bottom: 1.5em;
  padding-bottom: 0.3em;
  border-bottom: 2px solid #e5e7eb;
  color: #1f2937;
}

.publication {
  display: flex;
  gap: 1.5em;
  margin-bottom: 2.5em;
  padding-bottom: 2em;
  border-bottom: 1px solid #f3f4f6;
}

.publication:last-child {
  border-bottom: none;
}

.pub-image {
  flex-shrink: 0;
  width: 200px;
  height: auto;
}

.pub-image img {
  width: 100%;
  height: auto;
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  transition: transform 0.2s;
}

.pub-image img:hover {
  transform: scale(1.03);
}

.pub-content {
  flex: 1;
  min-width: 0;
}

.pub-title {
  font-size: 1.15em;
  font-weight: 600;
  margin-bottom: 0.4em;
  line-height: 1.4;
  color: #111827;
}

.pub-authors {
  color: #374151;
  margin-bottom: 0.3em;
  font-size: 0.95em;
}

.pub-venue {
  font-style: italic;
  color: #6b7280;
  margin-bottom: 0.7em;
  font-size: 0.95em;
}

.pub-links {
  margin-top: 0.7em;
}

.pub-links a {
  display: inline-block;
  margin-right: 0.8em;
  margin-bottom: 0.5em;
  padding: 0.3em 0.9em;
  background-color: #f3f4f6;
  border-radius: 6px;
  text-decoration: none;
  font-size: 0.9em;
  color: #2563eb;
  transition: all 0.2s;
  font-weight: 500;
}

.pub-links a:hover {
  background-color: #2563eb;
  color: white;
  text-decoration: none;
  transform: translateY(-1px);
}

.pub-abstract {
  margin-top: 0.8em;
  padding: 1em 1.2em;
  background-color: #f9fafb;
  border-left: 3px solid #e5e7eb;
  border-radius: 4px;
  font-size: 0.93em;
  color: #4b5563;
  line-height: 1.6;
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

## Projects

<div class="projects">

<div class="project">
  <div class="project-title">Project Name 1</div>
  <div class="project-description">
    Brief description of the research project, including goals, methods, and current status. This section highlights ongoing work and collaborative efforts.
  </div>
</div>

<div class="project">
  <div class="project-title">Project Name 2</div>
  <div class="project-description">
    Brief description of the research project, including goals, methods, and current status. This section highlights ongoing work and collaborative efforts.
  </div>
</div>

</div>

## Publications

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
