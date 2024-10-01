import fs from 'fs';
import path from 'path';
import parseFile from './parseFile.js';
import getDifferenceTree from './getDifferenceTree.js';
import format from './formatters/index.js';

const getAbsoluteFilePath = (filePath) => path.resolve(process.cwd(), filePath);
const getFormat = (filePath) => path.extname(filePath).slice(1);
const readFile = (filePath) => fs.readFileSync(filePath, 'utf-8');

const genDiff = (pathOne, pathTwo, formatName) => {
  const filePathOne = getAbsoluteFilePath(pathOne);
  const filePathTwo = getAbsoluteFilePath(pathTwo);

  const dataOne = readFile(pathOne);
  const dataTwo = readFile(pathTwo);

  const fileFormatOne = getFormat(filePathOne);
  const fileFormatTwo = getFormat(filePathTwo);

  const getDiff = getDifferenceTree(
    parseFile(dataOne, fileFormatOne),
    parseFile(dataTwo, fileFormatTwo),
  );

  return format(getDiff, formatName);
};

export default genDiff;
