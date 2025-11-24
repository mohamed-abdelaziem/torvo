import { Component } from '@angular/core';
import { initFlowbite } from 'flowbite';
import { FlowbiteService } from '../../../services/flowbite-service';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-navbar',
  imports: [RouterLink],
  templateUrl: './navbar.html',
  styleUrl: './navbar.css',
})
export class Navbar {
  constructor(private flowBite: FlowbiteService) {}

  ngOnInit(): void {
    this.flowBite.loadFlowbite((flowbite) => {
      initFlowbite();
    });
  }
}
