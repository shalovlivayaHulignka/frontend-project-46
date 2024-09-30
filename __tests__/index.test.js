import fs from 'fs';
import path, { dirname } from 'path';
import { fileURLToPath } from 'url';
import genDiff from '../src/index.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const getFixturePath = (filename) => path.join(__dirname, '..', '__fixtures__', filename);
const readFile = (filename) => fs.readFileSync(getFixturePath(filename), 'utf-8');

const fileResultStylish = readFile('result_stylish.txt');
const fileResultPlain = readFile('result_plain.txt');

const fileJsonOne = './__fixtures__/fileOne.json';
const fileJsonTwo = './__fixtures__/fileTwo.json';
const fileYamlOne = './__fixtures__/fileOne.yaml';
const fileYamlTwo = './__fixtures__/fileTwo.yaml';

describe('comparing  files', () => {
  test('Formater.', () => {
    expect(genDiff(fileYamlOne, fileYamlTwo)).toEqual(fileResultStylish);
    expect(genDiff(fileYamlOne, fileYamlTwo, 'plain')).toEqual(fileResultPlain);
  });
});

