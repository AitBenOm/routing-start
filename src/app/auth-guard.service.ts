import { Injectable } from '@angular/core';
import {
  ActivatedRoute, ActivatedRouteSnapshot, CanActivate, CanActivateChild, Router,
  RouterStateSnapshot
} from "@angular/router";
import {Observable} from "rxjs/Observable";
import {AuthService, } from "./auth.service";

@Injectable()
export class AuthGuardService implements  CanActivate, CanActivateChild{

  constructor(private authService: AuthService, private router: Router){}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean{

return this.authService.isAuthen().then(
  (authentificated: boolean) => {
if(authentificated ){
  return true;
}else{
  this.router.navigate(['/']);
}
  }
);
  }

  canActivateChild(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean{

    return this.canActivate(route, state);
  }

}
