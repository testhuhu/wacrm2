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
const findings = [];

files.forEach(file => {
  if (file.includes('node_modules') || file.includes('.d.ts') || file.includes('ui' + path.sep)) return;
  const content = fs.readFileSync(file, 'utf8');
  const lines = content.split('\n');

  lines.forEach((line, idx) => {
    const lineNum = idx + 1;
    const trimmed = line.trim();
    if (trimmed.startsWith('//') || trimmed.startsWith('/*') || trimmed.startsWith('*')) return;

    // Check for toast messages with hardcoded text
    if (/toast\.(error|success|info|warning)\(\s*["'`][A-Za-z]/.test(line)) {
      findings.push({ file: path.relative(process.cwd(), file), lineNum, type: 'toast', line: trimmed });
    }

    // Check for placeholder with English text
    if (/placeholder=\s*["'][A-Za-z]/.test(line)) {
      findings.push({ file: path.relative(process.cwd(), file), lineNum, type: 'placeholder', line: trimmed });
    }

    // Check for title with English text
    if (/title=\s*["'][A-Za-z]/.test(line) && !line.includes('title=') && !line.includes('title={') && !line.includes('title:')) {
      findings.push({ file: path.relative(process.cwd(), file), lineNum, type: 'title', line: trimmed });
    }

    // Check for aria-label with English text
    if (/aria-label=\s*["'][A-Za-z]/.test(line)) {
      findings.push({ file: path.relative(process.cwd(), file), lineNum, type: 'aria-label', line: trimmed });
    }

    // Check for hardcoded English text in simple JSX tags like <p>Text</p>, <button>Text</button>, <span>Text</span>, <div>Text</div>
    const jsxMatch = line.match(/>\s*([A-Z][A-Za-z0-9 ,.!?'-]{3,})\s*</);
    if (jsxMatch && !line.includes('{') && !line.includes('t(') && !line.includes('className') && !line.includes('//')) {
      findings.push({ file: path.relative(process.cwd(), file), lineNum, type: 'jsx-text', text: jsxMatch[1], line: trimmed });
    }
  });
});

console.log(`Found ${findings.length} potential hardcoded strings:`);
findings.forEach(f => {
  console.log(`[${f.type}] ${f.file}:${f.lineNum} -> ${f.line}`);
});
