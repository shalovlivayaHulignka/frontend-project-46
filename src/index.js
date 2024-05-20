import fs from 'fs';
import * as path from 'path';

const genDiff = (pathOne, pathTwo) => {
  const absolutePathOne = path.resolve(process.cwd(), pathOne);
  const absolutePathTwo = path.resolve(process.cwd(), pathTwo);

  const dataOne = fs.readFileSync(absolutePathOne, 'utf-8');
  const dataTwo = fs.readFileSync(absolutePathTwo, 'utf-8');
};

export default genDiff;