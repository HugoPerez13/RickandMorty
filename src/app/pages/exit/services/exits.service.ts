import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ExitsService {
  public exitsURL: string = 'https://rickandmortyapi.com/api/character';

  constructor(private httpClient: HttpClient) {}

  public getAllExits() {
    return this.httpClient.get(this.exitsURL);
  }
}
