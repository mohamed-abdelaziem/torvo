import { Navbar } from './../../en-layout/navbar/navbar';
import { Home } from './../../en-layout/home/home';
import { WhyTorvo } from "../../en-layout/why-torvo/why-torvo";
import { Mission } from '../../en-layout/mission/mission';
import { Service } from '../../en-layout/service/service';
import { Carousel } from '../carousel/carousel';
import { About } from '../../en-layout/about/about';
import { Steps } from '../../en-layout/steps/steps';
import { Component } from '@angular/core';
import { Opinion } from "../opinion/opinion";
import { LocationEn } from "../location-en/location-en";
import { Footer } from "./footer/footer";
import { Portfolio } from "../portfolio/portfolio";



@Component({
  selector: 'app-app-en',
  imports: [Steps, WhyTorvo, Mission, Service, Carousel, About, Home, Navbar, Opinion, LocationEn, Footer, Portfolio],
  templateUrl: './app-en.html',
  styleUrl: './app-en.css',
})
export class AppEn {}
