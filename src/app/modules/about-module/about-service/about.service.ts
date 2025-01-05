import { Injectable } from '@angular/core';
import {PersonalInfoService} from "./personal-info/personal-info.service";
import {Observable} from "rxjs";
import {SkillsService} from "./skills/skills.service";
import {EducationService} from "./education/education.service";
import {AchievementService} from "./achievement/achievement.service";
import {InterestService} from "./interests/interest.service";

@Injectable({
  providedIn: 'root'
})
export class AboutService {

  constructor(
    private personalInfoService: PersonalInfoService,
    private skillsService: SkillsService,
    private educationService: EducationService,
    private achievementService: AchievementService,
    private interestService: InterestService,
  ) { }

  public getPersonalInfo(lang: string) {
    return {
      label: this.personalInfoService.getLabel(lang),
      data: this.personalInfoService.getData(lang)
    }
  }

  public getSkills(lang: string) {
    return {
      label: this.skillsService.getLabel(lang),
      data: this.skillsService.getData(lang)
    }
  }

  public getEducation(lang: string) {
    return {
      label: this.educationService.getLabel(lang),
      data: this.educationService.getData(lang),
      description: this.educationService.getDescription(lang)
    }
  }

  public getAchievements(lang: string) {
    return {
      label: this.achievementService.getLabel(lang),
      data: this.achievementService.getData(lang)
    }
  }

  public getInterests(lang: string) {
    return {
      label: this.interestService.getLabel(lang),
      data: this.interestService.getData(lang)
    }
  }
}
