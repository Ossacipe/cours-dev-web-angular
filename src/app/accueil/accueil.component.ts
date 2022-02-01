import {Component, OnInit} from '@angular/core';
import {MusicService, Music} from "../partage/service/music-service.service";

@Component({
  selector: 'app-accueil',
  templateUrl: './accueil.component.html',
  styleUrls: ['./accueil.component.scss']
})
export class AccueilComponent implements OnInit {
  music: Music = {};

  constructor(private readonly musicService: MusicService) {}

  ngOnInit(): void {
    this.random();
  }

  random() {
    this.musicService.fetchRandom().subscribe(music => {
      this.music = music;
    });
  }

  delete(music: Music) {
    this.musicService.delete(music.id!).subscribe(musics => {
      this.random();
    });
  }
}
