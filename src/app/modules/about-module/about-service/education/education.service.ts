import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EducationService {
  private label: Record<string, string> = {
    en: 'Education',
    de: 'Ausbildung',
    vi: 'Học vấn'
  }
  private description: Record<string, string> = {
    en: 'Pursuing a Computer Science Degree in 5. Semester at RWTH Aachen',
    de: 'Informatik-Studium im 5. Semester an der RWTH Aachen',
    vi: 'Theo học bằng khoa học máy tính học kỳ thứ 5 tại RWTH Aachen'
  }

  private data: Record<string, any> = {
    en: [
      {
        label: 'Le Hong Phong High School for the gifted',
        data: '08/2018 - 07/2021'
      },
      {
        label: 'FH Aachen Institute',
        data: '10/2021 - 07/2022'
      },
      {
        label: 'RWTH Aachen',
        data: '10/2022 - now'
      },
    ],
    de: [
      {
        label: 'Le Hong Phong High School für Hochbegabte',
        data: '08/2018 - 07/2021'
      },
      {
        label: 'FH Aachen Institut',
        data: '10/2021 - 07/2022'
      },
      {
        label: 'RWTH Aachen',
        data: '10/2022 - jetzt'
      },
    ],
    vi: [
      {
        label: 'Trường THPT chuyên Lê Hồng Phong',
        data: '08/2018 - 07/2021'
      },
      {
        label: 'Viện FH Aachen',
        data: '10/2021 - 07/2022'
      },
      {
        label: 'Trường đại học RWTH Aachen',
        data: '10/2022 - Bây giờ'
      },
    ]
  }

  public getLabel(lang: string) {
    return this.label[lang] || this.label['en']
  }

  public getDescription(lang: string) {
    return this.description[lang] || this.description['en']
  }

  public getData(lang: string) {
    return this.data[lang] || this.data['en']
  }
}
