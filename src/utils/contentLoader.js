import { load as yamlLoad } from 'js-yaml';
import { marked } from 'marked';

// Configure marked with security and typographic options
marked.setOptions({
  gfm: true,
  breaks: true,
});

/**
 * Parses a raw markdown string into frontmatter, markdown body, and compiled HTML.
 */
export function parseMarkdownFile(raw) {
  const text = typeof raw === 'string' ? raw : (raw?.default || '');
  const match = text.match(/^---\r?\n([\s\S]*?)\r?\n---\r?\n([\s\S]*)$/);
  
  if (!match) {
    return {
      frontmatter: {},
      content: text.trim(),
      html: marked.parse(text.trim()),
    };
  }

  const yamlStr = match[1];
  const body = match[2].trim();
  let frontmatter = {};

  try {
    frontmatter = yamlLoad(yamlStr) || {};
  } catch (err) {
    console.warn('Failed to parse YAML frontmatter:', err);
  }

  return {
    frontmatter,
    content: body,
    html: marked.parse(body),
  };
}

// Eagerly glob all markdown files from the /src/content folder
const contentModules = import.meta.glob('/src/content/**/*.md', {
  query: '?raw',
  eager: true,
});

/**
 * Loads all items in a specified content collection (e.g. 'leadership', 'transactions', 'reports').
 */
export function getContentCollection(collectionName) {
  const items = [];
  const prefix = `/src/content/${collectionName}/`;

  for (const [path, mod] of Object.entries(contentModules)) {
    if (path.startsWith(prefix)) {
      const { frontmatter, content, html } = parseMarkdownFile(mod);
      // Derive slug from file name if not explicitly set in frontmatter
      const fileName = path.split('/').pop().replace(/\.md$/, '');
      const slug = frontmatter.slug || fileName;

      items.push({
        slug,
        ...frontmatter,
        bio: frontmatter.bio || content,
        content,
        html,
      });
    }
  }

  // Sort by order property if available, otherwise preserve definition
  return items.sort((a, b) => (a.order ?? 999) - (b.order ?? 999));
}

/**
 * Loads a single item from a collection by its slug.
 */
export function getContentItem(collectionName, slug) {
  const collection = getContentCollection(collectionName);
  return collection.find((item) => item.slug === slug) || null;
}
