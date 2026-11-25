import fs from 'fs';
import path from 'path';

try {
  const distDir = path.resolve('dist');
  const src = path.join(distDir, 'index.html');
  const dest = path.join(distDir, '404.html');

  if (fs.existsSync(src)) {
    fs.copyFileSync(src, dest);
    console.log('Successfully created dist/404.html for SPA fallback');
  } else {
    console.warn('dist/index.html not found, skipping 404.html generation');
  }
} catch (err) {
  console.error('Error creating 404.html:', err);
}
