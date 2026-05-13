---
layout: home
---

# We are a collective of Filipino NLP Researchers

We are a collective of NLP researchers, from graduate students to industry practitioiners, who are working to advance natural language processing through open research and collaboration.
We operate as a scrappy grassroots team, pooling shared resources to move fast and build what the research community needs.

<div style="margin-top: 2rem; display: flex; gap: 1rem; flex-wrap: wrap;">
  <a href="https://github.com/filbench" class="button">
    <img src="{{ '/assets/icons/github.svg' | relative_url }}" alt="" style="width: 18px; height: 18px;">
    GitHub
    <span style="margin-left: 4px;">→</span>
  </a>
  <a href="https://huggingface.co/filbench" class="button">
    <img src="{{ '/assets/icons/huggingface.svg' | relative_url }}" alt="" style="width: 18px; height: 18px;">
    HuggingFace
    <span style="margin-left: 4px;">→</span>
  </a>
  <a href="#join" class="button">
    <img src="{{ '/assets/icons/users.svg' | relative_url }}" alt="" style="width: 18px; height: 18px;">
    Join Us
    <span style="margin-left: 4px;">→</span>
  </a>
</div>

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
      {% for project in projects limit:3 %}
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

    <div class="home-subsection">
      <h2>Blog</h2>
      {% assign blog_posts = site.posts | where_exp: "post", "post.path contains 'blog/_posts'" | sort: 'date' | reverse %}
      {% if blog_posts.size > 0 %}
      <ul class="blog-list">
        {% for post in blog_posts limit:3 %}
        <li class="blog-item">
          <div class="blog-header">
            <div class="blog-title">
              <a href="{{ post.url | relative_url }}" class="blog-link">{{ post.title }}</a>
            </div>
            <div class="blog-date">{{ post.date | date: "%b %Y" }}</div>
          </div>
        </li>
        {% endfor %}
      </ul>
      {% else %}
      <p style="font-size: 0.9em; color: #666;">No blog posts yet.</p>
      {% endif %}
    </div>
  </div>
</div>

<div class="people-section" id="people">
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

<div class="join-section" id="join">
  <h2>Join Us</h2>
  <p class="join-intro">Reach out to <a href="https://calendar.app.google/M6z8BzZZ5RaTgdqH9">Lj</a> and mention your research interests. If you also <a href="#people">know someone</a> from FilBench, you can ask them to add you.</p>
</div>
