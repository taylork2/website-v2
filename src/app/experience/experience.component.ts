import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialog } from '@angular/material';

export interface DialogData {
  company_name: 'RDE Systems' | 'Trillium' | 'Forbes';
}

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.scss']
})
export class ExperienceComponent implements OnInit {

  experiences = [
    {
      company: 'RDE Systems',
      position: 'Capstone', 
			company_link: 'https://www.rde.org/',
			image: 'assets/images/rde_messaging.png',
      skills: ['Angular', 'Bootstrap', 'HTML/CSS', 'Coldfusion', 'REST APIs'],
      date: 'FEB 2018 - MAY 2018',
      desc: [ 'Designed and developed messaging system using Angular which encouraged AIDS patients to communicate with case workers.',
          'Created Coldfusion API and integrated messaging system into larger webapp for government AIDS Drug Assistance.'],
      color: '#4C4B63'
    },
    {
      company: 'Trillium',
      position: 'Software Engineering Intern',
  		company_link: 'https://www.trlm.com/',
      image: 'https://www.trlm.com/wp-content/uploads/2017/09/Market-App-3-Replay-Trading-Sequences-2.gif',
      skills: ['Javascript', 'WebGL', 'HTML/CSS', 'JIRA', 'TortoiseSVN'],
      date: 'JUN 2016 - APR 2017',
      desc: [ 'Collaborated with a team to create a web app to display trading data in graphical and intuitive manner using WebGL, HTML5 canvas, and JS.',
				'Added new features based on customer feedback such as resizable windows, graphical functions, zoom, and stock search which simplified user interactions and provided better market picture.',
        'Responded to ticket issues, developed bug fixes, & pushed changes using JIRA and TortoiseSVN.' ],
      color: '#5386E4'
    },
    {
      company: 'Forbes',
      position: 'Technology Intern',
      company_link: 'https://forbes.com/',
      image: 'https://www.vandelaydesign.com/wp-content/uploads/01-forbes-adblock-whitelist.jpg',
      skills: ['Java', 'Google Tag Manager', 'SpringMVC', 'Git', 'Phabricator'],
      date: 'JUN 2015 - AUG 2015',
      desc: ['Analyzed Adblock development trends and contributed to creation of “adblock blocker” which increased company revenue.',
            'Gained experience with Google Tag Manager V2 & Google Analytics, SpringMVC, and website template design.',
            'Obtained experience with Git & Code Review via Phabricator/Arcanist.'],
      color: 'black'
    }
  ]

  constructor(public dialog:MatDialog) { }

  openDialog(company: string) {
    this.dialog.open(ExperienceDialogComponent, {
      maxWidth: '700px',
      data: {
          company_name: company
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