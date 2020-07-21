import { Component, OnInit, Input } from "@angular/core";
import { NativeSDKExceptionService } from "../../../services/public/native-sdk/exception.service";

@Component({
  selector: "native-button",
  templateUrl: "./button.component.html",
  styleUrls: ["./button.component.scss"],
})
export class ButtonComponent implements OnInit {
  X: number = 0;
  Y: number = 0;

  @Input("isOutlined") isOutlined: boolean = false;
  @Input("isDisabled") isDisabled: boolean = false;
  @Input("innerComponent") innerComponent: HTMLElement;
  @Input("innerText") innerText: string = "";
  @Input("overflow") overflow: "clip" | "ellipsis";
  @Input("width") width: number;
  @Input("icon") icon: string;
  @Input("height") height: number = 2;

  constructor(private exceptionService: NativeSDKExceptionService) {}

  move($event: MouseEvent) {
    this.X = $event.clientX;
    this.Y = $event.clientY;
  }

  ngOnInit(): void {
    if (!this.innerText && !this.innerComponent)
      this.exceptionService.AssertionException(
        `Expected data inside button for rendering got "null"`
      );
  }
}
