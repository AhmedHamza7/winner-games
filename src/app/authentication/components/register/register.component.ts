import { GamesService } from './../../../games/services/games.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  
  constructor(private _gameService:GamesService) { }

  registerForm:FormGroup = new FormGroup({
    first_name:new FormControl('',[Validators.required, Validators.minLength(3), Validators.maxLength(10)]),
    last_name:new FormControl('',[Validators.required, Validators.minLength(3), Validators.maxLength(10)]),
    email:new FormControl("", [Validators.required, Validators.email]),
    password:new FormControl("", [Validators.required]),
    age:new FormControl("", [Validators.required, Validators.min(18), Validators.max(55)]),
  })
  ngOnInit(): void {
  }
  

}
