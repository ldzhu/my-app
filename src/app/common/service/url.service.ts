import {Injectable} from '@angular/core';
import {environment} from '../../../environments/environment';
import {URL_CONST} from '../const/url.consts';

@Injectable()
export class UrlService {

    constructor() {
    }

    static getURL(url: string) {
        return environment.urlHead + url;
    }

    static getURLSuffix(name: string) {
        return URL_CONST[name];
    }

    static getWsURL() {
    }
}
