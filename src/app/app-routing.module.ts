import { NgModule } from '@angular/core';

import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { CrudComponent } from './components/crud/crud.component';
import { CrudListComponent } from './components/crud/crud-list/crud-list.component';
import { CrudDetailComponent } from './components/crud/crud-detail/crud-detail.component';

export const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    children: [
      {
        path: 'crud',
        component: CrudComponent,
        children: [
          {
            path: 'list',
            component: CrudListComponent
          },
          {
            path: 'detail',
            component: CrudDetailComponent
          },
          {
            path: 'detail/:id',
            component: CrudDetailComponent
          },
          {
            path: '',
            redirectTo: 'list',
            pathMatch: 'full'
          }

        ]
      }
    ]
  }
];

@NgModule({
  imports: [
     RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
