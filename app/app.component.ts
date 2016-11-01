import { Component } from '@angular/core';
import { Note } from './components/shared/note.model';

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

    onNoteAdded(note: Note) {
        this.notes.push(note);

    }
}       