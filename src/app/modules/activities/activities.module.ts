import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { Route, RouterModule } from '@angular/router';
import { FuseCardModule } from '@fuse/components/card';
import { ActivitiesComponent } from 'app/modules/activities/activities.component';

const exampleRoutes: Route[] = [
    {
        path     : '',
        component: ActivitiesComponent
    }
];

@NgModule({
    declarations: [
        ActivitiesComponent
    ],
    imports     : [
        RouterModule.forChild(exampleRoutes),
        FuseCardModule,
        MatIconModule,
        MatButtonModule
    ]
})
export class ActivitiesModule
{
}
