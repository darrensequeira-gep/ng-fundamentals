import { Component } from '@angular/core';

@Component({
    selector: 'app-events-lists',
    template: `
        <div>
            <h1>Upcoming Angular Events</h1>
            <hr>
            <app-event-thumbnail [event]="event1"></app-event-thumbnail>
        </div>
    `
})
export class EventListComponent {
    event1 = {
        id: 1,
        name: 'Angular Fundamentals',
        date: '12/04/19',
        time: '01:30 am',
        price: 599.99,
        imageurl: 'assets/images/angularconnect-shield.png',
        location: {
            address: 'Carter Road',
            city: 'Mumbai',
            country: 'India'
        }
    };
}
