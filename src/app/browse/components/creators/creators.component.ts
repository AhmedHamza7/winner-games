import { BrowseService } from './../../services/browse.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-creators',
  templateUrl: './creators.component.html',
  styleUrls: ['./creators.component.scss']
})
export class CreatorsComponent implements OnInit {

  constructor(private _browseService:BrowseService) { }

  creatorsData:any[] = []
  first3Items:any[] = []
  gradientBackground(img:any){
    return `linear-gradient(rgba(32, 32, 32, 0.52), rgba(32, 32, 32, 1)),url(${img})`
  }

  getThreeItems(){
    this.first3Items = this.creatorsData.map(ele => {
      return ele.games.slice(0, 3)
    })
}
  getCreatorsData(){
    this._browseService.getBrowseData('creators').subscribe({
      next:(res) => {
        this.creatorsData = res.results
        this.getThreeItems()
        console.log(res.results);
        
      }
    })
  }
  ngOnInit(): void {
    this.getCreatorsData()
  }

}
