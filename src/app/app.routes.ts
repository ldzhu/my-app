import {Routes} from '@angular/router';

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
