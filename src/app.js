const app = require('express')();
const cors = require('cors');
const routes = require('./routes');

app.use(cors());
app.use(routes);

/*

Holo_D:
Создай каталоги внутри src: models, routes, controllers, utils
Подкючи базу данных через mongoose и создай пока один роут, любой.
Будем юзать MongoDB Atlas, если будет время - можешь там зарегать кластер.

*/

//TODO:
/* 
1. signup mongodb atlas
2. https://www.mongodb.com/cloud/atlas
3. создаешь кластер
4. cоздаешь пользователя
5. берешь урлу с кредами
*/

module.exports = app;
