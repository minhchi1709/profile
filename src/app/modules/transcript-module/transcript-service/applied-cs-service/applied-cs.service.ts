import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AppliedCSService {

  private label: Record<string, string> = {
    en: 'Applied Computer Science',
    de: 'Praktische Informatik',
    vi: 'Khoa học máy tính ứng dụng'
  }

  private data: Record<string, {course: string, semester: string, grade: any, credits: number}[]> = {
    en: [
      {
        course: 'Programming Concepts',
        semester: '22W',
        grade: 1.7,
        credits: 8
      },
      {
        course: 'Data Structures and Algorithms',
        semester: '23S',
        grade: 2.3,
        credits: 7
      },
      {
        course: 'Software Engineering',
        semester: '23W',
        grade: 2.0,
        credits: 6
      },
      {
        course: 'Databases and Information Systems',
        semester: '24S',
        grade: 2.3,
        credits: 6
      },
      {
        course: 'Elements of Machine Learning and Data Science',
        semester: '23W',
        grade: 2.7,
        credits: 6
      }
    ],
    de: [
      {
        course: 'Programmierung',
        semester: '22W',
        grade: 1.7,
        credits: 8
      },
      {
        course: 'Datenstrukturen und Algorithmen',
        semester: '23S',
        grade: 2.3,
        credits: 7
      },
      {
        course: 'Softwaretechnik',
        semester: '23W',
        grade: 2.0,
        credits: 6
      },
      {
        course: 'Databanken und Informationssysteme',
        semester: '24S',
        grade: 2.3,
        credits: 6
      },
      {
        course: 'Elements of Machine Learning and Data Science',
        semester: '23W',
        grade: 2.7,
        credits: 6
      }
    ],
    vi: [
      {
        course: 'Nhập môn lập trình',
        semester: '22W',
        grade: 1.7,
        credits: 8
      },
      {
        course: 'Cấu trúc dữ liệu và thuật toán',
        semester: '23S',
        grade: 2.3,
        credits: 7
      },
      {
        course: 'Kỹ thuật phần mềm',
        semester: '23W',
        grade: 2.0,
        credits: 6
      },
      {
        course: 'Cơ sở dữ liệu và hệ thống thông tin',
        semester: '24S',
        grade: 2.3,
        credits: 6
      },
      {
        course: 'Học máy và Khoa học dữ liệu',
        semester: '23W',
        grade: 2.7,
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
