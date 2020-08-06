import { Component, OnInit } from "@angular/core";
import { UserService } from "./services/private/user/user.service";
import { ApiService } from "./services/private/api/api.service";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"],
})
export class AppComponent implements OnInit {
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
