import {Component, OnInit, ViewChild} from '@angular/core';
import {Element} from "@angular/compiler";
import {AboutService} from "../about-service/about.service";
import {LanguageService} from "../../../services/language-service/language.service";
import {NgForOf} from "@angular/common";

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [
    NgForOf
  ],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css'
})
export class AboutComponent implements OnInit{
  lang: string = 'en'
  personalInfo: any
  skills: any
  education: any
  achievements: any
  interests: any

  constructor(
    private service: AboutService,
    private langService: LanguageService
  ) {
    this.lang = this.langService.getLang
    this.langService.lang$.subscribe(lang => {
      this.lang = lang
      this.ngOnInit()
    })
  }

  ngOnInit(): void {
    this.personalInfo = this.service.getPersonalInfo(this.lang)
    this.skills = this.service.getSkills(this.lang)
    this.education = this.service.getEducation(this.lang)
    this.achievements = this.service.getAchievements(this.lang)
    this.interests = this.service.getInterests(this.lang)
  }
}
