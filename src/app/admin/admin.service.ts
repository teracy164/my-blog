import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import * as firebase from 'firebase/app';

@Injectable()
export class AdminService {
    user: firebase.User;

    constructor(private fireAuth: AngularFireAuth) {}

    async init() {
        return new Promise((resolve) => {
            this.fireAuth.user.subscribe((user) => {
                this.user = user;
                resolve(user);
            });
        });
    }

    get loginUser() {
        return this.user;
    }
    get isLoggedIn() {
        return this.user ? true : false;
    }

    /**
     * 参考：https://github.com/angular/angularfire/blob/master/docs/auth/getting-started.md
     */
    async login() {
        const result = await this.fireAuth.auth.signInWithPopup(new firebase.auth.GoogleAuthProvider());
        return true;
    }

    logout() {
        this.fireAuth.auth.signOut();
    }
}
