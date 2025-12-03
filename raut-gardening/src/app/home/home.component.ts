import { Component } from '@angular/core';
import { HeroComponent } from '../hero/hero.component';
import { ServicesComponent } from '../services/services.component';
import { AboutUsComponent } from "../about-us/about-us.component";
import { ContactUsComponent } from '../contact-us/contact-us.component';
import { ProjectsComponent } from '../projects/projects.component';

@Component({
  selector: 'app-home',
  imports: [HeroComponent, ServicesComponent, AboutUsComponent, ContactUsComponent, ProjectsComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

}
