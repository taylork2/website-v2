import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-clubs",
  templateUrl: "./clubs.component.html",
  styleUrls: ["./clubs.component.scss"]
})
export class ClubsComponent implements OnInit {
  clubs = [
    {
      club: "NJIT Splash",
      position: "Co-Founder and Head Organizer",
      desc:
        "NJIT Splash is an educational program where high school students attend classes of their choice at NJIT that are taught by passionate college students. Each year, I coordinated ~100 volunteers (including volunteer student teachers) and smoothly ran an event with 300+ high schoolers.",
      link: "https://njitsplash.learningu.org/"
    },
    {
      club: "Yearbook",
      position: "Head Layouts Editor",
      desc:
        "As editor, I would design the yearbook and manage it’s artistic direction as well as manage & train a staff of 15+ people."
    },
    {
      club: "Technology Observer",
      position: "Editor in Chief",
      desc:
        "As editor in chief, I managed editors & oversaw the creation of a technology focused magazine.",
      link: "http://honors.njit.edu/news/technologyobserver/"
    }
  ];

  constructor() {}

  ngOnInit() {}
}
