import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { PythonDataTypeComponent } from './pages/python-home/python-data-type/python-data-type.component';
import { PythonHomeComponent } from './pages/python-home/python-home.component';
import { PythonIntroductionComponent } from './pages/python-home/python-introduction/python-introduction.component';
import { PythonNumberComponent } from './pages/python-home/python-number/python-number.component';

const routes: Routes = [
  // { path: '', loadChildren: () => import('./pages/kaku/kaku.module').then(m => m.KakuModule) },
  { path: '', loadChildren: () => import('./pages/home/home.module').then(m => m.HomeModule) },
  { path: '', loadChildren: () => import('./pages/home/home.module').then(m => m.HomeModule) },
  { path: 'login', loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule) },
  { path: 'Python', loadChildren: () => import('./pages/python/python.module').then(m => m.PythonModule) },
  {
    path: 'python', component: PythonHomeComponent,
    // children: [
    //   {path: '', component: PythonIntroductionComponent},
    //   {path: 'dataType', component: PythonDataTypeComponent},
    //   {path: 'pythonNumber', component: PythonNumberComponent}
    // ]
  },
  { path: 'Python', loadChildren: () => import('./pages/python/python.module').then(m => m.PythonModule) },
  { path: 'Tutorial', loadChildren: () => import('./pages/tutorial/tutorial.module').then(m => m.TutorialModule) },
  { path: 'Practice', loadChildren: () => import('./pages/practice/practice.module').then(m => m.PracticeModule) },
  { path: 'PythonTutorial', loadChildren: () => import('./pages/tutorial/python-tutorial/python-tutorial.module').then(m => m.PythonTutorialModule) },
  { path: 'auth', loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule) },
  { path: 'pythonTuples', loadChildren: () => import('./pages/tutorial/python-tutorial/python-tuples/python-tuples.module').then(m => m.PythonTuplesModule) },
  { path: 'courses', loadChildren: () => import('./pages/courses/courses.module').then(m => m.CoursesModule) },
  { path: 'kaku', loadChildren: () => import('./pages/kaku/kaku.module').then(m => m.KakuModule) },
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
