import fs from 'fs';
import path, { dirname } from 'path';
import { fileURLToPath } from 'url';
import genDiff from '../src/index.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const getFixturePath = (filename) => path.join(__dirname, '..', '__fixtures__', filename);
const readFile = (filename) => fs.readFileSync(getFixturePath(filename), 'utf-8');

test('Default formater.', () => {
  const expected = readFile('stylishFlatResult.txt');
  const actual = genDiff(getFixturePath('file1.json'), getFixturePath('file4.yaml'));
  expect(actual).toEqual(expected);
});
