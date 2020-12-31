import { TypeScriptEmitter } from '@angular/compiler';
import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { BaseResponse } from '../../../../types';

@Injectable()
export abstract class FirestoreService<Doc extends BaseResponse> {
    abstract readonly collection: string;

    constructor(private firestore: AngularFirestore) {}

    async getAllDocs(): Promise<Doc[]> {
        const result = await this.firestore.collection<Doc>(this.collection).get().toPromise();
        return result.docs.map((doc) => this.toInnerType(doc));
    }
    async getDoc(docId: string): Promise<Doc> {
        const doc = await this.firestore.collection<Doc>(this.collection).doc(docId).get().toPromise();
        return this.toInnerType(doc);
    }

    public async addDoc(doc: Doc) {
        const result = await this.firestore.collection<Doc>(this.collection).add(doc);
        return { ...doc, id: result.id };
    }

    public async updateDoc(docId: string, doc: Doc): Promise<void> {
        await this.firestore.collection<Doc>(this.collection).doc(docId).update(doc);
    }

    toInnerType(doc: firebase.firestore.QueryDocumentSnapshot<firebase.firestore.DocumentData>): Doc {
        // レコードにDocIDを付与して返却
        return { ...doc.data(), id: doc.id } as Doc;
    }
}
