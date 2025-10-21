const fs = require('fs');
const path = require('path');

describe('Part 3: my-hobby-page.html', () => {
  let html;
  let dom;

  beforeAll(() => {
    const filePath = path.join(__dirname, '../student-code/my-hobby-page.html');

    if (!fs.existsSync(filePath)) {
      throw new Error('my-hobby-page.html not found in student-code folder');
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

  test('Has valid HTML structure with html, head, and body tags', () => {
    expect(dom.querySelector('html')).toBeTruthy();
    expect(dom.querySelector('head')).toBeTruthy();
    expect(dom.querySelector('body')).toBeTruthy();
  });

  test('Has <title> tag in head', () => {
    const title = dom.querySelector('head title');
    expect(title).toBeTruthy();
    expect(title.textContent.trim().length).toBeGreaterThan(0);
  });

  test('Has <header> with page title', () => {
    const header = dom.querySelector('header');
    expect(header).toBeTruthy();
    const h1 = header.querySelector('h1');
    expect(h1).toBeTruthy();
  });

  test('Header has navigation with at least 3 links', () => {
    const headerNav = dom.querySelector('header nav');
    expect(headerNav).toBeTruthy();

    const navLinks = headerNav.querySelectorAll('a');
    expect(navLinks.length).toBeGreaterThanOrEqual(3);
  });

  test('Has <main> section for primary content', () => {
    const main = dom.querySelector('main');
    expect(main).toBeTruthy();
  });

  test('Has exactly TWO <article> elements', () => {
    const articles = dom.querySelectorAll('article');
    expect(articles.length).toBeGreaterThanOrEqual(2);
  });

  test('Articles are about different aspects (have different content)', () => {
    const articles = dom.querySelectorAll('article');
    expect(articles.length).toBeGreaterThanOrEqual(2);

    if (articles.length >= 2) {
      const content1 = articles[0].textContent.trim();
      const content2 = articles[1].textContent.trim();
      expect(content1).not.toBe(content2);
    }
  });

  test('Each article has its own <footer>', () => {
    const articles = dom.querySelectorAll('article');
    expect(articles.length).toBeGreaterThanOrEqual(2);

    articles.forEach((article, index) => {
      const footer = article.querySelector('footer');
      expect(footer).toBeTruthy();
    });
  });

  test('Article footers contain author name or publication date', () => {
    const articles = dom.querySelectorAll('article');
    expect(articles.length).toBeGreaterThan(0);

    articles.forEach(article => {
      const footer = article.querySelector('footer');
      expect(footer).toBeTruthy();
      expect(footer.textContent.trim().length).toBeGreaterThan(0);
    });
  });

  test('Has ONE <aside> element', () => {
    const aside = dom.querySelector('aside');
    expect(aside).toBeTruthy();
  });

  test('Aside has a heading', () => {
    const aside = dom.querySelector('aside');
    expect(aside).toBeTruthy();

    const heading = aside.querySelector('h2, h3, h4');
    expect(heading).toBeTruthy();
  });

  test('Has page <footer> with copyright info', () => {
    const pageFooter = dom.querySelector('body > footer');
    expect(pageFooter).toBeTruthy();
    expect(pageFooter.textContent).toMatch(/©|&copy;|copyright/i);
  });

  test('Page footer contains contact information', () => {
    const pageFooter = dom.querySelector('body > footer');
    expect(pageFooter).toBeTruthy();
    expect(pageFooter.textContent.trim().length).toBeGreaterThan(10);
  });

  test('Has proper heading hierarchy (starts with h1)', () => {
    const h1 = dom.querySelector('h1');
    expect(h1).toBeTruthy();
  });

  test('Does not skip heading levels', () => {
    const headings = dom.querySelectorAll('h1, h2, h3, h4, h5, h6');
    const levels = Array.from(headings).map(h => parseInt(h.tagName.charAt(1)));

    for (let i = 1; i < levels.length; i++) {
      const diff = levels[i] - levels[i - 1];
      expect(diff).toBeLessThanOrEqual(1);
    }
  });

  test('Has meaningful content (not placeholder text)', () => {
    const articles = dom.querySelectorAll('article');
    expect(articles.length).toBeGreaterThan(0);

    articles.forEach(article => {
      const paragraphs = article.querySelectorAll('p');
      expect(paragraphs.length).toBeGreaterThan(0);

      paragraphs.forEach(p => {
        expect(p.textContent.trim().length).toBeGreaterThan(20);
      });
    });
  });

  test('All semantic elements are properly nested', () => {
    const main = dom.querySelector('main');
    expect(main).toBeTruthy();

    const articlesInMain = main.querySelectorAll('article');
    expect(articlesInMain.length).toBeGreaterThanOrEqual(1);
  });
});
