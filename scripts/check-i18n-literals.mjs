import { execSync } from 'node:child_process';
import { readFileSync } from 'node:fs';
import ts from 'typescript';

const trackedTsxFiles = execSync('git ls-files src/app src/components', {
  cwd: process.cwd(),
  encoding: 'utf8',
})
  .split('\n')
  .filter((file) => file.endsWith('.tsx'));

const excludedFiles = new Set([
  'src/components/layout/ThemeScript.tsx',
  'src/components/ui/JsonLd.tsx',
]);

const allowedText = new Set(['Ted Ryu', 'ESC', '[at]', '⌘K', '&apos;']);
const userFacingAttributes = new Set(['aria-label', 'title', 'placeholder', 'alt']);
const findings = [];

function normalize(text) {
  return text.replace(/\s+/g, ' ').trim();
}

function hasLetters(text) {
  return /\p{L}/u.test(text);
}

function shouldReport(text) {
  if (!text) return false;
  if (!hasLetters(text)) return false;
  return !allowedText.has(text);
}

function report(sourceFile, node, text) {
  const { line, character } = sourceFile.getLineAndCharacterOfPosition(node.getStart(sourceFile));
  findings.push(`${sourceFile.fileName}:${line + 1}:${character + 1}  ${JSON.stringify(text)}`);
}

function visit(sourceFile, node) {
  if (ts.isJsxText(node)) {
    const text = normalize(node.getText(sourceFile));
    if (shouldReport(text)) report(sourceFile, node, text);
  }

  if (ts.isJsxAttribute(node)) {
    const attributeName = node.name.getText(sourceFile);
    if (
      userFacingAttributes.has(attributeName) &&
      node.initializer &&
      ts.isStringLiteral(node.initializer)
    ) {
      const text = normalize(node.initializer.text);
      if (shouldReport(text)) report(sourceFile, node.initializer, text);
    }
  }

  ts.forEachChild(node, (child) => visit(sourceFile, child));
}

for (const file of trackedTsxFiles) {
  if (excludedFiles.has(file)) continue;

  const source = readFileSync(file, 'utf8');
  const sourceFile = ts.createSourceFile(file, source, ts.ScriptTarget.Latest, true, ts.ScriptKind.TSX);
  visit(sourceFile, sourceFile);
}

if (findings.length) {
  console.error('Hardcoded UI literals found outside the i18n dictionary:');
  for (const finding of findings) {
    console.error(`- ${finding}`);
  }
  process.exit(1);
}

console.log('No hardcoded UI literals found in tracked app/components TSX files.');
