import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: '',
        loadComponent: () => import('./home/home.component').then(m => m.HomeComponent)
    },
    {
        path: 'home',
        redirectTo: '',
        pathMatch: 'full'
    },
    {
        path: 'services',
        loadComponent: () => import('./services/services.component').then(m => m.ServicesComponent)
    },
    {
        path: 'about',
        loadComponent: () => import('./about-us/about-us.component').then(m => m.AboutUsComponent)
    },
    {
        path: 'projects',
        loadComponent: () => import('./projects/projects.component').then(m => m.ProjectsComponent)
    },
    {
        path: 'contact',
        loadComponent: () => import('./contact-us/contact-us.component').then(m => m.ContactUsComponent)
    }
];
