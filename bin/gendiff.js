import { Command } from 'commander';
const program = new Command();

program
  .name('gendiff')
  .description('Поиск отличий')
  .version('1.0.0')
  .option('-f, --format [pathFile]', 'output format')
  .argument('fileOnePath', 'Specify the path to the first file')
  .argument('fileTwoPath', 'Specify the path to the second file')
  .action((fileOnePath, fileTwoPath) => {
    console.log('fileOnePath:', fileOnePath);
    console.log('fileTwoPath:', fileTwoPath);
  })
  .parse();

