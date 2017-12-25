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
	  * Конструктор класса
	  * @param=id номер записки
	  * @param=textNote текст записки
	  * @param=dateOfBegin дата
	  */
	constructor(textNote: string, id: number, dateOfBegin: Date) {
  
		this.id=id;
        this.textNote = textNote;
		this.dateOfBegin = dateOfBegin;
    }
}