import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';

const routes: Routes = [
  // { path: '', loadChildren: () => import('./pages/kaku/kaku.module').then(m => m.KakuModule) },
  { path: '', loadChildren: () => import('./pages/home/home.module').then(m => m.HomeModule) },
  { path: 'login', loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule) },





  { path: 'examEntry', loadChildren: () => import('./pages/exam-entry/exam-entry.module').then(m => m.ExamEntryModule) },
  { path: 'dashboard', loadChildren: () => import('./pages/dashboard/dashboard.module').then(m => m.DashboardModule) },




  // { path: 'python', loadChildren: () => import('./pages/courses/python/python.module').then(m => m.PythonModule) },
  // { path: 'PythonTutorialIntroduction', loadChildren: () => import('./pages/tutorial/python-tutorial/python-tutorial-introduction/python-tutorial-introduction.module').then(m => m.PythonTutorialIntroductionModule) },

  // { path: 'Header', loadChildren: () => import('./header/header.module').then(m => m.HeaderModule) },

];

// @ts-ignore
@NgModule({
  imports: [RouterModule.forRoot(routes,{useHash : true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
