import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
// import { ToastrService } from 'ngx-toastr';
import { AuthService } from 'src/app/services/Authentication/auth.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  submitted:boolean=false;
  isLoading:boolean=false;

  // ,private toastr:ToastrService
  constructor(private authService:AuthService,private router:Router) { }

  ngOnInit(): void {
    if (this.authService.isLogin())
    {
      this.router.navigate(['admin'])
    }
    if (this.authService.isAuthenticated()) {
      // this.toastr.info('User is Already Login', 'Redirecting', { timeOut: 3000, })
      alert("User is Already Login")
      this.router.navigate(['./admin']);

    }
  }


LoginForm:FormGroup=new FormGroup({
  email: new FormControl('',{
    validators:[Validators.required,Validators.email]
  }),
  password: new FormControl('',Validators.required)
})

  //login Function
loginUser(){
  this.authService.login(this.LoginForm.value).subscribe({
    next:(res:any)=>{
      if (res.isSuccess===true) {

        localStorage.setItem('accessToken',res.token);
        // this.toastr.success(res.message)
        alert(res.message)
        this.router.navigate(['admin'])
      }
    },
    error: (res:any)=>{
      debugger
      // this.toastr.error(res.message)
      // this.toastr.error(res.error.message)
      alert(res.message)
      console.log(res.message)
    }
  })

}
onsubmit() {
  this.submitted = true;
  if (this.LoginForm.invalid) {
    return;
  }
  else {
    this.isLoading = true
    this.loginUser();
  }
}


}

