---
layout: home
---

# We are a collective of Filipino NLP Researchers

We are a collective of NLP researchers&mdash;graduate students, industry practitioners, and enthusiasts&mdash;working to advance natural language processing for Filipino languages through open research, datasets, and tools.
We operate as a scrappy grassroots team, pooling shared resources to move fast and build what the research community needs.

<div style="margin-top: 2rem; display: flex; gap: 1rem; flex-wrap: wrap;">
  <a href="https://github.com/filbench" class="button">
    <img src="{{ '/assets/icons/github.svg' | relative_url }}" alt="" style="width: 18px; height: 18px;">
    Code
    <span style="margin-left: 4px;">→</span>
  </a>
  <a href="https://huggingface.co/filbench" class="button">
    <img src="{{ '/assets/icons/huggingface.svg' | relative_url }}" alt="" style="width: 18px; height: 18px;">
    Resources
    <span style="margin-left: 4px;">→</span>
  </a>
  <a href="#" class="button">
    <img src="{{ '/assets/icons/users.svg' | relative_url }}" alt="" style="width: 18px; height: 18px;">
    Join Us
    <span style="margin-left: 4px;">→</span>
  </a>
</div>

<style>
.home-sections {
  display: flex;
  gap: 2rem;
  margin-top: 1.5rem;
}

.home-section {
  flex: 1;
  min-width: 0;
}

.home-section h2 {
  font-size: 1.1em;
  margin-bottom: 0.75rem;
  font-weight: 500;
}

.news-list,
.projects-list {
  list-style: none;
  padding: 0;
  margin: 0;
}

.news-item,
.project-item {
  margin-bottom: 0.75em;
  padding: 0;
  border-bottom: 1px solid #e0e0e0;
  padding-bottom: 0.75em;
}

.news-item:last-child,
.project-item:last-child {
  border-bottom: none;
}

.news-header {
  display: flex;
  gap: 0.75em;
  align-items: baseline;
}

.news-date {
  color: #999;
  font-size: 0.8em;
  flex-shrink: 0;
  font-family: monospace;
  min-width: 70px;
}

.news-content {
  color: #333;
  font-size: 0.9em;
  line-height: 1.3;
}

.news-content a,
.project-link {
  color: #0066cc;
  text-decoration: none;
}

.news-content a:hover,
.project-link:hover {
  text-decoration: underline;
}

.project-title {
  font-size: 0.9em;
  font-weight: 500;
  color: #333;
  line-height: 1.3;
}

.people-section {
  margin-top: 2.5rem;
}

.people-section h2 {
  font-size: 1.1em;
  margin-bottom: 0.75rem;
  font-weight: 500;
}

.people-intro {
  font-size: 0.95em;
  color: #4b5563;
  line-height: 1.5;
  margin-bottom: 1rem;
}

.people-list {
  list-style: none;
  padding: 0;
  margin: 0;
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 0.75rem;
}

.person-card {
  border: 1px solid #e5e7eb;
  border-radius: 6px;
  background: #fafafa;
  padding: 0.65rem;
}

.person-content {
  display: flex;
  gap: 0.7rem;
  flex-wrap: wrap;
}

.person-photo {
  width: 56px;
  height: 56px;
  border-radius: 4px;
  object-fit: cover;
  flex-shrink: 0;
}

.person-info {
  flex: 1;
  min-width: 0;
}

.person-name {
  font-size: 0.9em;
  font-weight: 600;
  margin-bottom: 0.2rem;
  line-height: 1.3;
}

.person-name a {
  color: #262626;
  text-decoration: none;
}

.person-name a:hover {
  color: var(--brand);
}

.person-affiliation-role {
  font-size: 0.78em;
  color: #6b7280;
  line-height: 1.35;
}

.person-interests {
  font-size: 0.74em;
  color: #6b7280;
  line-height: 1.35;
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
  color: #d1d5db;
}

.person-interests li:last-child:after {
  content: "";
}

@media (max-width: 768px) {
  .home-sections {
    flex-direction: column;
    gap: 1.5rem;
  }

  .people-list {
    grid-template-columns: 1fr;
  }
}
</style>

<div class="home-sections">
  <div class="home-section">
    <h2>News</h2>
    <ul class="news-list">
      {% for item in site.data.news limit:4 %}
      <li class="news-item">
        <div class="news-header">
          <div class="news-date">{{ item.date }}</div>
          <div class="news-content">{{ item.content }}</div>
        </div>
      </li>
      {% endfor %}
    </ul>
  </div>

  <div class="home-section">
    <h2>Ongoing Projects</h2>
    {% assign projects = site.categories.projects | sort: 'date' | reverse %}
    {% if projects.size > 0 %}
    <ul class="projects-list">
      {% for project in projects %}
      <li class="project-item">
        <div class="project-title">
          <a href="{{ project.url | relative_url }}" class="project-link">{{ project.title }}</a>
        </div>
      </li>
      {% endfor %}
    </ul>
    {% else %}
    <p style="font-size: 0.9em; color: #666;">No projects yet.</p>
    {% endif %}
  </div>
</div>

<div class="people-section">
  <h2>People</h2>
  <p class="people-intro">We started as a small group of researchers who met at conferences and workshops, connected through cold emails and a shared passion for Filipino NLP.</p>
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
</div>
