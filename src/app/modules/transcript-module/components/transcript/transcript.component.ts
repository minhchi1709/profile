import {Component, OnDestroy, OnInit} from '@angular/core';
import {MatTabsModule} from "@angular/material/tabs";
import {LanguageService} from "../../../../services/language-service/language.service";
import {TranscriptService} from "../../transcript-service/transcript.service";
import {MatTableModule} from "@angular/material/table";
import {ModuleAreaComponent} from "../module-area/module-area.component";

@Component({
  selector: 'app-transcript',
  standalone: true,
  imports: [
    MatTabsModule,
    MatTableModule,
    ModuleAreaComponent
  ],
  templateUrl: './transcript.component.html',
  styleUrl: './transcript.component.css'
})
export class TranscriptComponent implements OnInit, OnDestroy {

  lang!: string
  appliedCS!: any
  compEng!: any
  theoreticalCS!: any
  math!: any
  other!: any
  electives!: any
  average!: any
  credit!: any
  download!: string
  selectedTabIndex: number = 0

  constructor(
    private langService: LanguageService,
    private transcriptService: TranscriptService,
  ) {
    this.lang = this.langService.getLang
    this.langService.lang$.subscribe(lang => {
      this.lang = lang
      this.ngOnInit()
    })
  }

  getSavedTabIndex() {
    const savedIndex = localStorage.getItem('selectedTabIndex');
    if (savedIndex !== null) {
      this.selectedTabIndex = parseInt(savedIndex, 10);
    }
  }

  ngOnDestroy() {
    localStorage.setItem('selectedTabIndex', this.selectedTabIndex.toString());
  }

  ngOnInit(): void {
    this.average = this.transcriptService.getAverage(this.lang)
    this.credit = this.transcriptService.getCredits(this.lang)
    this.download = this.transcriptService.getDownload(this.lang)
    this.getSavedTabIndex()
    this.appliedCS = {
      label: this.transcriptService.getLabel(this.lang, 'appliedCS'),
      name: 'appliedCS'
    }
    this.compEng = {
      label: this.transcriptService.getLabel(this.lang, 'computerEngineering'),
      name: 'computerEngineering'
    }
    this.theoreticalCS = {
      label: this.transcriptService.getLabel(this.lang, 'theoreticalCS'),
      name: 'theoreticalCS'
    }
    this.math = {
      label: this.transcriptService.getLabel(this.lang, 'math'),
      name: 'math'
    }
    this.other = {
      label: this.transcriptService.getLabel(this.lang, 'other'),
      name: 'other'
    }
    this.electives = {
      label: this.transcriptService.getLabel(this.lang, 'electives'),
      name: 'electives'
    }
  }
}
