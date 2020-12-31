import { Injectable } from '@angular/core';
import { Career } from '../../../../types';
import { FirestoreService } from './firestore.service';

@Injectable()
export class CareerApiClientService extends FirestoreService<Career> {
    readonly collection = 'careers';
}
