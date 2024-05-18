import { Command } from 'commander';
const program = new Command();

program
  .name('gendiff')
  .description('Поиск отличий')
  .version('1.0.0')

program.parse(process.argv);

