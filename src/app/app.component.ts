import { BehaviorSubject } from 'rxjs';
import { NavigationEnd, Router } from '@angular/router';
import { GamesService } from './games/services/games.service';
import { Component, Output, OnInit } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  bgImg:any = ''
  gradientBackground(){
    return `linear-gradient(to bottom, rgba(21, 21, 21, 0.8), rgba(21, 21, 21, 1)),url(${this.bgImg})`
  }


  constructor(private _gamesService:GamesService,private _router:Router,){}

  putImage(){
    this._gamesService.messageSource.subscribe((image)=> {
      this.bgImg = image
    }
    )
  }

  endPoint:string = ''
  isAuth:boolean = false
  path:BehaviorSubject<string> = new BehaviorSubject('')
  ngOnInit(): void {
    this.putImage()
    this._router.events.subscribe((e)=> {
      if (e instanceof NavigationEnd) {
        this.path.next(e.url)
        
        this.path.subscribe((e)=>{
            this.isAuth= false
            if(e == '/login' || e == '/signup'){
            this.isAuth = true
          } 
      });
      }
    }
      );

  }


}
