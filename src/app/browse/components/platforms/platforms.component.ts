
import { Component, OnInit } from '@angular/core';
import { BrowseService } from '../../services/browse.service';

@Component({
  selector: 'app-platforms',
  templateUrl: './platforms.component.html',
  styleUrls: ['./platforms.component.scss']
})
export class PlatformsComponent implements OnInit {

  platformsData:any[] = []
  first3Items:any[] = []
  constructor(private _browseService:BrowseService) { }

  gradientBackground(img:any){
    return `linear-gradient(rgba(32, 32, 32, 0.52), rgba(32, 32, 32, 1)),url(${img})`
  }

  getThreeItems(){
      this.first3Items = this.platformsData.map(ele => {
        return ele.games.slice(0, 3)
      })
  }
  getPlatformsData(){
    this._browseService.getBrowseData('platforms').subscribe({
      next:(res) => {
        this.platformsData = res.results

        this.getThreeItems()
      }
    })
;

  }
  ngOnInit(): void {

    this.getPlatformsData()
  //   this._browseService.getBrowseData('platforms').subscribe({
  //     next:(res) => { for(let x = 0; x < 3; x++){
  //                     console.log(res.results[x].games[x]);
  //      }
  // }})

    
    
  }

}
