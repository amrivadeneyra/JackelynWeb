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
            {
                path: 'appointment-scheduler',
                data: {},
                loadChildren: () => import('../app/modules/admin/appointment-scheduler/appointment-scheduler.module').then(m => m.AppointmentSchedulerModule),
            },
            {
                path: 'cart',
                data: {},
                loadChildren: () => import('../app/modules/admin/cart/cart.module').then(m => m.CartModule),
            },
            /* {
                path: 'contact',
                data: {},
                loadChildren: () => import('../app/modules/admin/contact/contact.module').then(m => m.ContactModule),
            }, */
        ]
    },


]