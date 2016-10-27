import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Note } from './note';

@Component({
	selector: 'notes-item',
	templateUrl: './app/notes/notes-item.component.html',
	styleUrls: ['./app/notes/notes-item.component.css','./app/app.component.css']
})

export class NotesItemComponent {
	@Input ()  note: Note;
	@Output ()  deleted = new EventEmitter();
	 
	delete(){ 
		
		this.deleted.emit(this.note);   
	}

}