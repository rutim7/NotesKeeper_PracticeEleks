import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { routes } from './app.router';
import { AppComponent }   from './app.component';
import {NotesListComponent} from './components/note-list/note-list.component';
import { NoteFormComponent} from './components/note-form/note-form.component';
import {NotesItemComponent} from './components/note-item/note-item.component';
// import {NgbModule} from '@ng-bootstrap/ng-bootstrap';


@NgModule({
  imports:      [ BrowserModule,FormsModule, routes ],
  declarations: [ AppComponent, NoteFormComponent, NotesListComponent,NotesItemComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
