import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule, JsonpModule }  from '@angular/http';
import { FormsModule } from '@angular/forms';
import { routes } from './app.router';
import { NoteService } from './shared/note.service'
import { AppComponent }   from './app.component';
import {NoteListComponent} from './components/note-list/note-list.component';
import { NoteFormComponent} from './components/note-form/note-form.component';
import {NoteItemComponent} from './components/note-item/note-item.component';

// Imports for loading & configuring the in-memory web api
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { NoteDataService }  from './data/note.data';


@NgModule({
  imports:      [ BrowserModule,HttpModule, InMemoryWebApiModule.forRoot(NoteDataService),,FormsModule, routes ],
  declarations: [ AppComponent, NoteFormComponent, NoteListComponent,NoteItemComponent ],
  providers:[NoteService],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
