import parseFile from './parseFile.js';

const genDiff = (pathOne, pathTwo, type) => {
  const dataOne = parseFile(pathOne);
  const dataTwo = parseFile(pathTwo);
};

export default genDiff;