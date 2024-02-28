---
title: 'Two Forms of Pre-rendering'
date: '2024-02-05'
---

Next.js has two forms of pre-rendering: **Static Generation** and **Server-Side Rendering**. The difference is in **when** it generates the HTML for a page.

- **Static Generation** is the pre-rendering method that generates the HTML at **build time**. The pre-rendered HTML is then _reused_ on each request.
- **Server-Side Rendering** is the pre-rendering method that generates the HTML on **each request**.

Importantly, Next.js lets you **choose** which pre-rendering form to use for each page. You can create a "hybrid" Next.js app by using Static for most pages and using Server-Side Rendering for others. 