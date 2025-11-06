import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarAr } from '../../ar-layout/navbar-ar/navbar';
import { HomeAr } from '../../ar-layout/home-ar/home';
import { AboutAr } from '../about-ar/about';
import { CarouselAr } from '../carousel-ar/carousel';
import { ServiceAr } from '../service-ar/service';
import { MissionAr } from '../mission-ar/mission';
import { WhyTorvoAr } from '../why-torvo-ar/why-torvo';
import { StepsAr } from '../steps-ar/steps';
import { OpinionAr } from "../opinion-ar/opinion-ar";
@Component({
  selector: 'app-app-ar',
  imports: [RouterOutlet, NavbarAr, HomeAr, AboutAr, StepsAr, CarouselAr, ServiceAr, MissionAr, WhyTorvoAr, OpinionAr],
  templateUrl: './app-ar.html',
  styleUrl: './app-ar.css',
})
export class AppAr {

}
