import { Component, ViewEncapsulation } from '@angular/core';

@Component({
    selector     : 'activities',
    templateUrl  : './activities.component.html',
    encapsulation: ViewEncapsulation.None
})
export class ActivitiesComponent
{
    matMenuTriggerFor = "listCard04Menu"
    /**
     * Constructor
     */
    constructor()
    {
    }
}
