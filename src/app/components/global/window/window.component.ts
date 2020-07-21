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

  constructor() {}

  drag($event) {
    let windowContent = document.getElementById(`win-${this.windowId}`);
    const position = $event.source.getFreeDragPosition();
    const { offsetLeft, offsetTop } = $event.source.element.nativeElement;

    // windowContent.style.top = `${position.x + offsetTop}px`;
    // windowContent.style.left = `${position.y + offsetLeft}px`;
  }

  ngOnInit(): void {}
}
