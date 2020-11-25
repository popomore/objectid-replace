#!/usr/bin/env node

'use strict';

const fs = require('fs');
const path = require('path');
const assert = require('assert');
const ObjectId = require('bson-objectid');

const arg = process.argv[2];
console.log(arg);
const filepath = path.join(process.cwd(), arg);

assert(fs.existsSync(filepath), `${arg} is not found`);

let body = fs.readFileSync(filepath, 'utf8');
body = body.replace(/\{\{objectId\}\}/g, () => ObjectId());
console.info(body);
