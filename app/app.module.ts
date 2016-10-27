import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent }   from './app.component';
import {NotesListComponent} from './notes/notes-list.component';
import { NoteFormComponent} from './notes/note-form.component';
import {NotesItemComponent} from './notes/notes-item.component';

@NgModule({
  imports:      [ BrowserModule ],
  declarations: [ AppComponent, NoteFormComponent, NotesListComponent,NotesItemComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
