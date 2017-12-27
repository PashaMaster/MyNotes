import { Item } from '../item/item';     
import * as data from './mock.json';

/** 
  * Массив типа Item, который хранит первоначальные записки
  */
export var ITEMS: Item[] = 
    [
        { id: 1, textNote: "Hello!", dateOfBegin: new Date("2017-08-16"), autor: "Pasha"},
        { id: 2, textNote: "I am Pasha", dateOfBegin: new Date("2017-07-03"), autor: "Kolja"},
        { id: 3, textNote: "Good morning:)", dateOfBegin: new Date("2018-01-26"), autor: "Petja"},
        { id: 4, textNote: "What do you do?", dateOfBegin: new Date("2017-07-26"), autor: "Petja"}
  
    ];


