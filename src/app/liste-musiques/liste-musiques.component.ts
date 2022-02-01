import { Component, OnInit } from '@angular/core';
import {MatDialog, MatDialogRef} from "@angular/material/dialog";
import {from, mergeMap} from "rxjs";
import {AjoutPopupComponent} from "./ajout-popup/ajout-popup.component";
import {MusicServiceService, Music} from "../partage/service/music-service.service";

@Component({
  selector: 'app-liste-musiques',
  templateUrl: './liste-musiques.component.html',
  styleUrls: ['./liste-musiques.component.scss']
})
export class ListeMusiquesComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
