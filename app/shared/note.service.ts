import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Headers, RequestOptions } from '@angular/http';
import { INote} from './note.model';

import { Observable }     from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/throw';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/toPromise';

// import { notes} from '../data/note.data';


@Injectable()
export class NoteService{
    private apiUrl = './data/note.data';
     constructor(private http: Http) { }

     getNotes() {
    return this.http.get(this.apiUrl)
                    .map(this.extractData)
                    .catch(this.handleError);
  }

     addNote(note: INote):Observable<INote>{
       return  this.post(note);
     }

     deleteNote(note: INote):Observable<INote>{
			 return this.delete(note);
     }


   private post(note: INote): Observable<INote> {
        let body = JSON.stringify(note);
        let headers = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers });

        return this.http.post(this.apiUrl, body, options)
                        .map(this.extractData)
                        .catch(this.handleError);
    }

    private put(note: INote): Observable<INote> {
        let body = JSON.stringify(note);
        let headers = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers });

        let url = `${this.apiUrl}/${note.id}`;

        return this.http.put(url, body, options)
                        .map(res => note)
                        .catch(this.handleError);
    }

    private delete(note: INote):Observable<INote> {
        let headers = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers });

        let url = `${this.apiUrl}/${note.id}`;

        return this.http.delete(url, options)
                        .map(res => note)
                        .catch(this.handleError);
    }

      private extractData(res: Response) {
    let body = res.json();
    return body.data || { };
  }
  

  private handleError (error: Response | any) {
    // In a real world app, we might use a remote logging infrastructure
    let errMsg: string;
    if (error instanceof Response) {
      const body = error.json() || '';
      const err = body.error || JSON.stringify(body);
      errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
    } else {
      errMsg = error.message ? error.message : error.toString();
    }
    console.error(errMsg);
    return Observable.throw(errMsg);
  }
}