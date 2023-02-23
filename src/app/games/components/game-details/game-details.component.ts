import { GamesService } from './../../services/games.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-game-details',
  templateUrl: './game-details.component.html',
  styleUrls: ['./game-details.component.scss']
})
export class GameDetailsComponent implements OnInit {

  subscription:Subscription = new Subscription
  gameId:string = '';
  gameDetailsData:any = {}
  screenshotsData:any[] = []
  showAll:boolean = false
  constructor(private _ActivatedRoute:ActivatedRoute, private _gamesService:GamesService) { }

  gradientBackground(img:any){
    return `linear-gradient(to bottom, rgba(32, 32, 32, 0.6), rgba(32, 32, 32, 1)),url(${img})`
  }
  // gameDetails(){

  // }
  gameScreenshots(){
    this._gamesService.getGameScreenshots(this.gameId).subscribe({
      next:(res) => {
                this.screenshotsData = res.results
              }
    })
  }

  showMore(e:any){
    let buttonClicked = e.target

    this.showAll = true
    buttonClicked.previousSibling.classList.remove('max-height')
    buttonClicked.previousSibling.classList.remove('gradient')
  }

  showLess(e:any){
    let buttonClicked = e.target
    console.log(buttonClicked.previousSibling.previousSibling);
    
    this.showAll = false
    buttonClicked.previousSibling.previousSibling.classList.add('max-height')
    buttonClicked.previousSibling.previousSibling.classList.add('gradient')
  }
  ngOnInit(): void {
    this.gameId = this._ActivatedRoute.snapshot.params['gameId']
    this.subscription = this._gamesService.getGameDetails(this.gameId).subscribe({
                            next:(res)=> {
                              this.gameDetailsData = res
                              console.log(res);
                              }
                        })
    this.gameScreenshots()
  }
  ngOnDestroy(){
    this.subscription.unsubscribe()
  }

}
