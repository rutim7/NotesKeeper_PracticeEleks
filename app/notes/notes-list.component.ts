import { Component, Input } from '@angular/core';

import { Note } from './note';

@Component({
	selector: 'notes-list',
	templateUrl: './app/notes/notes-list.component.html',
	styleUrls: ['./app/notes/notes-list.component.css','./app/app.component.css'],
	
})

export class NotesListComponent  {
	@Input () notes: Note[];

	onNoteDeleted(note: Note){
		 if(note){
			 let index = this.notes.indexOf(note);
			 if (index>-1){
				 this.notes.splice(index,1);
			 }
		 }
	}	

}