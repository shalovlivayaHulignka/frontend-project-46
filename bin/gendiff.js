import { Command } from 'commander';
const program = new Command();

import getDiff from '../index.js';

program
  .name('gendiff')
  .description('Поиск отличий')
  .version('1.0.0')
  .option('-f, --format [pathFile]', 'output format')
  .arguments('<fileOnePath> <fileTwoPath>')
  .action((fileOnePath, fileTwoPath) => getDiff(fileOnePath, fileTwoPath))
  .parse();

