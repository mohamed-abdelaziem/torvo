
import { Component, inject, signal } from '@angular/core';
import { initFlowbite } from 'flowbite';
import { NavigationEnd, Router, RouterOutlet } from '@angular/router';
declare var AOS: any;
/// <reference types="../../@types/jquery" />
@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  protected readonly title = signal('Torvo');

  private router = inject(Router);

  ngOnInit(): void {
 this.router.events.subscribe(event => {
    if (event instanceof NavigationEnd) {
      setTimeout(() => AOS.refresh(), 200);
    }
  });


 

    initFlowbite();
  
  
  
  }





}
