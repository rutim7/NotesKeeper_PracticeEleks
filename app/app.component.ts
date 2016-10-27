import {Component} from '@angular/core';
import {Routes, RouterModule } from '@angular/router';


import {Note} from './notes/note';

@Component({
    selector: 'my-app',
    templateUrl: './app/app.component.html',
    styleUrls: ['./app/app.component.css'],
    
})

export class AppComponent {   
   
    notes: Note[];

    constructor() {
        
        this.notes = [];
    }

    onNoteAdded(note: Note ) {
        this.notes.push(note) ;
      
    }
}       