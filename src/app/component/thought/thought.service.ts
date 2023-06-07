import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Thought } from './thought';

@Injectable({
  providedIn: 'root',
})
export class ThoughtService {

  private readonly API = 'http://localhost:3000/';

  constructor(private http: HttpClient) {}

  getThoughs(){
    return this.http.get<Thought[]>(this.API + 'thoughts');
  }

  create(thought: Thought): Observable<Thought> {
    return this.http.post<Thought>(this.API + 'thoughts', thought);
  }
}
