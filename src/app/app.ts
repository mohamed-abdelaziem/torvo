import { Component, signal } from '@angular/core';
import { initFlowbite } from 'flowbite';
import { Navbar } from "./components/navbar/navbar";
import { Home } from "./components/home/home";
import { About } from "./components/about/about";
import { Carousel } from "./components/carousel/carousel";
import { Service } from "./components/service/service";
import { Mission } from "./components/mission/mission";
import { WhyTorvo } from "./components/why-torvo/why-torvo";
import { Steps } from "./components/steps/steps";
@Component({
  selector: 'app-root',
  imports: [Navbar, Home, About, Carousel, Service, Mission, WhyTorvo, Steps],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('Torvo');

  ngOnInit(): void {
    initFlowbite();
  }


}
