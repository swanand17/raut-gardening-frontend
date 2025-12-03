import { Component, Input, OnInit } from '@angular/core';
import { InfoDetailsComponent } from '../info-details/info-details.component';
import { ServicesEnum } from './services-enum';
import { ServicesData } from './servicesData';
import { CommonModule, NgStyle } from '@angular/common';

@Component({
  selector: 'app-services',
  imports: [InfoDetailsComponent, NgStyle, CommonModule],
  templateUrl: './services.component.html',
  styleUrl: './services.component.scss'
})
export class ServicesComponent implements OnInit {

  selectedService:any  = null;

  servicesData = ServicesData;
  @Input() loadedInHome = false;

  constructor() { }

  ngOnInit(): void {

  }

  selectService(service: ServicesEnum): void {
    this.selectedService = this.servicesData.find(s => s.title === service) ? service : null;
  }
}
