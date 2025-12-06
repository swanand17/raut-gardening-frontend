import { Component, Input, OnInit } from '@angular/core';
import { InfoDetailsComponent } from '../info-details/info-details.component';
import { ServicesEnum } from './services-enum';
import { ServicesData } from './servicesData';
import { CommonModule, NgStyle } from '@angular/common';
import { Router } from '@angular/router';

interface Service {
  title: ServicesEnum,
  description: string,
  image: string,
  // details: string
}

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

  constructor(private router: Router) { }

  ngOnInit(): void {
    if (!this.loadedInHome) {
      const queryParams = this.router.parseUrl(this.router.url).queryParams;
      if(queryParams){
        const serviceTitle = queryParams['service'];
        this.selectedService = this.servicesData.find(service => service.title === serviceTitle);
      } else {
        this.selectedService = null;
      }
    }
  }

  selectService(service: Service): void {
    if (this.loadedInHome) {
      this.router.navigate(["services"], { queryParams: { service: service.title } });
      return;
    }
    this.selectedService = service;
  }

  reset(value:boolean): void {
    console.log(value);
    this.selectedService = null;
    this.router.navigate(["services"]);
  }
}
