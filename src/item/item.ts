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
	  * Конструктор класса
	  * @param=id номер записки
	  * @param=textNote текст записки
	  */
	constructor(textNote: string, id: number) {
  
		this.id=id;
        this.textNote = textNote;
    }
}