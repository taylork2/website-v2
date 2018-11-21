import { Component } from "@angular/core";
import { fromEvent } from "rxjs";
import { initDomAdapter } from "@angular/platform-browser/src/browser";

@Component({
  selector: "app-navbar",
  templateUrl: "./navbar.component.html",
  styleUrls: ["./navbar.component.css"]
})
export class NavbarComponent {
  constructor() {}

  ngOnInit() {
    var initialPageOffset = window.pageYOffset;
    fromEvent(document, "scroll").subscribe(() => {
      var currentPageOffset = window.pageYOffset;
      var el = document.getElementById("navbar");

      if (currentPageOffset < initialPageOffset) {
        el.style.transform = "translate(0,0)";
      } else {
        el.style.transform = "translate(0, -100%)";
      }

      initialPageOffset = currentPageOffset;
    });
  }
}
