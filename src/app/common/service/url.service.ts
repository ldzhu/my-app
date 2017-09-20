import {Injectable} from '@angular/core';
import {environment} from '../../../environments/environment';
import {URL_CONST} from '../const/url.consts';

/**
 * URL服务
 */
@Injectable()
export class UrlService {

    constructor() {
    }

    static getURL(url: string) {
        return environment.mockData ? url : (environment.urlHead + url);
    }

    static getURLSuffix(name: string) {
        return URL_CONST[name];
    }

    static getWsURL() {
    }
}
