import { Injectable } from '@angular/core';

@Injectable()
export class GlobalConstantsServiceService {

  constructor() { }
  public API_ENDPOINT(): string {
    //return 'http://127.0.0.1:5000/';
     return 'https://peaceful-dusk-28085.herokuapp.com/';
  }
}
