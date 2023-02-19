import { Component, OnInit } from '@angular/core';
import { BrowseService } from '../../services/browse.service';

@Component({
  selector: 'app-collections',
  templateUrl: './collections.component.html',
  styleUrls: ['./collections.component.scss']
})
export class CollectionsComponent implements OnInit {

  constructor(private _browseService:BrowseService) { }

  collectionsData:any[] = []
  first3Items:any[] = []
  gradientBackground(img:any){
    return `linear-gradient(to bottom, rgba(32, 32, 32, 0.6), rgba(32, 32, 32, 1)),url(${img})`
  }

  getCreatorsData(){
    this._browseService.getBrowseData('collections').subscribe({
      next:(res) => {
        this.collectionsData = res.results
        console.log(res.results);
        
      }
    })
  }
  ngOnInit(): void {
    this.getCreatorsData()
  }

}
