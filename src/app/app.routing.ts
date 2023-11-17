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
            },
            {
                path: 'services',
                data: {},
                loadChildren: () => import('../app/modules/admin/services/services.module').then(m => m.ServicesModule),
            },
            {
                path: 'products',
                data: {},
                loadChildren: () => import('../app/modules/admin/products/products.module').then(m => m.ProductsModule),
            },
            /* {
                path: 'galery',
                data: {},
                loadChildren: () => import('../app/modules/admin/galery/galery.module').then(m => m.GaleryModule),
            }, */
            /* {
                path: 'contact',
                data: {},
                loadChildren: () => import('../app/modules/admin/contact/contact.module').then(m => m.ContactModule),
            }, */
        ]
    },


]