import {Component, HostListener} from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {NavigationComponent} from "./modules/navigation-module/navigation/navigation.component";
import { MatToolbarModule} from "@angular/material/toolbar";
import {MatButtonModule, MatIconButton} from "@angular/material/button";
import { MatIconModule} from "@angular/material/icon";
import { MatSidenavModule} from "@angular/material/sidenav";
import {NgIf} from "@angular/common";
import {DeviceService} from "./services/device-service/device.service";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    NavigationComponent,
    MatIconModule,
    MatToolbarModule,
    MatSidenavModule,
    MatIconButton,
    MatButtonModule,
    NgIf
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent{
  title = 'profile';
  isMobile: boolean = true

  constructor(
    private deviceService: DeviceService,
  ) {
    this.updateLayout();
  }

  @HostListener('window:resize', [])
  onResize(): void {
    this.updateLayout();
  }

  private updateLayout(): void {
    this.isMobile = this.deviceService.isMobile();
  }
}
