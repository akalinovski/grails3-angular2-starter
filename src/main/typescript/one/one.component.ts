import {Component} from '@angular/core';
import {Http, Response} from '@angular/http';
import {htmlTemplate} from './one.html';

declare var baseUrl: any;

@Component({
    selector: 'one',
    template: htmlTemplate
})
export class OneComponent {
    http: Http;
    baseUrl: string;
    data: Object;

    constructor(http: Http) {
        this.http = http;
        this.baseUrl = baseUrl;

        this.getData();
    }

    getData() {
        this.http.get(this.baseUrl + '/data/one')
            .subscribe((res: Response) => {
                this.data = res.json()['data'];
            })
    }
}
