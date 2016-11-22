import { Component } from '@angular/core';

import { NoteService } from './shared/note.service';
import { Note } from './shared/note.model';
// import { notes } from './data/note.data';

@Component({
    selector: 'my-app',
    templateUrl: './app/app.component.html',
    styleUrls: ['./app/app.component.css'],

})

export class AppComponent {
    constructor() {  }
}       