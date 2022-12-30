
import { CliCommandInterface } from './cli-command.interface.js';
import chalk from 'chalk';

const log = console.log;

export default class HelpCommand implements CliCommandInterface {
  public readonly name = '--help';

  public async execute(): Promise<void> {
    log(`
        ${chalk.blue('Программа для подготовки данных для REST API сервера.')}
        ${chalk.yellow('Пример:')}
        ${chalk.red('main.js --<command> [--arguments]')}
        ${chalk.yellow('Команды:')}
            ${chalk.red('--version:')}                   ${chalk.green('# выводит номер версии')}
            ${chalk.red('--help:')}                      ${chalk.green('# печатает этот текст')}
            ${chalk.red('--import <path>:')}             ${chalk.green('# импортирует данные из TSV')}
            ${chalk.red('--generate <n> <path> <url>')}  ${chalk.green('# генерирует произвольное количество тестовых данных')}
        `);
  }
}
