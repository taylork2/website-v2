import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'experience-tab',
  templateUrl: './experience-tab.component.html',
  styleUrls: ['./experience-tab.component.scss']
})

export class ExperienceTabComponent implements OnInit {

  @Input() color: string = "#5386E4";
  @Input() image: string = "assets/images/rde_messaging.png";
  @Input() company: string;
  @Input() position: string;
  @Input() company_link: string = "/";


  constructor() { }

  ngOnInit() {
  }

}
