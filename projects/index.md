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
