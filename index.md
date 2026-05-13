---
layout: home
---

<h1>We are a collective of Filipino NLP <span class="rotating-text"><span class="rotating-text-sizer" aria-hidden="true">Practitioners</span><span class="rotating-text-word">Researchers</span><span class="rotating-text-word">Enthusiasts</span><span class="rotating-text-word">Practitioners</span><span class="rotating-text-word">Professionals</span><span class="rotating-text-word">Students</span></span></h1>

We are a collective, from graduate students to industry practitioners, who are working to advance Philippine natural language processing (NLP) through open research and collaboration.
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

<details class="publications-section collapsible-section" id="publications">
  <summary><h2>Publications</h2></summary>
  <div class="publications">
  {% for year_data in site.data.publications %}
    {% assign year = year_data[0] %}
    {% assign pubs = year_data[1] %}
    <div class="year-group">
      <div class="year-heading">{{ year }}</div>
      {% for pub in pubs %}
      {% assign pdf_link = pub.links | where: "name", "PDF" | first %}
      <div class="publication">
        <div class="pub-line">
          <span class="pub-title">{% if pdf_link %}<a href="{{ pdf_link.url }}">{{ pub.title }}</a>{% else %}{{ pub.title }}{% endif %}</span> <span class="pub-venue">({{ pub.venue }})</span>. <span class="pub-authors">{{ pub.authors }}</span>
        </div>
        {% if pub.abstract or pub.links.size > 1 %}
        <details class="pub-expand">
          <summary>Expand</summary>
          <div class="pub-expand-content">
            {% if pub.abstract %}<p class="pub-abstract">{{ pub.abstract }}</p>{% endif %}
            {% if pub.links.size > 0 %}
            <div class="pub-links">
              {% for link in pub.links %}{% if link.name != "PDF" %}<a href="{{ link.url }}" class="pub-link">{{ link.name }}</a>{% endif %}{% endfor %}
            </div>
            {% endif %}
          </div>
        </details>
        {% endif %}
      </div>
      {% endfor %}
    </div>
  {% endfor %}
  </div>
</details>

<details class="people-section collapsible-section" id="people">
  <summary><h2>People</h2></summary>
  <p class="people-intro">We started as a small group of researchers who met at conferences and workshops, connected through cold emails and a shared passion for Filipino NLP.</p>
  <ul class="people-list">
    {% for person in site.data.people %}
    <li class="person-item">
      <span class="person-name">
        {% if person.website %}
        <a href="{{ person.website }}" target="_blank">{{ person.name }}</a>
        {% else %}
        {{ person.name }}
        {% endif %}
      </span>.
      <span class="person-affiliation-role">{% if person.role %}{{ person.role }}, {% endif %}{{ person.affiliation }}</span>
    </li>
    {% endfor %}
  </ul>
</details>

<div class="join-section" id="join">
  <h2>Join Us</h2>
  <p class="join-intro">Reach out to <a href="https://calendar.app.google/M6z8BzZZ5RaTgdqH9">Lj</a> and mention your research interests. If you also <a href="#people">know someone</a> from FilBench, you can ask them to add you.</p>
</div>
