import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class OtherAchievementsService {

  private label: Record<string, string> = {
    en: 'Other Achievements',
    de: 'Sonstige Leistungen',
    vi: 'Thành tựu khác'
  }

  private data: Record<string, {course: string, semester: string, grade: any, credits: number}[]> = {
    en: [
      {
        course: 'Computer Science Mentoring',
        semester: '22W',
        grade: 'B',
        credits: 1
      },
      {
        course: 'Software Project Lab: A Race between Model-based and Handwritten Development of Web-Applications',
        semester: '24S',
        grade: 2.3,
        credits: 6
      }
    ],
    de: [
      {
        course: 'Mentoring Informatik',
        semester: '22W',
        grade: 'B',
        credits: 1
      },
      {
        course: 'Software-Projektpraktikum: A Race between Model-based and Handwritten Development of Web-Applications',
        semester: '24S',
        grade: 2.3,
        credits: 6
      }
    ],
    vi: [
      {
        course: 'Hướng dẫn khoa học máy tính',
        semester: '22W',
        grade: 'B',
        credits: 1
      },
      {
        course: 'Phòng thí nghiệm dự án phần mềm: Cuộc đua giữa phát triển ứng dụng web dựa trên mô hình và viết tay',
        semester: '24S',
        grade: 2.3,
        credits: 6
      }
    ],
  }

  public getCredits() {
    return this.data['en']
      .filter(s => typeof s.grade === 'number')
      .map(s => s.credits)
      .reduce((total, credit) => total + credit, 0);
  }

  public getLabel(lang: string): string {
    return this.label[lang || 'en']
  }

  public getData(lang: string): {course: string, semester?: string, grade: any, credits?: number}[] {
    return this.data[lang || 'en']
  }

  public getAverage() {
    const grades = this.data['en'].map(s => s.grade).filter(g => typeof g === 'number');
    return (grades.reduce((total, grade) => total + grade, 0) / grades.length);
  }
}
