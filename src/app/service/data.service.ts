import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {CommentInterface} from "../interfaces/comment.interface";

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) { }

  getExperience(): Observable<any> {
    return this.http.get<any>('https://62cbcfcd8042b16aa7c2d987.mockapi.io/blog/api/experience');
  }

  getServices(): Observable<any> {
    return this.http.get<any>('https://62cbcfcd8042b16aa7c2d987.mockapi.io/blog/api/services');
  }

  getComments(): Observable<any> {
    return this.http.get<any>('https://62cbcfcd8042b16aa7c2d987.mockapi.io/blog/api/comments?p=1&l=5');
  }

  addComments(body: CommentInterface): Observable<any> {
    return this.http.post<any>('https://62cbcfcd8042b16aa7c2d987.mockapi.io/blog/api/comments', body);
  }
}
