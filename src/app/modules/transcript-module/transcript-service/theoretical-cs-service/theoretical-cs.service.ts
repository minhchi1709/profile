import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TheoreticalCSService {

  private label: Record<string, string> = {
    en: 'Theoretical Computer Science',
    de: 'Theoretische Informatik',
    vi: 'Khoa học máy tính lý thuyết'
  }

  private data: Record<string, {course: string, semester: string, grade: any, credits: number}[]> = {
    en: [
      {
        course: 'Formal Systems, Automata, Processes',
        semester: '23S',
        grade: 2,
        credits: 6
      },
      {
        course: 'Computability and Complexity',
        semester: '23W',
        grade: 1,
        credits: 7
      },
      {
        course: 'Mathematical Logic I',
        semester: '23S',
        grade: 3.3,
        credits: 7
      }
    ],
    de: [
      {
        course: 'Formale Systeme, Automaten, Prozesse',
        semester: '23S',
        grade: 2,
        credits: 6
      },
      {
        course: ' Berechenbarkeit und Komplexität',
        semester: '23W',
        grade: 1,
        credits: 7
      },
      {
        course: 'Mathematische Logik I',
        semester: '23S',
        grade: 3.3,
        credits: 7
      }
    ],
    vi: [
      {
        course: 'Hệ thống chính thức, tự động hóa, quy trình',
        semester: '23S',
        grade: 2,
        credits: 6
      },
      {
        course: 'Khả năng tính toán và độ phức tạp',
        semester: '23W',
        grade: 1,
        credits: 7
      },
      {
        course: 'Logic Toán học I',
        semester: '23S',
        grade: 3.3,
        credits: 7
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

  public getData(lang: string): {course: string, semester?: string, grade: any, credits?:number}[] {
    return this.data[lang || 'en']
  }

  public getAverage() {
    const grades = this.data['en'].map(s => s.grade).filter(g => typeof g === 'number');
    return (grades.reduce((total, grade) => total + grade, 0) / grades.length);
  }
}
