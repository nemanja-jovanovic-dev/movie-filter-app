import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import {MatInputModule} from '@angular/material/input';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@Component({
  selector: 'app-filter',
  imports: [CommonModule, MatInputModule, FontAwesomeModule],
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss'],
  standalone: true
})
export class FilterComponent {

}
