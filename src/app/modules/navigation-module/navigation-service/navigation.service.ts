import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NavigationService {

  about: Record<string, string> = {
    en: 'About me',
    de: 'Über mich',
    vi: 'Về tui'
  }

  projects: Record<string, string> = {
    en: 'Projects',
    de: 'Projekte',
    vi: 'Dự án'
  }

  transcript: Record<string, string>= {
    en: 'Transcript of grades',
    de: 'Notenspiegel',
    vi: 'Bảng điểm'
  }

  public getAbout(lang: string): string { {
    return this.about[lang || 'en'];
  }}

  public getProjects(lang: string): string {
    return this.projects[lang || 'en'];
  }

  public getTranscript(lang: string): string {
    return this.transcript[lang || 'en'];
  }
}
