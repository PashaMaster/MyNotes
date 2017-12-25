import { Item } from '../item/item';     

/** 
  * Массив типа Item, который хранит первоначальные записки
  */
export var ITEMS: Item[] = 
    [
        { id: 1, textNote: "Hello!", dateOfBegin: new Date("2017-08-16")},
        { id: 2, textNote: "I am Pasha", dateOfBegin: new Date("2017-07-26T00:00:00.000Z")},
        { id: 3, textNote: "Good morning:)", dateOfBegin: new Date("2018-07-26T00:00:00.000Z")},
        { id: 4, textNote: "What do you do?", dateOfBegin: new Date("2017-07-26T00:00:00.000Z")}
  
    ];