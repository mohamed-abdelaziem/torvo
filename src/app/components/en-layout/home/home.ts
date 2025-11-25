/// <reference types="../../../../../@types/jquery" />
import { AfterViewInit, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  imports: [],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home implements AfterViewInit {


ngAfterViewInit(): void {
$(function(){
  $(".loader").fadeOut(2000,function(){
    $('.loading').slideUp(2000,function(){
      $('body').css({overflow : 'auto'});
    })
  })
})
}


}
