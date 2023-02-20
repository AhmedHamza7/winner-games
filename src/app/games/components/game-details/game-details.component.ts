import { GamesService } from './../../services/games.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-game-details',
  templateUrl: './game-details.component.html',
  styleUrls: ['./game-details.component.scss']
})
export class GameDetailsComponent implements OnInit {

  gameId:string = '';
  gameDetailsData:any = {}
  screenshotsData:any[] = []
  constructor(private _ActivatedRoute:ActivatedRoute, private _gamesService:GamesService) { }

  gradientBackground(img:any){
    return `linear-gradient(to bottom, rgba(32, 32, 32, 0.6), rgba(32, 32, 32, 1)),url(${img})`
  }
  gameDetails(){
    this._gamesService.getGameDetails(this.gameId).subscribe({
      next:(res)=> {
        this.gameDetailsData = res
        console.log(res);
      }
    })
  }
  gameScreenshots(){
    this._gamesService.getGameScreenshots(this.gameId).subscribe({
      next:(res) => {
                this.screenshotsData = res.results
                console.log(res.results);
                
              }
    })
  }
  ngOnInit(): void {
    this.gameId = this._ActivatedRoute.snapshot.params['gameId']
    this.gameDetails()
    this.gameScreenshots()
  }

}
