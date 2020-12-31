import { Injectable } from '@angular/core';
import { CareerApiClientService } from 'src/app/shared/services/api-client/career.service';
import { Career } from '../../../types';

@Injectable()
export class CareerService {
    careers: Career[];

    constructor(private api: CareerApiClientService) {}

    async init() {
        this.careers = await this.api.getAllDocs();
        console.log(this.careers);
    }
}
