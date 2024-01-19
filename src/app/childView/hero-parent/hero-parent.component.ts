import { Component } from '@angular/core';
import { HEROES } from 'src/app/services/hero';

@Component({
  selector: 'app-hero-parent',
  templateUrl: './hero-parent.component.html',
  styleUrls: ['./hero-parent.component.scss']
})
export class HeroParentComponent {
  
  heroes = HEROES;
  master = 'Master';
}
