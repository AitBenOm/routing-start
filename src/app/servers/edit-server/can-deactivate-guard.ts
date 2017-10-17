import {Observable} from "rxjs/Observable";
import {ActivatedRouteSnapshot, CanDeactivate, RouterStateSnapshot} from "@angular/router";

export interface CanComponenetDeactivate {
  canDeactivate: () => Observable<boolean> | Promise<boolean> | boolean ;
}


export class CanDeactivateGuard implements CanDeactivate<CanComponenetDeactivate>{

  canDeactivate(componenet: CanComponenetDeactivate,
                current: ActivatedRouteSnapshot,
                currentStat: RouterStateSnapshot,
                nextState?: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
  return componenet.canDeactivate();
  }
}
