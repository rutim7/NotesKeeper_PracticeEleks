import { Component,Output,EventEmitter } from '@angular/core';
import { Note }	from '../../shared/note.model';
import { NoteService } from '../../shared/note.service';


@Component({
	selector: 'note-form',
	templateUrl: './app/components/note-form/note-form.component.html',
	styleUrls: ['./app/components/note-form/note-form.component.css','./app/app.component.css']
})

export class NoteFormComponent  {
  @Output() added = new EventEmitter();
   
constructor(private noteService:NoteService){}

   add(title: string, category:string, text:string){
		  if(title && category && text){
			  let note = new Note(title,category,text);
				this.noteService.addNote(note);
		  }

   }
	
}