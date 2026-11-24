const fs = require('node:fs');
const assert = require('node:assert/strict');

function readDirectory(path) {
  return fs.readdirSync(path).map(file => JSON.parse(fs.readFileSync(path + '/' + file)));
}

const collections = readDirectory('postman/collections');
const environments = readDirectory('postman/environments');
assert.equal(collections.length, 3);
assert.equal(environments.length, 4);

function checkScripts(node) {
  for (const event of node.event || []) new Function('pm', event.script.exec.join('\n'));
  for (const child of node.item || []) checkScripts(child);
}

collections.forEach(checkScripts);
const recipes = collections.find(c => c.info.name.startsWith('03'));
assert.equal(recipes.item.length, 5);
assert.ok(recipes.item.every(folder => folder.item.length >= 2));
for (const env of environments) {
  const values = Object.fromEntries(env.values.map(({key, value}) => [key, value]));
  assert.equal(values.accessToken, '');
  assert.equal(values.allowWrites, 'false');
  assert.equal(values.repositoryId, '');
  assert.equal(values.entryId, '');
}
assert.match(fs.readFileSync('samples/fichebait-api-sample.pdf', 'utf8'), /^%PDF-1[.]4/);
console.log('Postman structures, script syntax, and safe defaults passed.');
