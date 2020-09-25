import { Component } from '@angular/core';
import { ApiService } from './services/api/api.service';
import { UserService } from './services/user/user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  constructor(
    protected userServices: UserService,
    protected apiService: ApiService
  ) {}

  getWallpaperUrl() {
    return this.userServices.wallpaper;
  }

  ngOnInit(): void {
    this.apiService.getInstalledApps();
  }
}
