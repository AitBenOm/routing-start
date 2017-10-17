import { Injectable } from '@angular/core';
import {ActivatedRoute, ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from "@angular/router";
import {Observable} from "rxjs/Observable";
import {ServersService} from "../servers.service";
interface Server{
  id: number;
  name: string;
  status: string;
}

@Injectable()
export class ServerResolverService implements Resolve<Server>{

resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Server> |Promise<Server> | Server{
return this.ServerServ.getServer(+route.params['id']);

}

  constructor(private ServerServ: ServersService) { }

}
