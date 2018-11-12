import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.scss']
})
export class ExperienceComponent implements OnInit {

  constructor(public dialog: MatDialog) { }

  openDialog() {
    this.dialog.open(ExperienceDialogComponent, {
      maxWidth: '700px'
    });
  }

  ngOnInit() {
  }


}

@Component({
  selector: 'experience-dialog',
  templateUrl: './experience-dialog.component.html'
})
export class ExperienceDialogComponent{}