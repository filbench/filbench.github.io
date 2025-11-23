---
layout: page
title: People
permalink: /people/
---

<style>
.people-list {
  list-style: none;
  padding: 0;
  margin: 1em 0;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1em;
}

.person-card {
  padding: 0.5em;
  border: 1px solid #e8e8e8;
  border-radius: 3px;
  background: #fafafa;
}

.person-content {
  display: flex;
  gap: 0.75em;
  flex-wrap: wrap;
}

.person-photo {
  width: 60px;
  height: 60px;
  border-radius: 3px;
  object-fit: cover;
  filter: grayscale(100%);
  flex-shrink: 0;
}

.person-info {
  flex: 1;
  min-width: 0;
}

.person-name {
  font-size: 0.95em;
  font-weight: 700;
  color: #333;
  margin-bottom: 0.25em;
}

.person-name a {
  color: #333;
  text-decoration: none;
}

.person-name a:hover {
  color: #0066cc;
}

.person-affiliation-role {
  font-size: 0.8em;
  color: #666;
  margin-bottom: 0.4em;
}

.person-interests {
  font-size: 0.75em;
  color: #777;
  line-height: 1.4;
  flex-basis: 100%;
}

.person-interests ul {
  list-style: none;
  padding: 0;
  margin: 0;
}

.person-interests li {
  display: inline;
}

.person-interests li:after {
  content: " • ";
  color: #ccc;
}

.person-interests li:last-child:after {
  content: "";
}
</style>

<ul class="people-list">
  {% for person in site.data.people %}
  <li class="person-card">
    <div class="person-content">
      <img src="{{ person.photo | relative_url }}" alt="{{ person.name }}" class="person-photo">
      <div class="person-info">
        <div class="person-name">
          {% if person.website %}
          <a href="{{ person.website }}" target="_blank">{{ person.name }}</a>
          {% else %}
          {{ person.name }}
          {% endif %}
        </div>
        <div class="person-affiliation-role">
          {% if person.role %}{{ person.role }}, {% endif %}{{ person.affiliation }}
        </div>
      </div>
      {% if person.research_interests %}
      <div class="person-interests">
        <ul>
          {% for interest in person.research_interests %}
          <li>{{ interest }}</li>
          {% endfor %}
        </ul>
      </div>
      {% endif %}
    </div>
  </li>
  {% endfor %}
</ul>
