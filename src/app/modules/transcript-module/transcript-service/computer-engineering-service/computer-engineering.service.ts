import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ComputerEngineeringService {
  private label: Record<string, string> = {
    en: 'Computer Engineering',
    de: 'Technische Informatik',
    vi: 'Kỹ thuật máy tính'
  }

  private data: Record<string, {course: string, semester: string, grade: any, credits: number}[]> = {
    en: [
      {
        course: 'Introduction to Computer Engineering',
        semester: '22W',
        grade: 1.3,
        credits: 6
      },
      {
        course: 'Operating Systems and System Software',
        semester: '23S',
        grade: 4,
        credits: 7
      },
      {
        course: 'Data Communication',
        semester: '23W',
        grade: 2.7,
        credits: 6
      },
      {
        course: 'IT-Security',
        semester: '23W',
        grade: 3.3,
        credits: 4
      }
    ],
    de: [
      {
        course: 'Einführung in die Technische Informatik',
        semester: '22W',
        grade: 1.3,
        credits: 6
      },
      {
        course: 'Betriebssysteme und Systemsoftware',
        semester: '23S',
        grade: 4,
        credits: 7
      },
      {
        course: 'Datenkommunikation',
        semester: '23W',
        grade: 2.7,
        credits: 6
      },
      {
        course: 'IT-Sicherheit',
        semester: '23W',
        grade: 3.3,
        credits: 4
      }
    ],
    vi: [
      {
        course: 'Nhập môn Kỹ thuật máy tính',
        semester: '22W',
        grade: 1.3,
        credits: 6
      },
      {
        course: 'Hệ điều hành và phần mềm hệ thống',
        semester: '23S',
        grade: 4,
        credits: 7
      },
      {
        course: 'Truyền thông dữ liệu',
        semester: '23W',
        grade: 2.7,
        credits: 6
      },
      {
        course: 'Bảo mật công nghệ thông tin',
        semester: '23W',
        grade: 3.3,
        credits: 4
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
