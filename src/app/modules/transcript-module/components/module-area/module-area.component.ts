import {Component, Input, OnInit} from '@angular/core';
import {MatTableModule} from "@angular/material/table";
import {LanguageService} from "../../../../services/language-service/language.service";
import {TranscriptService} from "../../transcript-service/transcript.service";

@Component({
  selector: 'app-module-area',
  standalone: true,
  imports: [
    MatTableModule,
  ],
  templateUrl: './module-area.component.html',
  styleUrl: './module-area.component.css'
})
export class ModuleAreaComponent implements OnInit {

  lang !: string
  data !: any
  displayedColumns: string[] = ['course', 'semester', 'credits', 'grade']
  headers!: string[]

  @Input() moduleName !: string

  constructor(
    private langService: LanguageService,
    private transcriptService: TranscriptService
  ) {
    this.lang = this.langService.getLang
    this.langService.lang$.subscribe(lang => {
      this.lang = lang
      this.ngOnInit()
    })
  }

  ngOnInit(): void {
    this.headers = this.transcriptService.getHeaders(this.lang)
    this.data = this.transcriptService.getData(this.lang, this.moduleName)
  }
}
