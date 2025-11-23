---
layout: home
---

# We are a collective of Filipino NLP Researchers

Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.

<div style="margin-top: 2rem; display: flex; gap: 1rem; flex-wrap: wrap;">
  <a href="#" class="button">
    <img src="{{ '/assets/icons/github.svg' | relative_url }}" alt="" style="width: 18px; height: 18px;">
    Code
    <span style="margin-left: 4px;">→</span>
  </a>
  <a href="#" class="button">
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
  font-weight: 600;
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

@media (max-width: 768px) {
  .home-sections {
    flex-direction: column;
    gap: 1.5rem;
  }
}
</style>

<div class="home-sections">
  <div class="home-section">
    <h2>News</h2>
    <ul class="news-list">
      <li class="news-item">
        <div class="news-header">
          <div class="news-date">Nov 2024</div>
          <div class="news-content">
            Our paper on <a href="#">Filipino Language Models</a> was accepted to NeurIPS 2024!
          </div>
        </div>
      </li>
      <li class="news-item">
        <div class="news-header">
          <div class="news-date">Oct 2024</div>
          <div class="news-content">
            Released <a href="#">FilBERT v2.0</a> with improved performance on downstream tasks.
          </div>
        </div>
      </li>
      <li class="news-item">
        <div class="news-header">
          <div class="news-date">Sep 2024</div>
          <div class="news-content">
            New dataset available: <a href="#">Filipino Social Media Corpus</a> with 10M annotated posts.
          </div>
        </div>
      </li>
      <li class="news-item">
        <div class="news-header">
          <div class="news-date">Aug 2024</div>
          <div class="news-content">
            Welcoming 5 new members to the research collective!
          </div>
        </div>
      </li>
    </ul>
  </div>

  <div class="home-section">
    <h2>Ongoing Projects</h2>
    {% assign projects = site.projects | sort: 'date' | reverse %}
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
