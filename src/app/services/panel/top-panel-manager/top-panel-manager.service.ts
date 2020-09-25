import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class TopPanelManagerService {
  title: BehaviorSubject<string> = new BehaviorSubject('CyanideOS');

  constructor() {}
}
