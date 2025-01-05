import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ElectivesService {

  private label: Record<string, string> = {
    en: 'Electives',
    de: 'Wahlpflichtbereich',
    vi: 'Môn tự chọn'
  }

  private data: Record<string, {course: string, semester: string, grade: any, credits: number}[]> = {
    en: [
      {
        course: 'Artificial Intelligence',
        semester: '23W',
        grade: 2,
        credits: 6
      },
      {
        course: 'Embedded Systems',
        semester: '24S',
        grade: 2.3,
        credits: 6
      },
      {
        course: 'Foundations of Functional Programming',
        semester: '24S',
        grade: 1.7,
        credits: 6
      },
      {
        course: 'Model-based Software Development',
        semester: '24W',
        grade: 'Currently studying',
        credits: 6
      },
      {
        course: 'Implementation of Databases',
        semester: '24W',
        grade: 'Currently studying',
        credits: 6
      },
      {
        course: 'Introduction to Web Development',
        semester: '24W',
        grade: 'Currently studying',
        credits: 6
      }
    ],
    de: [
      {
        course: 'Künstliche Intelligenz',
        semester: '23W',
        grade: 2,
        credits: 6
      },
      {
        course: 'Eingebettete Systeme',
        semester: '24S',
        grade: 2.3,
        credits: 6
      },
      {
        course: 'Foundations of Functional Programming',
        semester: '24S',
        grade: 1.7,
        credits: 6
      },
      {
        course: 'Model-based Software Development',
        semester: '24W',
        grade: 'Aktuell lernen',
        credits: 6
      },
      {
        course: 'Implementation of Databases',
        semester: '24W',
        grade: 'Aktuell lernen',
        credits: 6
      },
      {
        course: 'Einführung in Web Technologien',
        semester: '24W',
        grade: 'Aktuell lernen',
        credits: 6
      }
    ],
    vi: [
      {
        course: 'Trí tuệ nhân tạo',
        semester: '23W',
        grade: 2,
        credits: 6
      },
      {
        course: 'Hệ thống nhúng',
        semester: '24S',
        grade: 2.3,
        credits: 6
      },
      {
        course: 'Nền tảng lập trình chức năng',
        semester: '24S',
        grade: 1.7,
        credits: 6
      },
      {
        course: 'Phát triển phần mềm dựa trên mô hình',
        semester: '24W',
        grade: 'Đang học',
        credits: 6
      },
      {
        course: 'Triển khai cơ sở dữ liệu',
        semester: '24W',
        grade: 'Đang học',
        credits: 6
      },
      {
        course: 'Giới thiệu về Phát triển Web',
        semester: '24W',
        grade: 'Đang học',
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
