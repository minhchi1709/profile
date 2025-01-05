import {Injectable} from '@angular/core';
import {BehaviorSubject} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class LanguageService {
  private langSource = new BehaviorSubject<string>(this.getLang);
  lang$ = this.langSource.asObservable()

  public get getLang(): string {
    const lang = localStorage.getItem('lang')
    if (lang) {
      return lang
    } else {
      localStorage.setItem('lang', 'en')
      return 'en'
    }
  }

  public set setLang(lang: string) {
    localStorage.setItem('lang', lang)
    this.langSource.next(lang)
  }
}
