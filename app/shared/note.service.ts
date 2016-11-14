import { Injectable } from '@angular/core';
import { INote} from './note.model';
import { notes} from './note.data';


@Injectable()
export class NoteService{
     getNotes():Promise<INote[]> {
        return new Promise(resolve => setTimeout(() => resolve(notes),1000));
     }

     addNote(note: INote):void{
         notes.push(note);
     }

     deleteNote(note: INote):void{
			 let index = notes.indexOf(note);
			 if (index>-1){
				 notes.splice(index,1);
			 }  
     }

}