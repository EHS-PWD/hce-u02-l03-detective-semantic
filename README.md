# Lab: Semantic HTML Structure Practice



### Learning Objectives
By the end of this lab, you will be able to:
- Identify when to use semantic HTML tags vs. generic `<div>` tags
- Distinguish between different semantic elements (`<header>`, `<nav>`, `<main>`, `<article>`, `<section>`, `<aside>`, `<footer>`)
- Apply semantic HTML principles to create well-structured, accessible web pages
- Explain the benefits of semantic HTML for accessibility and SEO

---

### Part 1: Tag Detective (10 minutes)
**Goal:** Identify which semantic tags should replace generic `<div>` elements

You'll analyze the `index.html` file which is a poorly structured HTML page that uses only `<div>` tags with class names. Your task is to determine the correct semantic tag for each `<div>`.

**Skills practiced:**
- Reading and analyzing HTML structure
- Understanding the purpose of different semantic tags
- Recognizing patterns in web page structure

---

### Part 2: Rebuild with Semantics (15 minutes)
**Goal:** Convert a div-based page into semantic HTML

Take the code from Part 1 and rewrite it using proper semantic tags.

**Requirements:**
- Replace ALL `<div>` tags that have semantic alternatives
- Keep all content exactly the same
- Use proper heading hierarchy (h1 → h2 → h3, no skipping!)
- Properly indent your code for readability

**File to create:** `semantic-practice.html`

**Available semantic tags:**
- `<header>` - Introductory content or navigation
- `<nav>` - Navigation links
- `<main>` - Primary content of the page
- `<article>` - Self-contained, standalone content
- `<section>` - Thematic grouping of content
- `<aside>` - Tangentially related content (sidebars, callouts)
- `<footer>` - Closing content (copyright, contact, author info)

---

### Part 3: Create Your Own (15 minutes)
**Goal:** Build an original semantic HTML page from scratch

Create a webpage about one of your hobbies or interests using semantic HTML.

**File to create:** `my-hobby-page.html`

**Must include:**
1. ✅ `<header>` with page title and navigation (3+ links)
2. ✅ `<main>` section for primary content
3. ✅ TWO `<article>` elements about different aspects of your hobby
4. ✅ Each article has its own `<footer>` (author name, publication date)
5. ✅ ONE `<aside>` with fun facts or tips
6. ✅ Page `<footer>` with copyright and contact info
7. ✅ Optional: `<section>` tags to organize related content
8. ✅ Proper heading hierarchy throughout

**Content suggestions:**
- 🎮 Gaming (reviews, tips, news)
- ⚽ Sports (team info, player profiles, schedules)
- 🎵 Music (artists, concert reviews, playlists)
- 🎨 Art (techniques, galleries, projects)
- 📚 Books (reviews, recommendations, author spotlights)
- 🍳 Cooking (recipes, techniques, restaurant reviews)
- Any hobby you're passionate about!

---

## 🚀 Challenge Extensions (Optional)

Finished early? Try these bonus challenges:

1. **Interactive FAQ** - Add a `<details>` and `<summary>` section with frequently asked questions about your hobby

2. **Nested Semantics** - Create an article that includes its own `<header>` and `<footer>` within the article element

3. **Visual Separation** - Use `<hr>` tags to create thematic breaks between major sections

4. **Inline Highlighting** - Use `<span>` tags with inline styles to highlight important keywords or phrases

5. **Multiple Sections** - Organize your main content into multiple `<section>` elements, each with its own heading

---

## 💡 Tips for Success

### Choosing the Right Tag

**Use `<article>` when:**
- Content makes sense on its own
- Could be syndicated or shared independently
- Examples: blog posts, news stories, product cards, forum posts

**Use `<section>` when:**
- Grouping content by theme
- Content needs a heading to identify it
- Examples: chapters, tabbed content, different topics on one page

**Use `<aside>` when:**
- Content is related but not essential
- Could be removed without losing meaning
- Examples: sidebars, callout boxes, related links, fun facts

**Use `<header>` when:**
- Introducing a page or section
- Contains titles, logos, navigation
- Can be used for whole page OR within articles/sections

**Use `<footer>` when:**
- Wrapping up a page or section
- Contains copyright, contact, author info, publication dates
- Can be used for whole page OR within articles/sections
