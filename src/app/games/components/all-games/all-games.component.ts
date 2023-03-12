import { GamesService } from './../../services/games.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-all-games',
  templateUrl: './all-games.component.html',
  styleUrls: ['./all-games.component.scss']
})


export class AllGamesComponent implements OnInit {
  allGames:any[] = []
  constructor(private _gamesService:GamesService) { }


  
  getBgImg(img:any){
    this._gamesService.messageSource.next(img)
  }
  ngOnInit(): void {
    this._gamesService.getAllGames('games').subscribe({
      next:(res:any)=> {
        this.allGames = res.results
        console.log(this.allGames);
                      }
      
    })
  }

}
