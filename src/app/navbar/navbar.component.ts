import { Component } from "@angular/core";
import { fromEvent } from "rxjs";
import { initDomAdapter } from "@angular/platform-browser/src/browser";

@Component({
  selector: "app-navbar",
  templateUrl: "./navbar.component.html",
  styleUrls: ["./navbar.component.scss"]
})
export class NavbarComponent {
  constructor() {}

  scrollToSection = function() {};

  ngOnInit() {
    var initialPageOffset = window.pageYOffset;
    fromEvent(document, "scroll").subscribe(() => {
      var currentPageOffset = window.pageYOffset;
      var el = document.getElementById("navbar");

      if (currentPageOffset < initialPageOffset) {
        el.style.transform = "translate(0,0)";
        el.classList.add("nav-scroll");
      } else {
        el.style.transform = "translate(0, -100%)";
      }

      if (currentPageOffset === 0) {
        el.classList.remove("nav-scroll");
      }

      initialPageOffset = currentPageOffset;
    });
  }
}
