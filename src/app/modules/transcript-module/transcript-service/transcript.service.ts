import { Injectable } from '@angular/core';
import {AppliedCSService} from "./applied-cs-service/applied-cs.service";
import {ComputerEngineeringService} from "./computer-engineering-service/computer-engineering.service";
import {TheoreticalCSService} from "./theoretical-cs-service/theoretical-cs.service";
import {MathematicsService} from "./mathematics-service/mathematics.service";
import {OtherAchievementsService} from "./other-achievements-service/other-achievements.service";
import {ElectivesService} from "./electives-service/electives.service";

@Injectable({
  providedIn: 'root'
})
export class TranscriptService {

  private appliedCS: number = this.appliedService.getAverage()
  private compEng: number = this.compEngService.getAverage()
  private theoreticalCS: number = this.theoreticalService.getAverage()
  private math: number = this.mathService.getAverage()
  private other: number = this.otherService.getAverage()
  private electives: number = this.electivesService.getAverage()

  private headers: Record<string, string[]>= {
    en: ['Course', 'Semester', 'Credits', 'Grade'],
    de: ['Fach', 'Semester', 'Credits', 'Note'],
    vi: ['Môn học', 'Học kỳ', 'Tín chỉ', 'Điểm số'],
  }

  private average: Record<string, string> = {
    en: 'Average',
    de: 'Durchschnitt',
    vi: 'Trung bình'
  }

  private overall: Record<string, any> = {
    en: 'Overall Grades',
    de: 'Gesamtnote',
    vi: 'Điểm trung bình'
  }

  private credit: Record<string, string> = {
    en: 'Overall Credits',
    de: 'Gesamtcredits',
    vi: 'Tổng số tín chỉ'
  }

  private download: Record<string, string> = {
    en: 'Download',
    de: 'Herunterladen',
    vi: 'Tải xuống'
  }

  constructor(
    private appliedService: AppliedCSService,
    private compEngService: ComputerEngineeringService,
    private theoreticalService: TheoreticalCSService,
    private mathService: MathematicsService,
    private otherService: OtherAchievementsService,
    private electivesService: ElectivesService,
  ) { }

  public getDownload(lang: string) {
    return this.download[lang || 'en']
  }

  public getCredits(lang: string) {
    return {
      label: this.credit[lang],
      data: this.appliedService.getCredits() + this.compEngService.getCredits() + this.theoreticalService.getCredits() + this.mathService.getCredits() + this.otherService.getCredits() + this.electivesService.getCredits()
    }
  }

  public getAverage(lang: string) {
    return {
      label: this.overall[lang || 'en'],
      data: ((this.appliedCS + this.compEng + this.theoreticalCS + this.math + this.other + this.electives) / 6).toFixed(1)
    }
  }

  public getHeaders(lang: string): string[] {
    return this.headers[lang || 'en']
  }

  public getLabel(lang: string, moduleName: string) {
    switch(moduleName) {
      case 'appliedCS': return this.appliedService.getLabel(lang)
      case 'computerEngineering': return this.compEngService.getLabel(lang)
      case 'theoreticalCS': return this.theoreticalService.getLabel(lang)
      case 'math': return this.mathService.getLabel(lang)
      case 'other': return this.otherService.getLabel(lang)
      case 'electives': return this.electivesService.getLabel(lang)
      default: return 'Undefined'
    }
  }

  public getData(lang: string, moduleName: string) {
    if (!moduleName) {
      return
    }
    let data, average
    switch(moduleName) {
      case 'appliedCS': {
        average = this.appliedCS
        data = this.appliedService.getData(lang).slice()
        break
      }
      case 'computerEngineering': {
        average = this.compEng
        data = this.compEngService.getData(lang).slice()
        break
      }
      case 'theoreticalCS': {
        average = this.theoreticalCS
        data = this.theoreticalService.getData(lang).slice()
        break
      }
      case 'math': {
        average = this.math
        data = this.mathService.getData(lang).slice()
        break
      }
      case 'other': {
        average = this.other
        data = this.otherService.getData(lang).slice()
        break
      }
      case 'electives': {
        average = this.electives
        data = this.electivesService.getData(lang).slice()
        break
      }
    }
    data = data!.map(s => {
      return {
        course: s.course,
        semester: s.semester,
        grade: typeof s.grade === 'number' ? s.grade.toFixed(1) : s.grade,
        credits: s.credits
      }
    })
    data.push({
      course: this.average[lang || 'en'],
      semester: undefined,
      grade: average!.toFixed(1),
      credits: undefined
    })
    return data
  }

}
