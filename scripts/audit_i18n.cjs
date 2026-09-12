const fs = require('fs');
const path = require('path');

function getFiles(dir) {
  let results = [];
  const list = fs.readdirSync(dir);
  list.forEach(file => {
    const fullPath = path.join(dir, file);
    const stat = fs.statSync(fullPath);
    if (stat && stat.isDirectory()) {
      results = results.concat(getFiles(fullPath));
    } else if (file.endsWith('.tsx') || file.endsWith('.ts')) {
      results.push(fullPath);
    }
  });
  return results;
}

const files = getFiles(path.join(process.cwd(), 'src'));
console.log('Total files checked:', files.length);

const nonUiFiles = files.filter(f => 
  !f.includes(path.sep + 'ui' + path.sep) &&
  !f.includes('types') &&
  !f.includes('middleware.ts') &&
  !f.includes('request.ts') &&
  !f.includes('routing.ts') &&
  !f.endsWith('.d.ts')
);

console.log('\n--- Files without useTranslations/getTranslations ---');
const filesWithoutI18n = [];
nonUiFiles.forEach(f => {
  if (f.endsWith('.tsx')) {
    const content = fs.readFileSync(f, 'utf8');
    const hasI18n = content.includes('useTranslations') || content.includes('getTranslations');
    if (!hasI18n) {
      filesWithoutI18n.push(path.relative(process.cwd(), f));
    }
  }
});
console.log(filesWithoutI18n.join('\n'));
