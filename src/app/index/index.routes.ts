import {Routes} from '@angular/router';

import {IndexComponent} from './index.component';
import {NavigateComponent} from './navigate/navigate.component';
import {FocusComponent} from './focus/focus.component';

export const rootRouterConfig: Routes = [
    {
        path: 'index',
        component: IndexComponent,
        children: [
            {
                path: '',
                pathMatch: 'full',
                redirectTo: 'navigate'
            },
            {
                path: 'navigate',
                pathMatch: 'full',
                component: NavigateComponent
            },
            {
                path: 'focus',
                pathMatch: 'full',
                component: FocusComponent
            }
        ]
    }
];
