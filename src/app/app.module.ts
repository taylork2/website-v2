import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { MaterialModule } from "@blox/material";
import { FormsModule } from "@angular/forms";

import { AppComponent } from "./app.component";
import { WelcomeComponent } from "./welcome/welcome.component";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { NavbarComponent } from "./navbar/navbar.component";
import { LayoutModule } from "@angular/cdk/layout";
import {
  MatToolbarModule,
  MatButtonModule,
  MatSidenavModule,
  MatMenuModule,
  MatIconModule,
  MatListModule,
  MatCardModule,
  MatTabsModule,
  MatChipsModule,
  MatDialogModule
} from "@angular/material";
import { FlexLayoutModule } from "@angular/flex-layout";
import { AboutComponent } from "./about/about.component";
import { BrowserComponent } from "./browser/browser.component";
import {
  ExperienceComponent,
  ExperienceDialogComponent
} from "./experience/experience.component";
import { ProjectsComponent } from "./projects/projects.component";
import { ClubsComponent } from "./clubs/clubs.component";

@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent,
    NavbarComponent,
    AboutComponent,
    BrowserComponent,
    ExperienceComponent,
    ExperienceDialogComponent,
    ProjectsComponent,
    ClubsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    MaterialModule,
    BrowserAnimationsModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatCardModule,
    FlexLayoutModule,
    MatTabsModule,
    MatChipsModule,
    MatDialogModule,
    MatMenuModule
  ],
  entryComponents: [ExperienceDialogComponent],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
