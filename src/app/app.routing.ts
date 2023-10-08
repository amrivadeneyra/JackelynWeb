import { Route } from "@angular/router";

export const appRoutes: Route[] = [
    { path: '', pathMatch: 'full', redirectTo: 'home' },

    {
        path: '',
        children: [
            {
                path: 'home',
                data: {},
                loadChildren: () => import('../app/modules/admin/home/home.module').then(m => m.HomeModule),
            }
        ]
    }
]