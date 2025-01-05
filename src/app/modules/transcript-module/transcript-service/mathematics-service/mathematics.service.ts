import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MathematicsService {

  private label: Record<string, string> = {
    en: 'Mathematics',
    de: 'Mathematik',
    vi: 'Toán'
  }

  private data: Record<string, {course: string, semester: string, grade: any, credits: number}[]> = {
    en: [
      {
        course: 'Discrete Structures',
        semester: '22W',
        grade: 1,
        credits: 6
      },
      {
        course: 'Calculus for Computer Science',
        semester: '22W',
        grade: 2.3,
        credits: 8
      },
      {
        course: 'Linear Algebra',
        semester: '23S',
        grade: 2,
        credits: 6
      },
      {
        course: 'Introduction to Applied Stochastics',
        semester: '23S',
        grade: 1,
        credits: 6
      }
    ],
    de: [
      {
        course: 'Diskrete Strukturen',
        semester: '22W',
        grade: 1,
        credits: 6
      },
      {
        course: 'Analysis für Informatik',
        semester: '22W',
        grade: 2.3,
        credits: 8
      },
      {
        course: 'Lineare Algebra',
        semester: '23S',
        grade: 2,
        credits: 6
      },
      {
        course: 'Einführung in die angewandte Stochastik',
        semester: '23S',
        grade: 1,
        credits: 6
      }
    ],
    vi: [
      {
        course: 'Cấu trúc rời rạc',
        semester: '22W',
        grade: 1,
        credits: 6
      },
      {
        course: 'Giải tích cho Khoa học máy tính',
        semester: '22W',
        grade: 2.3,
        credits: 8
      },
      {
        course: 'Đại số tuyến tính',
        semester: '23S',
        grade: 2,
        credits: 6
      },
      {
        course: 'Giới thiệu về Stochastics ứng dụng',
        semester: '23S',
        grade: 1,
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
