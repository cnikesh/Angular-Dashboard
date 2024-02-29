import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import {MatButtonModule} from '@angular/material/button';
import {MatDividerModule} from '@angular/material/divider';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-widget-toggles',
  standalone: true,
  imports: [MatCardModule,
    MatDividerModule,
    MatButtonModule,
    MatProgressBarModule,
    MatIconModule
  ],
  templateUrl: './widget-toggles.component.html',
  styleUrl: './widget-toggles.component.scss'
})
export class WidgetTogglesComponent {

}
