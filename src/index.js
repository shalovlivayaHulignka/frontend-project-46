import parseFile from './parseFile.js';

const genDiff = (pathOne, pathTwo) => {
  const dataOne = parseFile(pathOne);
  const dataTwo = parseFile(pathTwo);
};

export default genDiff;