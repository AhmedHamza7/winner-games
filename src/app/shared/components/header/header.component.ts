import { Component, OnInit } from '@angular/core';

declare var $:any;
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor() { }

  log(){
    console.log('redy');
    
  }
  

  ngOnInit(): void {
    $(window).scroll(function(){
      let scrollTop = $(window).scrollTop()
      
      if(scrollTop >= 10) {
        $('nav').css("background-color", "black")
      } else {
        $('nav').css("background-color", "transparent")
      }
      // scrollTop == 10 ? $('nav').css("background-color", "black") : $('nav').css("background-color", "transparent")
      
    })
  }

}
