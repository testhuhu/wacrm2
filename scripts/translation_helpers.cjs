const fs = require('fs');
const path = require('path');

const en = JSON.parse(fs.readFileSync(path.join(__dirname, '../messages/en.json'), 'utf8'));

// Helper to check for missing keys
function validateKeys(source, target, locale) {
  const missing = [];
  const orphaned = [];

  function walk(sNode, tNode, p) {
    for (const k in sNode) {
      const curPath = p ? `${p}.${k}` : k;
      if (tNode === undefined || tNode[k] === undefined) {
        missing.push(curPath);
      } else if (typeof sNode[k] === 'object' && sNode[k] !== null) {
        walk(sNode[k], tNode[k], curPath);
      }
    }
  }

  function walkOrphaned(sNode, tNode, p) {
    for (const k in tNode) {
      const curPath = p ? `${p}.${k}` : k;
      if (sNode === undefined || sNode[k] === undefined) {
        orphaned.push(curPath);
      } else if (typeof tNode[k] === 'object' && tNode[k] !== null) {
        walkOrphaned(sNode ? sNode[k] : undefined, tNode[k], curPath);
      }
    }
  }

  walk(source, target, '');
  walkOrphaned(source, target, '');

  if (missing.length > 0) {
    console.error(`[${locale}] Missing ${missing.length} keys:`, missing.slice(0, 10));
  }
  if (orphaned.length > 0) {
    console.error(`[${locale}] Orphaned ${orphaned.length} keys:`, orphaned.slice(0, 10));
  }
  return missing.length === 0 && orphaned.length === 0;
}

module.exports = { en, validateKeys };
