import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class InterestService {

  private label: Record<string, string> = {
    en: 'Interests',
    de: 'Interesse',
    vi: 'Sở thích'
  }

  private data: Record<string, any> = {
    en: [
      'Playing Badminton',
      'Fitness Training',
      'Playing Games',
      'Travelling',
      'Coding',
      'Learning new Technologies'
    ],
    de: [
      'Badminton Spielen',
      'Fitness Training',
      'Games Spielen',
      'Reisen',
      'Programmieren',
      'Neue Technologien Lernen'
    ],
    vi: [
      'Chơi cầu lông',
      'Tập thể dục, gym',
      'Chơi game',
      'Du lịch',
      'Lập trình',
      'Học các công nghệ mới'
    ]
  }

  public getLabel(lang: string) {
    return this.label[lang] || this.label['en']
  }

  public getData(lang: string) {
    return this.data[lang] || this.data['en']
  }
}
