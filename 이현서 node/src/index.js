import {Command} from "commander"
import {submit, list, Ddelete,update} from './cmd.js'

const program = new Command()

program
    .command('add')
    .argument('word')
    .description('메모 추가')
    .action(submit);

program
    .command('list')
    .description('목록보기')
    .action(list);    

program
    .command('delete')
    .argument('word')
    .description('삭제')
    .action(Ddelete);

program
    .command('update')
    .argument('word')
    .argument('newMeaning')
    .description('수정')
    .action(update);


program.parse(process.argv);



