import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { ApplicationInterface } from './interfaces';

@Injectable({
  providedIn: 'root',
})
export class ApplicationManagerService {
  //! This should be retrieved from local database where all registeries resides!
  installedApps: BehaviorSubject<{
    [key: string]: ApplicationInterface;
  }> = new BehaviorSubject<{ [key: string]: ApplicationInterface }>({});

  constructor() {}
}
