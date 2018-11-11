import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'my-browser',
  templateUrl: './browser.component.html',
  styleUrls: ['./browser.component.scss']
})

export class BrowserComponent implements OnInit {

  @Input()
  color: string = "#5386E4"; 

  constructor() { }

  ngOnInit() {
  }

}
