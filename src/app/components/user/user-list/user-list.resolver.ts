import { Injectable } from '@angular/core';
import {
  Router, Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router';
import { Observable, map, of, take } from 'rxjs';
import { UserListService } from 'src/app/services/components/user-list.service';
import { UserState } from 'src/app/state/user-state';

@Injectable({
  providedIn: 'root'
})
export class UserListResolver implements Resolve<boolean> {

  constructor(
    private userListService: UserListService,
    private userState: UserState
  ){ }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> {
    return this.userListService.getUserList().pipe(
      take(1),
      map((data: any) => {
        debugger;
        if(data.code === '000'){
          this.userState.setUserList(data.response);
          return true;
        }
        else{
          return false;
        }
      })
    )
  }
}
