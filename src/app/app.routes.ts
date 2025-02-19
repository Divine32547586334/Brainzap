import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'start',
    pathMatch: 'full',
  },
  {
    path: 'start',
    loadComponent: () => import('./start/start.page').then((m) => m.StartPage),
  },
  {
    path: 'login',
    loadComponent: () => import('./login/login.page').then((m) => m.LoginPage),
  },
  {
    path: 'signup',
    loadComponent: () => import('./signup/signup.page').then((m) => m.SignupPage),
  },
  {
    path: 'home',
    loadComponent: () => import('./home/home.page').then( m => m.HomePage)
  },
  {
    path: 'forgot-pass',
    loadComponent: () => import('./forgot-pass/forgot-pass.page').then( m => m.ForgotPassPage)
  },
  {
    path: 'email-sent',
    loadComponent: () => import('./email-sent/email-sent.page').then( m => m.EmailSentPage)
  },
];
