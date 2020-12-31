import { Injectable } from '@angular/core';
import { Skill } from '../../../../types';
import { FirestoreService } from './firestore.service';

@Injectable()
export class SkillApiClientService extends FirestoreService<Skill> {
    readonly collection = 'skills';
}
