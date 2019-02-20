#! /usr/bin/env node

const program = require('commander');
const colors = require('colors');
const inquirer = require('inquirer');
const { resolveApp } = require('../config/defaultPaths');
const swagger = require('../script/swagger.js');
const logs = console.log;
program
    .option('-p, --path', '自定义生成目录')
    .parse(process.argv);

try {
    let question = [{
        type: 'Input',
        name: 'swagger',
        message: '请输入swagger地址',
        default: 'http://172.16.8.194:8891/swagger-ui.html#/'
    }]
    program.path && question.push({
        type: 'Input',
        name: 'path',
        message: '请输入生成目录(绝对路径)',
        default: ''
    })
    inquirer
        .prompt(question)
        .then((answers) => {
            if (answers.swagger == '') {
                throw '请输入swagger地址';
            } else {
                if(!answers.path || answers.path == ''){
                    answers.path = resolveApp('src/api/');
                }
                swagger(answers.swagger, answers.path)
            }
        })
} catch (err) {
    logs(colors.red(err || '服务启动失败'));
}