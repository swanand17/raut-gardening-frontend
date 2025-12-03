import { NgFor } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-info-details',
  imports: [NgFor],
  templateUrl: './info-details.component.html',
  styleUrl: './info-details.component.scss'
})
export class InfoDetailsComponent {

  @Input() infoData : any = null;
  @Input() title = '';

}
