#!/usr/bin/env node

'use strict';
const program = require('commander');
const log=console.log;
const attachToEnv = require('../util/attachToEnv');
const colors = require('colors');
const dll = require('../script/dll');

program
  .option('-s, --split <split>', '文件分割文件数')
  .parse(process.argv);
  attachToEnv(program);
  try{
    dll();
  }catch(err){
    log(colors.red)(err, 'dll编译失败，请检查package中dependencies依赖包或者ko.config.json');
  }
 
