import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ApplicationManagerService } from '../../services/managers/application-manager/application-manager.service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  static apiUrl: string = 'http://localhost:5000';

  constructor(
    protected applicationManagerService: ApplicationManagerService,
    protected http: HttpClient
  ) {}

  getInstalledApps() {
    this.http
      .post(`${ApiService.apiUrl}/getInstalledApplications`, {})
      .subscribe((res: any) => {
        this.applicationManagerService.installedApps.next(res);
      });
  }

  serveApplicationByPid(pid: number, args: Object = {}): Observable<object> {
    return this.http.post(`${ApiService.apiUrl}/serveApplicationByPid`, {
      pid: pid,
      args: args,
    });
  }
}
