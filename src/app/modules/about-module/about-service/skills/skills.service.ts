import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SkillsService {
  private label: Record<string, string> = {
    en: 'Technical Skills',
    de: 'Technische Fähigkeiten',
    vi: 'Chuyên môn'
  }

  private data: Record<string, any> = {
    en: [
      {
        label: 'Backend Development',
        data: [
          'Java: Spring Boot',
          'Javascript: NodeJS, Express',
          'Python: Django, Flask, FastAPI'
        ]
      },
      {
        label: 'Frontend Development',
        data: [
          'HTML',
          'CSS',
          'Bootstrap',
          'Angular'
        ]
      },
      {
        label: 'Miscellaneous',
        data: [
          'Machine Learning',
          'Data Science'
        ]
      },
      {
        label: 'Soft Skills',
        data: [
          'Team-Working',
          'Problem-Solving',
          'Adaptability',
          'Time Management',
          'Leadership',
          'Emotional Intelligence',
          'Conflict Resolution'
        ]
      }
    ],
    de: [
      {
        label: 'Backend-Entwicklung',
        data: [
          'Java: Spring Boot',
          'Javascript: NodeJS, Express',
          'Python: Django, Flask, FastAPI'
        ]
      },
      {
        label: 'Frontend-Entwicklung',
        data: [
          'HTML',
          'CSS',
          'Bootstrap',
          'Angular'
        ]
      },
      {
        label: 'Sonstiges',
        data: [
          'Machine Learning',
          'Data Science'
        ]
      },
      {
        label: 'Soziale Kompetenzen',
        data: [
          'Teamarbeit',
          'Problemlösung',
          'Anpassungsfähigkeit',
          'Zeitmanagement',
          'Führung',
          'Emotionale Intelligenz',
          'Konfliktlösung'
        ]
      }
    ],
    vi: [
      {
        label: 'Phát triển Backend',
        data: [
          'Java: Spring Boot',
          'Javascript: NodeJS, Express',
          'Python: Django, Flask, FastAPI'
        ]
      },
      {
        label: 'Phát triển Frontend',
        data: [
          'HTML',
          'CSS',
          'Bootstrap',
          'Angular'
        ]
      },
      {
        label: 'Khác',
        data: [
          'Machine Learning (Học máy)',
          'Data Science (Khoa học dữ liệu)'
        ]
      },
      {
        label: 'Kỹ năng mềm',
        data: [
          'Làm việc nhóm',
          'Giải quyết vấn đề',
          'Khả năng thích ứng',
          'Quản lý thời gian',
          'Lãnh đạo',
          'Trí tuệ cảm xúc',
          'Giải quyết xung đột'
        ]
      }
    ]
  }

  public getLabel(lang: string): string {
    return this.label[lang] || this.label['en']
  }

  public getData(lang: string): string {
    return this.data[lang] || this.data['en']
  }
}
