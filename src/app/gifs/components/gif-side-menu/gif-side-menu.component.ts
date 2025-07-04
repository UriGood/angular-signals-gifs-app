import { Component } from '@angular/core';
import { GifsSideMenuHeaderComponent } from './gifs-side-menu-header/gifs-side-menu-header.component';
import { GifsSideMenuOptionsComponent } from './gifs-side-menu-options/gifs-side-menu-options.component';

@Component({
  selector: 'app-gif-side-menu',
  imports: [GifsSideMenuHeaderComponent, GifsSideMenuOptionsComponent],
  templateUrl: './gif-side-menu.component.html',
  styleUrl: './gif-side-menu.component.css'
})
export class GifSideMenuComponent {

}
