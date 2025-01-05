import {Component, HostListener} from '@angular/core';
import {DeviceService} from "../../services/device-service/device.service";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  isMobile: boolean = false;
  backgroundSrc!: string;

  constructor(
    private deviceService: DeviceService,
  ) {
    this.updateLayout();
    this.backgroundSrc = `assets/background-${this.isMobile ? 'mobile' : 'pc'}.jpg`;
  }

  @HostListener('window:resize', [])
  onResize(): void {
    this.updateLayout();
  }

  private updateLayout(): void {
    this.isMobile = this.deviceService.isMobile();
  }
}
