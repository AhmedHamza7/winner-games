import { GamesService } from './../../services/games.service';
import { Component, OnInit, Output, EventEmitter } from '@angular/core';
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
  allReviews:string[] = []
  loved:number = 0
  constructor(private _ActivatedRoute:ActivatedRoute, private _gamesService:GamesService) { }

  gradientBackground(img:any){
    return `linear-gradient(to bottom, rgba(32, 32, 32, 0.6), rgba(32, 32, 32, 1)),url(${img})`
  }

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

  addReview(){
    let revInput = document.getElementById('revInput')  as HTMLInputElement
    
    this.allReviews.push(revInput.value)
    localStorage.setItem('reviews', JSON.stringify(this.allReviews))
    revInput.value = ''
  }
  deleteReview(i:any){
    this.allReviews.splice(i,1)
    localStorage.setItem('reviews', JSON.stringify(this.allReviews))

    
  }

  addLove(){
    this.loved == 0 ? this.loved = this.loved + 1 : this.loved = this.loved - 1
  }
  ngOnInit(): void {
    this.gameId = this._ActivatedRoute.snapshot.params['gameId']
    this.subscription = this._gamesService.getGameDetails(this.gameId).subscribe({
                            next:(res)=> {
                              this.gameDetailsData = res
                              this._gamesService.messageSource.next(this.gameDetailsData.background_image)

                              console.log(res);
                              }
                        })
                        
    this.allReviews = JSON.parse(localStorage.getItem('reviews') || '')
    this.gameScreenshots()
  }
  ngOnDestroy(){
    this.subscription.unsubscribe()
    this._gamesService.messageSource.next('')

  }

}
