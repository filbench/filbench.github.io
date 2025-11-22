---
layout: page
title: Blog
permalink: /blog/
---

{% if site.posts.size > 0 %}
  {% for post in site.posts %}
  - {{ post.date | date: "%b %-d, %Y" }} - [{{ post.title }}]({{ post.url | relative_url }}){% if post.description %} - {{ post.description }}{% endif %}
  {% endfor %}
{% else %}
No posts yet.
{% endif %}
