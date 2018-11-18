import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-projects",
  templateUrl: "./projects.component.html",
  styleUrls: ["./projects.component.scss"]
})
export class ProjectsComponent implements OnInit {
  projects = [
    {
      image_location: "left",
      image:
        "https://globalgamejam.org/sites/default/files/styles/game_sidebar__wide/public/game/featured_image/main_28.png?itok=DSRJXs8w&timestamp=1454276436",
      title: "Praise the Sun",
      desc:
        'Praise the Sun is a game reimagining the popular flash game "Cookie Clicker." This was made for the Global Game Jam in 2016. Click the link below for more information.',
      skills: ["HTML/CSS", "Javascript"],
      github_link: "https://github.com/taylork2/PraiseTheSun",
      other_link: "http://taylork2.github.io/PraiseTheSun/"
    },
    {
      image_location: "right",
      image: "assets/images/saveourspaceship.png",
      title: "Save our Spaceship",
      desc:
        "Save Our Spaceship (S.O.S.) is a two-player co-op game created with HTML5 canvas and Javascript where players are in separate rooms of the ship. One player in the control room controls the orientation of player two’s room and players must communicate to escape. ",
      skills: ["HTML/CSS", "canvas", "Javascript"],
      github_link: "https://github.com/taylork2/saveOurSpaceShip"
    },
    {
      image_location: "left",
      image: "assets/images/autograder.png",
      title: "Exam Auto-grader",
      desc:
        "For my university’s CS100 class, Professors and their Teacher’s Assistants would hand grade every student exam. My team and I created a system that would allow teachers to create questions and collate them into an exam which students could take. The system would then automatically grade the exam for professors to review.",
      skills: ["HTML/CSS", "PHP", "MySQL", "Python", "Python ASTs"]
    }
  ];
  constructor() {}

  ngOnInit() {}
}
