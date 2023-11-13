import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/app/environments/environment';
import { EMPTY, Observable } from 'rxjs';
import { Card } from '../models/card.model';

@Injectable({
  providedIn: 'root'
})
export class CardService {

  private api = environment.API_URL;

  constructor(
    private http: HttpClient,
  ) { }

  getSkillsCards(): Observable<Card[]> {
    return this.http.get<Card[]>(this.api).pipe();
  }

  postLikeSkill(likes: number) {
    this.http.post(this.api, { likes: likes }).pipe();
  }

}