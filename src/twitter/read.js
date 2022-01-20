const fs = require('fs');

const jsonObject = JSON.parse(fs.readFileSync('./output.json', 'utf8'));
const result = {};

jsonObject.Item.forEach((obj) => {
    result[obj.date] = obj;
    console.log(obj.Name, obj.age ,obj.weight )
});