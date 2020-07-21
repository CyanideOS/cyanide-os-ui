import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root",
})
export class WindowsService {
  //! This should be retrieved from local database where all registeries resides!
  installedApps: {
    /// package: component-name
    "ms-outlook.microsoft.com": "ms-outlook-microsoft-com";
  };

  constructor() {}

  openWindowByPackageName(packageName: string, args: Object = {}) {
    console.log(packageName);
  }
}
