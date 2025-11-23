---
layout: page
title: Projects
permalink: /projects/
---

<style>
.page-content h1:first-child,
.page-heading,
/* .post-title {
  display: none;
} */

.projects-list {
  list-style: none;
  padding: 0;
  margin: 0;
}

.project-item {
  margin-bottom: 0.75em;
  padding: 0.5em 0.75em;
  border: 1px solid #e8e8e8;
  border-radius: 3px;
  background: #fafafa;
}

.project-header {
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  margin-bottom: 0.25em;
}

.project-title {
  font-size: 0.95em;
  font-weight: 600;
  color: #333;
  margin: 0;
  line-height: 1.3;
}

.project-title a {
  color: #0066cc;
  text-decoration: none;
}

.project-title a:hover {
  text-decoration: underline;
}

.project-date {
  color: #999;
  font-size: 0.75em;
  flex-shrink: 0;
  margin-left: 1em;
  font-family: monospace;
}

.project-description {
  color: #666;
  line-height: 1.4;
  font-size: 0.85em;
  margin: 0;
}

.project-metadata {
  margin-top: 0.5em;
  display: flex;
  flex-wrap: wrap;
  gap: 0.5em;
  font-size: 0.8em;
}

.metadata-item {
  display: flex;
  align-items: center;
  gap: 0.3em;
}

.metadata-label {
  font-weight: 600;
  color: #555;
}

.metadata-value {
  color: #777;
}

.skills-list {
  display: inline-flex;
  flex-wrap: wrap;
  gap: 0.3em;
  margin: 0;
  padding: 0;
  list-style: none;
}

.skill-tag {
  background: #e8f4f8;
  color: #0066cc;
  padding: 0.15em 0.5em;
  border-radius: 3px;
  font-size: 0.9em;
  font-weight: 500;
}

.category-badge {
  background: #f0f0f0;
  color: #555;
  padding: 0.2em 0.6em;
  border-radius: 3px;
  font-size: 0.85em;
  font-weight: 500;
}
</style>

Below are our ongoing projects for Filipino NLP.
We are constantly **looking for collaborators**, especially those interested in contributing annotations, compute resources (credits or machines), or expertise in specific areas such as evaluation, data collection, and model post-training.

&nbsp;

{% assign projects = site.categories.projects | sort: 'date' | reverse %}
{% if projects.size > 0 %}
<ul class="projects-list">
  {% for project in projects %}
  <li class="project-item">
    <div class="project-header">
      <div class="project-title">
        <a href="{{ project.url | relative_url }}">{{ project.title }}</a>
      </div>
      <div class="project-date">{{ project.date | date: "%b %Y" }}</div>
    </div>
    {% if project.description %}
    <div class="project-description">{{ project.description }}</div>
    {% endif %}
    <div class="project-metadata">
      {% if project.category %}
      <span class="category-badge">{{ project.category }}</span>
      {% endif %}
      {% if project.expected_date_range %}
      <div class="metadata-item">
        <span class="metadata-label">Timeline:</span>
        <span class="metadata-value">{{ project.expected_date_range }}</span>
      </div>
      {% endif %}
      {% if project.skills %}
      <div class="metadata-item">
        <span class="metadata-label">Skills:</span>
        <ul class="skills-list">
          {% for skill in project.skills %}
          <li class="skill-tag">{{ skill }}</li>
          {% endfor %}
        </ul>
      </div>
      {% endif %}
    </div>
  </li>
  {% endfor %}
</ul>
{% else %}
<p>No projects yet.</p>
{% endif %}

<style>
.faq-section {
  margin-top: 2em;
}

.faq-section h2 {
  margin-bottom: 1em;
}

.faq-item {
  margin-bottom: 0.75em;
  border: 1px solid #e8e8e8;
  border-radius: 3px;
  background: #fafafa;
}

.faq-item summary {
  padding: 0.75em 1em;
  cursor: pointer;
  font-weight: 600;
  font-size: 0.9em;
  color: #333;
  list-style: none;
  user-select: none;
}

.faq-item summary::-webkit-details-marker {
  display: none;
}

.faq-item summary::before {
  content: "▶ ";
  display: inline-block;
  margin-right: 0.5em;
  transition: transform 0.2s;
}

.faq-item[open] summary::before {
  transform: rotate(90deg);
}

.faq-item summary:hover {
  background: #f0f0f0;
}

.faq-answer {
  padding: 0 1em 1em 2.5em;
  font-size: 0.85em;
  color: #666;
  line-height: 1.5;
}
</style>

&nbsp;

## Frequently Asked Questions

<div class="faq-section">


<details class="faq-item">
  <summary>How are projects decided?</summary>
  <div class="faq-answer">
    It's a loose process, but in general, projects are proposed and discussed by the group based on gaps we find in Filipino NLP and current research needs.
    It is important that a project has a dedicated lead to drive it forward, so it also helps if your research project aligns with your own interests or ongoing work (e.g., thesis, job).
    Finally, we are still an academic research group at heart, so projects that can potentially lead to publications are prioritized.
  </div>
</details>

<details class="faq-item">
  <summary>How can I join a project?</summary>
  <div class="faq-answer">
    Click on any project above to see the skills needed and timeline. 
    If you're interested, reach out to the project lead through their contact channels with information about your background. 
    We welcome contributors from all levels of experience, from students to experienced researchers.
  </div>
</details>

<details class="faq-item">
  <summary>I'm not an NLP researcher, but how can I help?</summary>
  <div class="faq-answer">
    There are many ways to contribute! 
    The best way is by donating compute resources or funding to support our work.
    Compute resources can be in the form of cloud credits or sharing access to machines with GPUs.
    We'll use these resources for training models and running experiments.
    Also, we'll acknowledge your organization in our project pages and publications.
    Finally, spreading the word about our projects and sharing our models and datasets with your networks also helps a lot!
  </div>
</details>

</div>
