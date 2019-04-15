import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router/src/utils/preactivation';
import { EventService } from '../shared/event.service';
import { Router, ActivatedRouteSnapshot } from '@angular/router';

@Injectable()
export class EventRouterActivator implements CanActivate {
    constructor(
        private eventService: EventService,
        private router: Router
    ) { }

    canActivate(route: ActivatedRouteSnapshot) {
        const eventExist = !!this.eventService.getEvent(+route.params['id']);

        if (!eventExist) {
            this.router.navigate(['/404']);
        }
        return eventExist;
    }
}
