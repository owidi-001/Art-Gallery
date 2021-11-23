import { Component, OnInit } from '@angular/core';

import { Art } from 'src/models/art.model';
import { ArtService } from 'src/services/art.service'; 

@Component({
  selector: 'app-art-list',
  templateUrl: './art-list.component.html',
  styleUrls: ['./art-list.component.less']
})
export class ArtListComponent implements OnInit {
  arts: Art[] = [];

  constructor(private artService: ArtService) { }

  ngOnInit(): void {
    this.getArts();
  }

  getArts(): void {
    this.artService.getArts()
    .subscribe(arts => this.arts = arts);
  }
}