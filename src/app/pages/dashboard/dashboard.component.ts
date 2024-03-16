import { Component, OnInit, signal } from '@angular/core';
import { WidgetTogglesComponent } from "../../components/widget-toggles/widget-toggles.component";
import { MatTabsModule } from '@angular/material/tabs';
import { MatGridListModule } from '@angular/material/grid-list';
import { DeviceService } from '../../services/device.service';
import { DeviceInterface } from '../../interfaces/device-interface';
import { CommonModule } from '@angular/common';
import { DevicesByGroupsInterface } from '../../interfaces/devices-by-groups-interface';



@Component({
    selector: 'app-dashboard',
    standalone: true,
    templateUrl: './dashboard.component.html',
    styleUrl: './dashboard.component.scss',
    imports: [
        WidgetTogglesComponent,
        MatTabsModule,
        MatGridListModule,
        CommonModule
    ]
})

export class DashboardComponent implements OnInit {

    devicesByGroup: DevicesByGroupsInterface[] = [];
    devices: DeviceInterface[] = [];
    selectedTabIndex = signal(0);
    prefetchTabs = signal(true);
    deviceTypes:any[] = [];

    

    constructor(private deviceService: DeviceService) {

    }
    ngOnInit(): void {
        this.getDevicesByGroup(1);
    }

    // getAllDevices() {
    //     this.deviceService.getAllDevices().subscribe({
    //         next: (res) => {
    //             this.devices = res;
    //             // console.log(this.devices);
    //         },
    //         error: console.log,
    //     })
    // }

    getDevicesByGroup(groupId: number){
        this.deviceService.getDevicesByGroup(groupId).subscribe({
            next: (res) => {
                this.deviceTypes = res;
            },
            error: console.log,
        })
    }

    onTabChange(event: number){
        this.selectedTabIndex.set(event)
        this.getDevicesByGroup(event+1);
    }

}