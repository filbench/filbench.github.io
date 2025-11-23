---
layout: page
title: People
permalink: /people/
---

<style>
.people-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: 1em;
  margin-top: 1em;
}

.person-card {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
}

.person-photo {
  width: 100px;
  height: 100px;
  border-radius: 4px;
  object-fit: cover;
  filter: grayscale(100%);
  margin-bottom: 0.5em;
}

.person-name {
  font-size: 0.95em;
  font-weight: 600;
  color: #333;
  margin-bottom: 0.2em;
}

.person-name a {
  color: #333;
  text-decoration: none;
}

.person-name a:hover {
  color: #0066cc;
  text-decoration: underline;
}

.person-affiliation {
  font-size: 0.8em;
  color: #666;
  margin-bottom: 0.4em;
  font-style: italic;
}

.person-interests {
  font-size: 0.75em;
  color: #777;
  line-height: 1.3;
}

.person-interests-label {
  font-weight: 600;
  color: #555;
  display: block;
  margin-bottom: 0.2em;
}

.person-interests ul {
  list-style: none;
  padding: 0;
  margin: 0;
}

.person-interests li {
  margin-bottom: 0.1em;
}
</style>

<div class="people-grid">
  {% for person in site.data.people %}
  <div class="person-card">
    <img src="{{ person.photo | relative_url }}" alt="{{ person.name }}" class="person-photo">
    <div class="person-name">
      {% if person.website %}
      <a href="{{ person.website }}" target="_blank">{{ person.name }}</a>
      {% else %}
      {{ person.name }}
      {% endif %}
    </div>
    <div class="person-affiliation">{{ person.affiliation }}</div>
    {% if person.research_interests %}
    <div class="person-interests">
      <span class="person-interests-label">Research Interests:</span>
      <ul>
        {% for interest in person.research_interests %}
        <li>{{ interest }}</li>
        {% endfor %}
      </ul>
    </div>
    {% endif %}
  </div>
  {% endfor %}
</div>
