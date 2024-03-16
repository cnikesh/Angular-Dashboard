import { Component, Input } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import {MatButtonModule} from '@angular/material/button';
import {MatDividerModule} from '@angular/material/divider';
import { MatIconModule } from '@angular/material/icon';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import { CommonModule } from '@angular/common';
import { DeviceInterface } from '../../interfaces/device-interface';
@Component({
  selector: 'app-widget-toggles',
  standalone: true,
  imports: [MatCardModule,
    MatDividerModule,
    MatButtonModule,
    MatProgressBarModule,
    MatIconModule,
    MatSlideToggleModule,
    CommonModule
  ],
  templateUrl: './widget-toggles.component.html',
  styleUrl: './widget-toggles.component.scss'
})
export class WidgetTogglesComponent {

  @Input() device: DeviceInterface = {
    deviceName: "nik",
    deviceStatus:"",
    deviceType:"",
    id:0,
    group:0,
    description:""
  };

}
