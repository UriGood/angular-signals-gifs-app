import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { GifsSideMenuHeaderComponent } from '../../components/gifs-side-menu-header/gifs-side-menu-header.component';

@Component({
  selector: 'app-dashboard-page',
  imports: [RouterOutlet, GifsSideMenuHeaderComponent],
  templateUrl: './dashboard-page.component.html',
})
export default class DashboardPageComponent { }
