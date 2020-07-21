import { Component } from "@angular/core";
import { UserService } from "./services/private/user/user.service";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"],
})
export class AppComponent {
  constructor(protected userServices: UserService) {}

  getWallpaperUrl() {
    return this.userServices.wallpaper;
  }
}
