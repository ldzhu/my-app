import {Injectable} from '@angular/core';

@Injectable()
export class AppService {

    constructor() {
    }

    // TODO 此处从localStorage中获取？
    getLanguage(): string {
        return 'zh-CN';
    }

}
