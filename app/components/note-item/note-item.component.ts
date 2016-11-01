import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Note } from '../shared/note.model';

@Component({
	selector: 'notes-item',
	templateUrl: './app/components/note-item/note-item.component.html',
	styleUrls: ['./app/components/note-item/note-item.component.css','./app/app.component.css']
})

export class NotesItemComponent {
	@Input ()  note: Note;
	@Output ()  deleted = new EventEmitter();
	 
	delete(){ 
		
		this.deleted.emit(this.note);   
	}

}