import { Injectable } from "@angular/core";
import { BehaviorSubject, Observable } from "rxjs";
import { User } from "../models/user.model";

@Injectable({
    providedIn: 'root'
  })
export class UserState {
    private currentUserSubject: BehaviorSubject<User> = new BehaviorSubject({} as User);
    public readonly currentUser: Observable<User> = this.currentUserSubject.asObservable();

    private currentUsersSubject: BehaviorSubject<User[]> = new BehaviorSubject({} as User[]);
    public readonly userList: Observable<User[]> = this.currentUsersSubject.asObservable();

    constructor(){}

    setCurrentUser(currentUser: User): void {
        this.currentUserSubject.next(currentUser);
    }

    setUserList(userList: User[]): void {
        this.currentUsersSubject.next(userList);
    }
    
}
