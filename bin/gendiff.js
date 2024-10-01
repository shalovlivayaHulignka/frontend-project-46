#!/usr/bin/env node
import { Command } from 'commander';
import getDiff from '../src/index.js';

const program = new Command();

program
  .name('gendiff')
  .description('Поиск отличий')
  .version('1.0.0')
  .option('-f, --format <type>', 'output format', 'stylish')
  .arguments('<fileOnePath> <fileTwoPath>')
  .action((fileOnePath, fileTwoPath) => {
    const result = getDiff(fileOnePath, fileTwoPath, program.opts().format);
    console.log(result);
  });

program.parse();
