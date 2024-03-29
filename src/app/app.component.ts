import { Component, computed, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatIcon, MatIconModule } from '@angular/material/icon';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatSidenavModule } from '@angular/material/sidenav';
import { CustomSidenavComponent } from "./components/custom-sidenav/custom-sidenav.component";
import { CommonModule } from '@angular/common';
import { MatNavList } from '@angular/material/list';
import { HttpClientModule } from '@angular/common/http';

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.scss',
    imports: [
        RouterOutlet,
        CommonModule,
        MatToolbarModule,
        MatButtonModule,
        MatIconModule,
        MatSlideToggleModule,
        MatSidenavModule,
        CustomSidenavComponent,
        MatNavList,
        HttpClientModule
    ]
})
export class AppComponent {
  title = 'angular-dashboard';

  collapsed = signal(false);

  sidenavwidth = computed( () => this.collapsed() ? '65px' : '250px');
}
