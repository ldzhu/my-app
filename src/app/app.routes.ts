import {Routes} from '@angular/router';

/**
 * App模块路由，即主路由。每个子模块通过延迟加载的方式启动。
 * 参考: https://angular.cn/guide/router
 */
export const rootRouterConfig: Routes = [
    {
        path: '',
        redirectTo: 'index',
        pathMatch: 'full'
    },
    {
        path: 'index',
        loadChildren: 'app/index/index.module#IndexModule'
    },
    {
        path: 'user',
        loadChildren: 'app/user/user.module#UserModule'
    }
];
