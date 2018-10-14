import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UtilServiceService {

  constructor() { }

  static hoursList(difference) {
    const times = [];
    let tt = 0;
    const ap = ['AM', 'PM'];

    for (let i = 0; tt < 24 * 60; i++) {
      const hh = Math.floor(tt / 60);
      const mm = (tt % 60);
      times[i] = ('0' + (hh % 24)).slice(-2) + ':' + ('0' + mm).slice(-2);
      tt = tt + difference;
    }
    return times;
  }
}
