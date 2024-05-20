import { Command } from 'commander';
const program = new Command();

import getDiff from '../index.js';

program
  .name('gendiff')
  .description('Поиск отличий')
  .version('1.0.0')
  .option('-f, --format [pathFile]', 'output format')
  .argument('fileOnePath', 'Specify the path to the first file')
  .argument('fileTwoPath', 'Specify the path to the second file')
  .action((fileOnePath, fileTwoPath) => getDiff(fileOnePath, fileTwoPath))
  .parse();

