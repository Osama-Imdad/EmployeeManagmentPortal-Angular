import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, ValidationErrors, ValidatorFn, Validators } from '@angular/forms';
// import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/Authentication/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  submitted:boolean=false;
  loading:boolean=false;

  // private toastr: ToastrService,
  constructor(private router:Router,private authService:AuthService) { }

  ngOnInit(): void {
  }
  checkPasswords: ValidatorFn = (
    group: AbstractControl
  ): ValidationErrors | null => {
    let pass = group.value.password;
    let confirmPass = group.value.confirmPassword;
    if (pass.length < 8) return { minLength: true };
    if (
      this.RegisterForm.controls['password']?.errors?.['pattern'] ||
      this.RegisterForm.controls['confirmPassword']?.errors?.['pattern']
    )
      return { pattern: true };
    return pass === confirmPass ? null : { notSame: true };
  };


  RegisterForm: FormGroup = new FormGroup({
    firstName: new FormControl('',[Validators.required]),
    lastName: new FormControl('',[Validators.required]),
    email: new FormControl('', {validators: [Validators.required, Validators.email]}),
    password: new FormControl('', {validators: [Validators.required, Validators.minLength(8)]}),
   confirmPassword: new FormControl('',[Validators.required]),
   checkTOC:new FormControl('',Validators.required),
    address: new FormControl('',[Validators.required])},
   { validators: this.checkPasswords,}
   )


  get f(): { [key: string]: AbstractControl } {
    return this.RegisterForm.controls;
  }

  onSubmit() {
    debugger
    this.submitted = true;
    console.log(this.RegisterForm.value);
    if (this.RegisterForm.invalid) {
      return;
    }

    if (this.RegisterForm.valid) {
      let formValue = this.RegisterForm.value;
      delete formValue.confirmPassword;
      console.log(formValue);
      this.authService.signUp(formValue).subscribe((res: any) => {
        if (res.status) {
          // this.toastr.success(res.message);
          alert("res.message")
          this.router.navigate(['login']);
        }
        else {
          // this.toastr.error(res.message);
          alert("res.message")
        }
      });
    }
      }
}

