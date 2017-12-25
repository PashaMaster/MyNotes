"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
  * Класс, который будет хранить номер и записку
  */
var Item = (function () {
    /**
      * Конструктор класса
      * @param=id номер записки
      * @param=textNote текст записки
      * @param=dateOfBegin дата
      */
    function Item(textNote, id, dateOfBegin) {
        this.id = id;
        this.textNote = textNote;
        this.dateOfBegin = dateOfBegin;
    }
    return Item;
}());
exports.Item = Item;
//# sourceMappingURL=item.js.map