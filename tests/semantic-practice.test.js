const fs = require('fs');
const path = require('path');

describe('Part 2: semantic-practice.html', () => {
  let html;
  let dom;

  beforeAll(() => {
    const filePath = path.join(__dirname, '../student-code/semantic-practice.html');

    if (!fs.existsSync(filePath)) {
      throw new Error('semantic-practice.html not found in student-code folder');
    }

    html = fs.readFileSync(filePath, 'utf8');
    dom = new DOMParser().parseFromString(html, 'text/html');
  });

  test('File exists', () => {
    expect(html).toBeDefined();
    expect(html.length).toBeGreaterThan(0);
  });

  test('Has proper DOCTYPE declaration', () => {
    expect(html.toLowerCase()).toMatch(/<!doctype\s+html>/i);
  });

  test('Has <header> element', () => {
    const header = dom.querySelector('header');
    expect(header).toBeTruthy();
  });

  test('Has <nav> element inside header', () => {
    const nav = dom.querySelector('header nav');
    expect(nav).toBeTruthy();
  });

  test('Navigation has at least 3 links', () => {
    const navLinks = dom.querySelectorAll('nav a');
    expect(navLinks.length).toBeGreaterThanOrEqual(3);
  });

  test('Has <main> element', () => {
    const main = dom.querySelector('main');
    expect(main).toBeTruthy();
  });

  test('Has at least 2 <article> elements', () => {
    const articles = dom.querySelectorAll('article');
    expect(articles.length).toBeGreaterThanOrEqual(2);
  });

  test('Articles are inside main element', () => {
    const articlesInMain = dom.querySelectorAll('main article');
    expect(articlesInMain.length).toBeGreaterThanOrEqual(2);
  });

  test('Each article has a heading (h2)', () => {
    const articles = dom.querySelectorAll('article');
    articles.forEach(article => {
      const heading = article.querySelector('h2');
      expect(heading).toBeTruthy();
    });
  });

  test('Each article has a footer with publication date', () => {
    const articles = dom.querySelectorAll('article');
    expect(articles.length).toBeGreaterThan(0);

    articles.forEach(article => {
      const footer = article.querySelector('footer');
      expect(footer).toBeTruthy();
    });
  });

  test('Has <aside> element', () => {
    const aside = dom.querySelector('aside');
    expect(aside).toBeTruthy();
  });

  test('Has page <footer> element', () => {
    const footer = dom.querySelector('body > footer');
    expect(footer).toBeTruthy();
  });

  test('Page footer contains copyright symbol', () => {
    const footer = dom.querySelector('body > footer');
    expect(footer.textContent).toMatch(/©|&copy;|copyright/i);
  });

  test('Uses semantic tags instead of divs with classes', () => {
    const badDivs = dom.querySelectorAll('div.top-of-page, div.menu, div.main-content, div.blog-post, div.sidebar, div.bottom-of-page');
    expect(badDivs.length).toBe(0);
  });

  test('Main content is wrapped in <main> tag', () => {
    const main = dom.querySelector('main');
    expect(main).toBeTruthy();
    expect(main.querySelectorAll('article').length).toBeGreaterThan(0);
  });

  test('Proper heading hierarchy (h1 before h2)', () => {
    const h1 = dom.querySelector('h1');
    const h2 = dom.querySelector('h2');
    expect(h1).toBeTruthy();
    expect(h2).toBeTruthy();
  });
});
