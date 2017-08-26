import {Routes} from '@angular/router';

export const rootRouterConfig: Routes = [
    {
        path: '',
        redirectTo: 'index',
        pathMatch: 'full'
    },
    {
        path: 'index',
        loadChildren: './index/index.module#IndexModule'
    },
    {
        path: 'user',
        loadChildren: './user/user.module#UserModule'
    }
];
