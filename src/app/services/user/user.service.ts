import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  wallpaper: BehaviorSubject<string> = new BehaviorSubject(
    '/assets/wallpapers/autmn.jpg'
  );

  constructor() {}
}
