import { Component, OnInit } from '@angular/core';
import { CareerService } from './career.service';

@Component({
    selector: 'app-admin-career',
    templateUrl: './career.component.html',
    styleUrls: ['./career.component.scss'],
})
export class AdminCareerComponent implements OnInit {
    constructor(private service: CareerService) {}

    ngOnInit() {
        this.service.init();
    }
}
