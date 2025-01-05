import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DeviceService {

  readonly mobileWidth: number = 800

  public isMobile(): boolean {
    return window.innerWidth <= this.mobileWidth
  }
}
