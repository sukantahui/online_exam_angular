import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CoursesComponent } from './courses.component';

// const routes: Routes = [{ path: '', component: CoursesComponent }];
const routes: Routes = [{ path: '', component: CoursesComponent
  , children: [
    { path: 'python'
      , loadChildren: () => import('./python/python.module').then(m => m.PythonModule)
    },
  ]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CoursesRoutingModule { }
