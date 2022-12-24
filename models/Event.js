const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const User = require('User')

const eventSchema = new Schema({
    organizationName: { type: String, required: true },
    maxGuest: { type: Number, required: true },
    dateStart: { type: Date, required: true },
    image: {type: String, required: true},
    tokens: {type: [User], required: true},
    dateDeath : {type: Date, required: true},
});

const Event = mongoose.model("Event", eventSchema);

module.exports = Event;

/*
Будут такие запросы:
1. Добавление Эвента. будут передаваться
    Название организатора Эвента.
    Количество гостей(максимальное значение)
    Дата проведения
    Картинка эвента
    В таблице в зависимости от кол-ва гостей должно появится колонка с количеством токенов(Например 100 гостей - 100 токено)
    Также должна быть колонка DateDeath(это дата после которой, будут удаляться токены которые не были розданы. Эта дата - следующий день после эвента )

2. Добавление участников к эвенту:
    Адрес их кошельков
    Название эвента
    может еще добавим
 */