import {Component, OnInit} from '@angular/core';
import {ProjectsService} from "../projects-service/projects.service";
import {LanguageService} from "../../../services/language-service/language.service";
import {NgForOf, NgIf} from "@angular/common";

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [
    NgForOf,
    NgIf
  ],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.css'
})
export class ProjectsComponent implements OnInit{
  lang: string = 'en'
  description !: string
  tech !: string
  try !: string
  projects: any

  constructor(
    private service: ProjectsService,
    private langService: LanguageService
  ) {
    this.lang = this.langService.getLang
    this.langService.lang$.subscribe(lang => {
      this.lang = lang
      this.ngOnInit()
    })
  }

  ngOnInit(): void {
    this.description = this.service.getDescription(this.lang)
    this.tech = this.service.getTech(this.lang)
    this.try = this.service.getTry(this.lang)
    this.projects = this.service.getData(this.lang)
  }
}
