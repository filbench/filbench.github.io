---
layout: page
title: Projects
permalink: /projects/
hide_title: true
---

<style>
.projects-list {
  list-style: none;
  padding: 0;
}

.project-item {
  margin-bottom: 1.5em;
  padding: 0;
  border-bottom: 1px solid #e0e0e0;
  padding-bottom: 1em;
}

.project-item:last-child {
  border-bottom: none;
}

.project-header {
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  margin-bottom: 0.25em;
}

.project-title {
  font-size: 1em;
  font-weight: 600;
  color: #333;
  margin: 0;
  font-family: monospace;
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
  font-size: 0.85em;
  flex-shrink: 0;
  margin-left: 1em;
  font-family: monospace;
}

.project-description {
  color: #666;
  line-height: 1.4;
  font-size: 0.9em;
}
</style>

{% assign projects = site.projects | sort: 'date' | reverse %}
{% if projects.size > 0 %}
<ul class="projects-list">
  {% for project in projects %}
  <li class="project-item">
    <div class="project-header">
      <h2 class="project-title">
        <a href="{{ project.url | relative_url }}">{{ project.title }}</a>
      </h2>
      <div class="project-date">{{ project.date | date: "%b %Y" }}</div>
    </div>
    {% if project.description %}
    <div class="project-description">{{ project.description }}</div>
    {% endif %}
  </li>
  {% endfor %}
</ul>
{% else %}
<p>No projects yet.</p>
{% endif %}
