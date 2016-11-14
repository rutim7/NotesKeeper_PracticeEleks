import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent }   from './app.component';
import {NoteListComponent} from './components/note-list/note-list.component';
import { NoteFormComponent} from './components/note-form/note-form.component';
import {NoteItemComponent} from './components/note-item/note-item.component';

export const router: Routes =[
    {path: '', redirectTo: 'newNote', pathMatch: 'full'},
    {path:'newNote', component: NoteFormComponent},
    {path:'allNotes', component: NoteListComponent}
];

export const routes: ModuleWithProviders = RouterModule.forRoot(router);            
