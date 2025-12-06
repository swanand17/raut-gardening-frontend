import { CommonModule } from '@angular/common';
import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-info-details',
  imports: [CommonModule],
  templateUrl: './info-details.component.html',
  styleUrl: './info-details.component.scss'
})
export class InfoDetailsComponent {

  @Input() infoData : any = null;
  @Input() title = '';
  @Input() type = '';

  @Output() backEvent = new EventEmitter<any>();

  constructor(private router: Router) { }

  goBack(): void {
    if(!this.type) return;
    this.backEvent.emit();
  }
}
