import { Routes } from '@angular/router';
import { CalendarComponent } from './pages/calendar/calendar.component';
import { BuildComponent } from './pages/build/build.component';
import { ContentComponent } from './pages/content/content.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';

export const routes: Routes = [

    {
        path: '',
        pathMatch: 'full',
        redirectTo: 'dashboard'
    },
    {
        path: 'dashboard',
        component: DashboardComponent
    },
    {
        path: 'content',
        component: ContentComponent
    },
    {
        path: 'build',
        component: BuildComponent
    },
    {
        path: 'calendar',
        component: CalendarComponent
    },
    
];
