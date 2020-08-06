import { Injectable } from "@angular/core";
import { WindowsService } from "../../public/api/windows/windows.service";
import { DataService } from "../../public/data/data.service";
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: "root",
})
export class ApiService {
  constructor(
    protected windowsService: WindowsService,
    protected dataService: DataService,
    protected http: HttpClient
  ) {}

  getInstalledApps() {
    this.http
      .post(`${DataService.apiUrl}/getInstalledApplications`, {})
      .subscribe((res: any) => {
        this.windowsService.installedApps.next(res);
      });
  }
}
