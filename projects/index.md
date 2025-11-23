---
layout: page
title: Projects
permalink: /projects/
---

<style>
.projects-list {
  list-style: none;
  padding: 0;
}

.project-item {
  margin-bottom: 1.25em;
  padding: 1em;
  background: #fafafa;
  border-radius: 6px;
  border-left: 3px solid #d1d5db;
  transition: border-color 0.2s;
}

.project-item:hover {
  border-left-color: #9ca3af;
}

.project-header {
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  margin-bottom: 0.3em;
}

.project-title {
  font-size: 1.1em;
  font-weight: 600;
  color: #111827;
  margin: 0;
}

.project-title a {
  color: #111827;
  text-decoration: none;
}

.project-title a:hover {
  text-decoration: underline;
}

.project-date {
  color: #9ca3af;
  font-size: 0.85em;
  flex-shrink: 0;
  margin-left: 1em;
}

.project-description {
  color: #6b7280;
  line-height: 1.5;
  font-size: 0.95em;
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
