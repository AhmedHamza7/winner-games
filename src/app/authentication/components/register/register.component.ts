import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AuthService } from '../../services/auth.service';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  
  constructor(private _authService:AuthService,private _Router:Router) { }

  registerForm:FormGroup = new FormGroup({
    first_name:new FormControl('',[Validators.required, Validators.minLength(3), Validators.maxLength(10)]),
    last_name:new FormControl('',[Validators.required, Validators.minLength(3), Validators.maxLength(10)]),
    email:new FormControl("", [Validators.required, Validators.email]),
    password:new FormControl("", [Validators.required]),
    age:new FormControl("", [Validators.required, Validators.min(18), Validators.max(55)]),
  })

  isLoading:boolean = false
  errorMsg:string = ''
  postRegisterData(){
    this.isLoading = true;
    this._authService.RegisterApi(this.registerForm.value).subscribe({
      next:(e)=> {
        if(e.message == 'success') {
          this.isLoading = false;
          this._Router.navigate(["/login"])
        } else {
          this.errorMsg = e.errors.email.message
          this.isLoading = false;
        }
    }}
    )

  }
  ngOnInit(): void {

  }
  

}
