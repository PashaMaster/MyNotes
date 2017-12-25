/**
  * Класс, который будет хранить номер и записку
  */
export class Item{

	/**
	  * Поле, которое хранит номер записки
	  */
	id : number;
	
	/**
	  * Поле которое хранит текст записки
	  */
	textNote: string;
    
	/**
	  * Поле которое хранит дату
	  */
	dateOfBegin: Date;

	/**
	  * Поле которое хранит дату
	  */
	autor: string;

	/**
	  * Конструктор класса
	  * @param=id номер записки
	  * @param=textNote текст записки
	  * @param=dateOfBegin дата
	  * @param=autor имя автора
	  */
	constructor(textNote: string, id: number, dateOfBegin: Date, autor: string) {
  
		this.id=id;
        this.textNote = textNote;
		this.dateOfBegin = dateOfBegin;
		this.autor=autor;
    }
}