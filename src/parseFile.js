import fs from 'fs';
import * as path from 'path';

const parses = {
  json: JSON.parse,
}

const parseFile = (filePath) => {
  const absolutePath = path.resolve(process.cwd(), filePath);
  const data = fs.readFileSync(absolutePath, 'utf-8');
  const dataFormat = path.extname(absolutePath).slice(1);
  return parses[dataFormat](data);
}

export default parseFile;
