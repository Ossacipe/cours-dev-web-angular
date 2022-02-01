import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from '@angular/router';
import {Observable} from 'rxjs';
import {MusicService, Music} from "../service/music-service.service";

@Injectable({
  providedIn: 'root'
})
export class EmployeDetailResolverResolver implements Resolve<Music> {

  constructor(private readonly musicService: MusicService) {
  }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Music> {
    const musicId: string | null = route.paramMap.get('id');
    if(musicId != null){
      return this.musicService.fetchOne(musicId);
    }
    else
      return new Observable<Music>();
  }
}
