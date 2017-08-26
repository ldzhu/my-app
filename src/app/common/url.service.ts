import {Injectable} from '@angular/core';
import {environment} from '../../environments/environment';
import {URL_CONST} from './url.consts';

@Injectable()
export class UrlService {

    constructor() {
    }

    getURL(name: string) {
        return environment.urlHead + URL_CONST[name];
    }

    getURLSuffix(name: string) {
        return URL_CONST[name];
    }

    getWsURL() {
    }
}
