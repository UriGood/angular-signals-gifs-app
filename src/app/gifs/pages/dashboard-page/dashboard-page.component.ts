import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { GifsSideMenuHeaderComponent } from '../../components/gif-side-menu/gifs-side-menu-header/gifs-side-menu-header.component';
import { GifsSideMenuOptionsComponent } from '../../components/gif-side-menu/gifs-side-menu-options/gifs-side-menu-options.component';
import { GifSideMenuComponent } from '../../components/gif-side-menu/gif-side-menu.component';

@Component({
  selector: 'app-dashboard-page',
  imports: [RouterOutlet, GifSideMenuComponent],
  templateUrl: './dashboard-page.component.html',
})
export default class DashboardPageComponent { }
