const fs = require('fs');
const crypto = require('crypto')
const zlib = require('zlib');

const unzip = zlib.createUnzip()
const decrypt = crypto.createDecipher('aes-256-ctr', 'd6F3Efeq');