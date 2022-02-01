import {ChangeDetectorRef, Component, OnInit} from '@angular/core';
import {MatDialog, MatDialogRef} from "@angular/material/dialog";
import {mergeMap} from "rxjs";
import {AjoutPopupComponent} from "./ajout-popup/ajout-popup.component";
import {MusicService, Music} from "../partage/service/music-service.service";

@Component({
  selector: 'app-liste-musiques',
  templateUrl: './liste-musiques.component.html',
  styleUrls: ['./liste-musiques.component.scss']
})
export class ListeMusiquesComponent implements OnInit {

  private addDialog: MatDialogRef<AjoutPopupComponent> | any;
  musics: Music[] = [];
  dialogStatus = 'inactive';
  view = 'card';

  constructor(
    private readonly MusicService: MusicService,
    public dialog: MatDialog,
    private cdr: ChangeDetectorRef) {

  }

  musicsFiltered(musics: any[]) {
    this.musics = musics;
  }

  /**
   * OnInit implementation
   */
  ngOnInit() {
    this.MusicService.fetch().subscribe(musics => {
      this.musics = musics || [];
    });
  }

  delete(music: Music) {
    this.MusicService.delete(music.id!).subscribe(musics => {
      this.musics = musics;
      this.MusicService.updatedMusicList(music.id!);
      this.cdr.markForCheck();
    });
  }

  add(music: Music) {
    this.MusicService
      .create(music)
      .pipe(mergeMap(() => this.MusicService.fetch()))
      .subscribe(musics => {
        this.musics = musics;
        this.hideDialog();
      });
  }

  update(music: Music) {
    this.MusicService
      .update(music)
      .pipe(mergeMap(() => this.MusicService.fetch()))
      .subscribe(musics => {
        this.musics = musics;
        this.hideDialog();
      });
  }

  showDialog() {
    this.dialogStatus = 'active';
    this.addDialog = this.dialog.open(AjoutPopupComponent, {
      width: '600px',
      data: {}
    });

    this.addDialog.afterClosed().subscribe((music:any)=> {
      this.dialogStatus = 'inactive';
      if (music) {
        this.add(music);
      }
    });
  }

  hideDialog() {
    this.dialogStatus = 'inactive';
    if(this.addDialog != undefined){
      this.addDialog.close();
    }
  }

  switchView() {
    this.view = this.view === 'card' ? 'list' : 'card';
  }

}

