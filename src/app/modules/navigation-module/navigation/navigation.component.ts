import {AfterViewInit, Component, ElementRef, OnInit, QueryList, ViewChildren} from '@angular/core';
import {RouterLink, RouterLinkActive} from "@angular/router";
import {MatIconModule} from "@angular/material/icon";
import {MatButtonModule} from "@angular/material/button";
import {NavigationService} from "../navigation-service/navigation.service";
import {LanguageService} from "../../../services/language-service/language.service";
import {MatTooltipModule} from "@angular/material/tooltip";

@Component({
  selector: 'app-navigation',
  standalone: true,
  imports: [
    MatTooltipModule,
    RouterLink,
    RouterLinkActive,
    MatIconModule,
    MatButtonModule,
  ],
  templateUrl: './navigation.component.html',
  styleUrl: './navigation.component.css'
})
export class NavigationComponent implements OnInit, AfterViewInit {

  about!: string
  projects!: string
  transcript!: string
  lang!: string

  @ViewChildren('lang') langItems!: QueryList<ElementRef>

  constructor(
    private navigationService: NavigationService,
    private langService: LanguageService
  ) {
    this.lang = this.langService.getLang

    this.langService.lang$.subscribe(lang => {
      this.lang = lang
      this.ngOnInit()
    })
  }

  ngAfterViewInit(): void {
    this.setLang(this.lang)
  }

  ngOnInit(): void {
    this.about = this.navigationService.getAbout(this.lang)
    this.projects = this.navigationService.getProjects(this.lang)
    this.transcript = this.navigationService.getTranscript(this.lang)
  }

  setLang(lang: string) {
    this.langService.setLang = lang
    this.langItems.forEach((button) => {
      const isActive = button.nativeElement.id === lang;
      button.nativeElement.classList.toggle('active-lang', isActive);
    })
  }
}
