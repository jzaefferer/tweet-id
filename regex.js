//var result = '{"id_str":"13180772","liste'.match(/.+?:"(.+?)"/)[1];
var result = '<?xml version="1.0" encoding="UTF-8"?>\n<user>\n<id>13180772</id>\n<name>J&#246;rn Zaefferer</name>'.match(/.+d>(.+?)</)[1];
console.log(result)
