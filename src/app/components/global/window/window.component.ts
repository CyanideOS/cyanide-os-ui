import { Component, OnInit } from "@angular/core";

@Component({
  selector: "window",
  templateUrl: "./window.component.html",
  styleUrls: ["./window.component.scss"],
})
export class WindowComponent implements OnInit {
  windowId: number = 1;
  width: string = "65%";
  height: string = "50%";
  prevWidth: string = "65%";
  prevHeight: string = "50%";
  focused: boolean = true;
  isMaximized: boolean = false;
  isMinimized: boolean = false;

  position: { X: number; Y: number } = {
    X: 1,
    Y: 2,
  };

  prevPosition: { X: number; Y: number } = {
    X: 1,
    Y: 2,
  };

  constructor() {}

  drag($event) {
    this.maximize();
    let windowContent = document.getElementById(`win-${this.windowId}`);
    const position = $event.source.getFreeDragPosition();
    const { offsetLeft, offsetTop } = $event.source.element.nativeElement;

    // windowContent.style.top = `${position.x + offsetTop}px`;
    // windowContent.style.left = `${position.y + offsetLeft}px`;
  }

  maximize() {
    if (this.isMaximized) {
      this.isMaximized = false;
      this.width = this.prevWidth;
      this.height = this.prevHeight;

      this.position = this.prevPosition;
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

  ngOnInit(): void {}
}
