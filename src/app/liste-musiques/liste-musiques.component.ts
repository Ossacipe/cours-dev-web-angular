import { Component, OnInit } from '@angular/core';
import {MatDialog, MatDialogRef} from "@angular/material/dialog";
import {from, mergeMap} from "rxjs";

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
