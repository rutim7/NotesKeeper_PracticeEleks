// import { INote } from '../shared/note.model';

import { InMemoryDbService } from 'angular-in-memory-web-api';

export class NoteDataService implements InMemoryDbService {
   createDb() {
   let notes = [
    {            id: 1,
                 title: 'Title1', 
                  category: 'Category1', 
                  text: 'Lorem1 ipsum dolor sit amet, consectetur adipisicing elit. Distinctio, assumenda dolore soluta pariatur quidem mollitia repudiandae laborum animi illo. Nostrum, omnis id pariatur voluptatum fuga dolorem sit excepturi necessitatibus mollitia.'
        
     },
       {          id: 2,
                  title: 'Title2', 
                  category: 'Category2', 
                  text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Distinctio, assumenda dolore soluta pariatur quidem mollitia repudiandae laborum animi illo. Nostrum, omnis id pariatur voluptatum fuga dolorem sit excepturi necessitatibus mollitia.'
        }

];
  return {notes};
  }
}