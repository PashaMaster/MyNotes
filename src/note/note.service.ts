import { Injectable } from '@angular/core';
import { ITEMS } from '../mock/mock-note';

@Injectable()

export class NoteService {

	getItems() {

		return ITEMS;
	}
}