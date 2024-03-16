import { Component, OnInit } from '@angular/core';
import { WidgetTogglesComponent } from "../../components/widget-toggles/widget-toggles.component";
import { MatTabsModule } from '@angular/material/tabs';
import { MatGridListModule } from '@angular/material/grid-list';
import { DeviceService } from '../../services/device.service';
import { DeviceInterface } from '../../interfaces/device-interface';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'app-dashboard',
    standalone: true,
    templateUrl: './dashboard.component.html',
    styleUrl: './dashboard.component.scss',
    imports: [WidgetTogglesComponent,
        MatTabsModule,
        MatGridListModule,
        CommonModule]
})
export class DashboardComponent implements OnInit {

    devices: DeviceInterface[] = [];

    constructor(private deviceService: DeviceService) {

    }
    ngOnInit(): void {
        this.getAllDevices();
    }

    getAllDevices() {
        this.deviceService.getAllDevices().subscribe({
            next: (res) => {
                this.devices = res;
                console.log(this.devices);
            },
            error: console.log,
        })
    }

}