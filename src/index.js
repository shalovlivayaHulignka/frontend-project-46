import parseFile from './parseFile.js';
import getDifferenceTree from './getDifferenceTree.js';
import format from './formatters/index.js';

const genDiff = (pathOne, pathTwo, formatName) => {
  const dataOne = parseFile(pathOne);
  const dataTwo = parseFile(pathTwo);

  const result = getDifferenceTree(dataOne, dataTwo);

  return format(result, formatName);
};

export default genDiff;
