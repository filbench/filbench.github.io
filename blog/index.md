---
layout: page
title: Blog
permalink: /blog/
---

<style>
.blog-list {
  list-style: none;
  padding: 0;
}

.blog-item {
  display: flex;
  margin-bottom: 2em;
  gap: 1.5em;
}

.blog-date {
  flex-shrink: 0;
  min-width: 100px;
  color: #666;
}

.blog-content {
  flex-grow: 1;
}

.blog-title {
  margin: 0 0 0.25em 0;
  font-size: 1.1em;
}

.blog-description {
  margin: 0;
  color: #888;
  font-size: 0.95em;
}
</style>

{% if site.posts.size > 0 %}
<ul class="blog-list">
  {% for post in site.posts %}
  <li class="blog-item">
    <div class="blog-date">{{ post.date | date: "%b %-d, %Y" }}</div>
    <div class="blog-content">
      <div class="blog-title"><a href="{{ post.url | relative_url }}">{{ post.title }}</a></div>
      {% if post.description %}
      <div class="blog-description">{{ post.description }}</div>
      {% endif %}
    </div>
  </li>
  {% endfor %}
</ul>
{% else %}
<p>No posts yet.</p>
{% endif %}
