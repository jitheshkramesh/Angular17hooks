import { Component, OnInit } from '@angular/core';
import { MusicService } from '../services/music.service';

@Component({
  selector: 'app-music',
  templateUrl: './music.component.html',
  styleUrl: './music.component.scss'
})
export class MusicComponent implements OnInit {
  loading: boolean = false;

  constructor(public itunes: MusicService) { }

  ngOnInit(): void {
    this.doSearch('misic');
    console.log(this.itunes);
  }

  doSearch(term: string) {
    console.log('search : ' + term);
    this.loading = true;
    this.itunes.search(term).then(() => {
      this.loading = false,
      console.log(this.itunes.DataResults)
    })
  }
}
