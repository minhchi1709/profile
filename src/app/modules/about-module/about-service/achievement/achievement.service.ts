import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AchievementService {

  private label: Record<string, string> = {
    en: 'Achievements',
    de: 'Erfolge',
    vi: 'Thành tựu'
  }

  private data: Record<string, any> = {
    en: [
      {
        label: 'First prize at city-level Math Competition for the gifted',
        data: '03/2021'
      },
      {
        label: 'The one and only 1.0 at HM4MINT Math Test at RWTH Aachen',
        data: '04/2022'
      }
    ],
    de: [
      {
        label: 'Erster Preis beim städtischen Mathematik-Wettbewerb für Hochbegabte',
        data: '03/2021'
      },
      {
        label: 'Die einzig wahre 1,0 beim HM4MINT Mathetest der RWTH Aachen',
        data: '04/2022'
      }
    ],
    vi: [
      {
        label: 'Giải nhất cuộc thi Toán học sinh giỏi cấp thành phố',
        data: '03/2021'
      },
      {
        label: 'Điểm 1.0 duy nhất (tối đa) tại bài kiểm tra Toán HM4MINT tại RWTH Aachen',
        data: '04/2022'
      }
    ]
  }

  public getLabel(lang: string) {
    return this.label[lang] || this.label['en']
  }

  public getData(lang: string) {
    return this.data[lang] || this.data['en']
  }
}
