import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent }   from './app.component';
import {NotesListComponent} from './components/note-list/note-list.component';
import { NoteFormComponent} from './components/note-form/note-form.component';
import {NotesItemComponent} from './components/note-item/note-item.component';

export const router: Routes =[
    {path: '', redirectTo: 'newNote', pathMatch: 'full'},
    {path:'newNote', component: NoteFormComponent},
    {path:'allNotes', component: NotesListComponent}
];

export const routes: ModuleWithProviders = RouterModule.forRoot(router);            
