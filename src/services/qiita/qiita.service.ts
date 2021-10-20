import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { QiitaItem } from 'src/types/qiita.interface';

@Injectable()
export class QiitaService {
    private readonly apiHost = 'https://qiita.com/api/v2';
    private readonly myUserName = 'teracy164';

    constructor(private http: HttpClient) {}

    private get<T>(path: string) {
        return this.http.get<T>(this.apiHost + path).toPromise();
    }

    /**
     * 参考：https://qiita.com/api/v2/docs#get-apiv2usersuser_iditems
     */
    getMyItems() {
        return this.get<QiitaItem[]>('/users/' + this.myUserName + '/items?per_page=10');
    }
}
