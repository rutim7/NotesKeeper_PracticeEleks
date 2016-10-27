import { Component,Output,EventEmitter } from '@angular/core';
import { Note }	from './note';


@Component({
	selector: 'note-form',
	templateUrl: './app/notes/note-form.component.html',
	styleUrls: ['./app/notes/note-form.component.css','./app/app.component.css']
})

export class NoteFormComponent  {
  @Output() added = new EventEmitter();

   add(title: string, category:string, text:string){
		  if(title && category && text){
				this.added.emit(new Note(title,category,text));
		  }

   }
	
}