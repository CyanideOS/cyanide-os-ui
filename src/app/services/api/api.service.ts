import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { WindowsManagerService } from 'src/app/native-sdk/services/window-manager/window-manager.service';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  static apiUrl: string = 'http://localhost:5000';

  constructor(
    protected windowsService: WindowsManagerService,
    protected http: HttpClient
  ) {}

  getInstalledApps() {
    this.http
      .post(`${ApiService.apiUrl}/getInstalledApplications`, {})
      .subscribe((res: any) => {
        this.windowsService.installedApps.next(res);
      });
  }
}
