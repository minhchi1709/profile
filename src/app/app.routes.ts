import { Routes } from '@angular/router';
import {AboutComponent} from "./modules/about-module/about/about.component";
import {ProjectsComponent} from "./modules/projects-module/projects/projects.component";
import {HomeComponent} from "./components/home/home.component";
import {TranscriptComponent} from "./modules/transcript-module/components/transcript/transcript.component";

export const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'about',
    component: AboutComponent
  },
  {
    path: 'projects',
    component: ProjectsComponent
  },
  {
    path: 'transcript',
    component: TranscriptComponent
  },
  {
    path: '**',
    component: HomeComponent
  }
];
