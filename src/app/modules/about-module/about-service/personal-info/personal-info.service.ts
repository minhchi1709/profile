import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PersonalInfoService {
  private label: Record<string, string> = {
    en: 'Personal Information',
    de: 'Persönliche Information',
    vi: 'Thông tin cá nhân'
  }

  private data: Record<string, any> = {
    en: [
      {
        label: 'Firstname',
        data: 'Minh Chi'
      },
      {
        label: 'Lastname',
        data: 'Diep'
      },
      {
        label: 'Nationality',
        data: 'Vietnamese'
      },
      {
        label: 'Birthday',
        data: '17-09-2003'
      },
      {
        label: 'Birthplace',
        data: 'Ho Chi Minh City, Vietnam'
      }
    ],
    de: [
      {
        label: 'Vorname',
        data: 'Minh Chi'
      },
      {
        label: 'Nachname',
        data: 'Diep'
      },
      {
        label: 'Staatsangehörigkeit',
        data: 'Vietnamesisch'
      },
      {
        label: 'Geburtstag',
        data: '17-09-2003'
      },
      {
        label: 'Geburtsort',
        data: 'Ho Chi Minh City, Vietnam'
      }
    ],
    vi: [
      {
        label: 'Tên',
        data: 'Minh Chí'
      },
      {
        label: 'Họ',
        data: 'Diệp'
      },
      {
        label: 'Quốc tịch',
        data: 'Việt Nam'
      },
      {
        label: 'Sinh nhật',
        data: '17-09-2003'
      },
      {
        label: 'Nơi sinh',
        data: 'Thành phố Hồ Chí Minh, Việt Nam'
      }
    ]
  }

  public getLabel(lang: string): string {
    return this.label[lang] || this.label['en'];
  }

  public getData(lang: string): string {
    return this.data[lang] || this.data['en']
  }
}
