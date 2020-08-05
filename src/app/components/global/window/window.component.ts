import { Component, OnInit, Input } from "@angular/core";
import { WindowsService } from "src/app/services/public/api/windows/windows.service";

@Component({
  selector: "window",
  templateUrl: "./window.component.html",
  styleUrls: ["./window.component.scss"],
})
export class WindowComponent implements OnInit {
  windowId: number = 1;
  width: string = "45%";
  height: string = "50%";
  prevWidth: string = "45%";
  prevHeight: string = "50%";
  focused: boolean = true;
  isMaximized: boolean = false;
  isMinimized: boolean = false;
  _transform: "unset" = "unset";

  @Input("pid")
  pid: number;

  @Input("component")
  component: string;

  position: { X: number; Y: number } = {
    X: 5,
    Y: 7,
  };

  prevPosition: { X: number; Y: number } = {
    X: 5,
    Y: 7,
  };

  constructor(private windowService: WindowsService) {}

  maximize() {
    if (this.isMaximized) {
      this.isMaximized = false;
      this.width = this.prevWidth;
      this.height = this.prevHeight;

      this.position = this.prevPosition;
      // this._transform = "unset";
    } else {
      this.isMaximized = true;
      this.prevWidth = this.width;
      this.prevHeight = this.height;
      this.prevPosition = this.position;

      this.width = "100%";
      this.height = "100%";
      this.position = { X: 0, Y: 0 };
    }
  }

  minimize() {
    this.isMinimized = true;

    this.width = "100%";
    this.height = "100%";
  }

  closeWindow() {
    this.windowService.closeWindowByPid(this.pid);
  }

  log(v: any) {
    console.log(v);
  }

  ngOnInit(): void {}
}
