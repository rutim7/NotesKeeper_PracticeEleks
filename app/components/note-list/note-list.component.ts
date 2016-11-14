import { Component, OnInit } from '@angular/core';

import { INote, Note } from '../../shared/note.model';
import { NoteService } from '../../shared/note.service';

@Component({
	selector: 'notes-list',
	templateUrl: './app/components/note-list/note-list.component.html',
	styleUrls: ['./app/components/note-list/note-list.component.css','./app/app.component.css'],
	
})

export class NoteListComponent implements OnInit  {
	 notes: INote[];
	
	constructor(private noteService:NoteService){}

	ngOnInit(){
    this.noteService.getNotes()
					.then(notes => this.notes = notes );
				}

	onNoteDeleted(note: INote){
		this.noteService.deleteNote(note);
	}	

}