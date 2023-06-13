import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'user/list',
    pathMatch: 'full'
  },
  {
    path: 'user/list',
    loadChildren: () => import('./components/user/user-list/user-list.module').then((m) => m.UserListModule)
  },
  {
    path: 'user/detail/:userId',
    loadChildren: () => import('./components/user/user-detail/user-detail.module').then((m) => m.UserDetailModule)
  },
  {
    path: 'department/list',
    loadChildren: () => import('./components/department/department-list/department-list.module').then((m) => m.DepartmentListModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
