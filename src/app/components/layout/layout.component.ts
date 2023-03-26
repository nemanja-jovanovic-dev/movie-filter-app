import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FilterComponent } from "../filter/filter.component";
import { MoviesComponent } from "../movies/movies.component";

@Component({
    selector: 'app-layout',
    standalone: true,
    templateUrl: './layout.component.html',
    styleUrls: ['./layout.component.scss'],
    imports: [CommonModule, FilterComponent, MoviesComponent]
})
export class LayoutComponent {

}
