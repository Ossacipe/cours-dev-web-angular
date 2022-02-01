import {Component, EventEmitter, Input, OnDestroy, OnInit, Output} from '@angular/core';
import {FormControl} from "@angular/forms";
import {MusicService} from "../service/music-service.service";
import {catchError, debounceTime, distinctUntilChanged, Observable, of, Subscription, switchMap, take} from "rxjs";


@Component({
  selector: 'barre-de-recherche',
  templateUrl: './barre-de-recherche.component.html',
  styleUrls: ['./barre-de-recherche.component.scss']
})
export class BarreDeRechercheComponent implements OnInit, OnDestroy {

  barreDeRecherche = new FormControl();
  filteredMusics!: Observable<any[]>;

  filteredMusicsSubscription: Subscription | null = null;
  musicServiceSubscription: Subscription | null = null;

  @Input() musics: any[] = [];

  @Output() readonly typing = new EventEmitter<any[]>();

  constructor(
    private readonly musicService: MusicService) {
  }

  ngOnInit(): void {
    this.filteredMusics = this.barreDeRecherche.valueChanges.pipe(
      debounceTime(400),
      distinctUntilChanged(),
      switchMap(value => {
        if (value) {
          return this.musicService.search(value).pipe(
            catchError(() => of([]))
          );
        } else {
          return this.musicService.fetch();
        }
      })
    );

    this.filteredMusicsSubscription = this.filteredMusics.subscribe({
      next: musics => this.typing.emit(musics)
    });

    this.musicServiceSubscription = this.musicService.musics$.subscribe({
      next: () => {
        this.musicService.fetch().pipe(take(1)).subscribe(musics => this.musics = musics);
        this.barreDeRecherche.setValue('');
      }
    });
  }

  ngOnDestroy() {
    this.filteredMusicsSubscription?.unsubscribe();
    this.musicServiceSubscription?.unsubscribe();
  }

}
