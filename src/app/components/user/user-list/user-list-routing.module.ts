import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserListComponent } from './user-list.component';
import { UserListResolver } from './user-list.resolver';

const routes: Routes = [
  {
    path: '',
    component: UserListComponent,
    resolve: {isResolved: UserListResolver}
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserListRoutingModule { }
