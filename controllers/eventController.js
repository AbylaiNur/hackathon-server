const Event = require("../models/Event");
const User = require("../models/User")

const getAllEvents = async (req, res, next) => {
    const events = await Event.find({});
    res.send(events);
};

const createEvent = async (req, res, next) => {
    const event = new Event(req.body);
    await event.save();
    res.send(event);
};

const deleteAllEvents = async (req, res, next) => {
    const event = await Event.deleteMany({});
    res.send(event);
};

const addUser = async (req, res, next) => {
    const event = await Event.findById(req.body.eventId)
    const user = await User.findById(req.body.userId)
    event.tokens.push(user)
    await event.save()
    res.send(user)
}


module.exports = {
    getAllEvents,
    createEvent,
    deleteAllEvents,
};




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
