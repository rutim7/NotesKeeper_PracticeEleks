import { Component, Input } from '@angular/core';

import { Note } from '../shared/note.model';

@Component({
	selector: 'notes-list',
	templateUrl: './app/components/note-list/note-list.component.html',
	styleUrls: ['./app/components/note-list/note-list.component.css','./app/app.component.css'],
	
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