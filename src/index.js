import YAML from 'yaml';
import parseFile from './parseFile.js';
import getDifferenceTree from './getDifferenceTree.js';
import getReport from './getReport.js';

const stringify = {
  json: JSON.stringify,
  yaml: YAML.stringify,
};

const genDiff = (pathOne, pathTwo, type = 'json') => {
  const dataOne = parseFile(pathOne);
  const dataTwo = parseFile(pathTwo);

  const result = getDifferenceTree(dataOne, dataTwo);

  return getReport(result);
};

export default genDiff;
