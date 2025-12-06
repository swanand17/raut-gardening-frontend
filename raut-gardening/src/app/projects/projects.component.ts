import { CommonModule, NgStyle } from '@angular/common';
import { Component, Input } from '@angular/core';

interface Project{
  title: string,
  description: string,
  image: string,
  gallery: string[]
}

@Component({
  selector: 'app-projects',
  imports: [CommonModule],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss'
})
export class ProjectsComponent {

  assetRoute = 'assets/projects/'
  projects: Project[] = [
    {
      title: 'Mauli Agro Tourism',
      description: '',
      image: 'MauliAgroTourism/main.webp',
      gallery: ['MauliAgroTourism/overview.webp','MauliAgroTourism/house-1.webp','MauliAgroTourism/house-2.webp','MauliAgroTourism/pool.jpeg','MauliAgroTourism/room.webp']
    }
  ];

  @Input() loadedInHome = true;

  @Input() selectedProject: Project | null = null;
}
