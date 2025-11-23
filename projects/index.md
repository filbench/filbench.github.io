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
  margin-bottom: 2em;
  padding: 1.5em;
  background: linear-gradient(135deg, #f0f9ff 0%, #e0f2fe 100%);
  border-radius: 12px;
  border-left: 4px solid #3b82f6;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);
  transition: transform 0.2s, box-shadow 0.2s;
}

.project-item:hover {
  transform: translateY(-2px);
  box-shadow: 0 4px 8px rgba(59, 130, 246, 0.15);
}

.project-header {
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  margin-bottom: 0.5em;
}

.project-title {
  font-size: 1.3em;
  font-weight: 700;
  color: #1e40af;
  margin: 0;
}

.project-title a {
  color: #1e40af;
  text-decoration: none;
}

.project-title a:hover {
  text-decoration: underline;
}

.project-date {
  color: #6b7280;
  font-size: 0.9em;
}

.project-description {
  color: #374151;
  line-height: 1.7;
  font-size: 1.05em;
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
