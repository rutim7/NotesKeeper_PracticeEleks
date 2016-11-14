import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { routes } from './app.router';
import { NoteService } from './shared/note.service'
import { AppComponent }   from './app.component';
import {NoteListComponent} from './components/note-list/note-list.component';
import { NoteFormComponent} from './components/note-form/note-form.component';
import {NoteItemComponent} from './components/note-item/note-item.component';



@NgModule({
  imports:      [ BrowserModule,FormsModule, routes ],
  declarations: [ AppComponent, NoteFormComponent, NoteListComponent,NoteItemComponent ],
  providers:[NoteService],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
