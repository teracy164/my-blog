import { Component, OnInit } from '@angular/core';
import { AdminService } from './admin.service';

@Component({
    selector: 'app-admin',
    templateUrl: './admin.component.html',
})
export class AdminComponent implements OnInit {
    isLoggedIn = false;

    constructor(private auth: AdminService) {}

    async ngOnInit() {
        if (await this.auth.init()) {
            this.isLoggedIn = true;
        } else {
            const result = await this.auth.login();
            if (result) {
                this.isLoggedIn = true;
            }
        }
    }

    logout() {
        this.auth.logout();
        this.isLoggedIn = false;
    }
}
