import parseFile from './parseFile.js';
import getDifferenceTree from './getDifferenceTree.js';
import getReport from './stylish.js';

const genDiff = (pathOne, pathTwo, formatName = 'stylish') => {
  const dataOne = parseFile(pathOne);
  const dataTwo = parseFile(pathTwo);

  const result = getDifferenceTree(dataOne, dataTwo);

  return getReport(result, formatName);
};

export default genDiff;
