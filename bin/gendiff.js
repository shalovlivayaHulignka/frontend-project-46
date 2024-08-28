#!/usr/bin/env node
import { Command } from 'commander';
const program = new Command();

import getDiff from '../index.js';

program
  .name('gendiff')
  .description('Поиск отличий')
  .version('1.0.0')
  .option('-f, --format <type>', 'output format')
  .arguments('<fileOnePath> <fileTwoPath>')
  .action((fileOnePath, fileTwoPath) => console.log(getDiff(fileOnePath, fileTwoPath, program.opts().format)));

program.parse();

