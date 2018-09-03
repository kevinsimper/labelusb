const fs = require('fs')

const buf = fs.readFileSync('./src/label.bin')

fs.writeFileSync('./src/label.json', JSON.stringify(buf), 'utf8')