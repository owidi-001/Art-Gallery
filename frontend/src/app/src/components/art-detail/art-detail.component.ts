import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { Art } from 'src/models/art.model';
import { ArtService } from 'src/services/art.service';

@Component({
  selector: 'app-art-detail',
  templateUrl: './art-detail.component.html',
  styleUrls: ['./art-detail.component.less']
})
export class ArtDetailComponent implements OnInit {
  art: Art | undefined;

  constructor(
    private route: ActivatedRoute,
    private artService: ArtService,
    private location: Location
  ) {}

  ngOnInit(): void {
    this.getArt();
  }

  getArt(): void {
    const id = parseInt(this.route.snapshot.paramMap.get('id')!, 10);
    this.artService.getArt(id)
      .subscribe(art => this.art = art);
  }

  goBack(): void {
    this.location.back();
  }

  save(): void {
    if (this.art) {
      this.artService.updateArt(this.art)
        .subscribe(() => this.goBack());
    }
  }
}