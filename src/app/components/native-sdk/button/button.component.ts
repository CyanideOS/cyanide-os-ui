import { Component, OnInit } from "@angular/core";

@Component({
  selector: "native-button",
  templateUrl: "./button.component.html",
  styleUrls: ["./button.component.scss"],
})
export class ButtonComponent implements OnInit {
  X: number = 0
  Y: number = 0

  constructor() {}

  move($event: MouseEvent) {
    this.X = $event.clientX;
    this.Y = $event.clientY;
  }

  ngOnInit(): void {}
}
