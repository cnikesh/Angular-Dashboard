import { Component } from '@angular/core';
import { WidgetTogglesComponent } from "../../components/widget-toggles/widget-toggles.component";

@Component({
    selector: 'app-dashboard',
    standalone: true,
    templateUrl: './dashboard.component.html',
    styleUrl: './dashboard.component.scss',
    imports: [WidgetTogglesComponent]
})
export class DashboardComponent {

}