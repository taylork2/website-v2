import { Component, OnInit, Input, Inject } from '@angular/core';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material';

export interface DialogData {
    company: 'RDE Systems' | 'Trillium' | 'Forbes';
}


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

  constructor(public dialog: MatDialog) { }

  openDialog() {
    this.dialog.open(ExperienceDialogComponent, {
      maxWidth: '700px',
      data: {
          company: this.company
      }
    });
  }

  ngOnInit() {
  }

}

@Component({
    selector: 'experience-dialog',
    templateUrl: './experience-dialog.component.html'
})
export class ExperienceDialogComponent{
    constructor(@Inject(MAT_DIALOG_DATA) public data: DialogData) {}

}


