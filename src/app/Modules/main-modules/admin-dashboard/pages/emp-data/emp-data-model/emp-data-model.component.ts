import { Component, EventEmitter, Input, OnChanges, OnDestroy, OnInit, Output } from '@angular/core';
import {
  AbstractControl,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { EmpDataService } from 'src/app/services/empolyeeData/emp-data.service';


@Component({
  selector: 'app-emp-data-model',
  templateUrl: './emp-data-model.component.html',
  styleUrls: ['./emp-data-model.component.scss']
})
export class EmpDataModelComponent implements OnInit, OnDestroy, OnChanges   {
  @Output() modalChange: EventEmitter<boolean> = new EventEmitter<boolean>();
  @Input() editempolyeeData:mod;
  @Input() getAllempolyees:()=>void
  portfilioBase64!: any;
  submitted: boolean = false;
  isLoading: boolean = true;
  emp:any=null;
  constructor(private _empolyeeData:EmpDataService,private toastr: ToastrService,) { }

  ngOnInit(): void {
    // this.createForm()



    // this.emp = localStorage.getItem("employeeData")
    // if(this.emp){
    //   this.portfolioForm.patchValue(this.emp)
    // }
  }

  ngOnDestroy(): void{
    this.emp=null;
}

ngOnChanges(): void{
  debugger
  if(this.editempolyeeData){
    this.portfolioForm.patchValue(this.editempolyeeData)
  }
}

 portfolioForm: FormGroup = new FormGroup({
    id: new FormControl('0'),
    name: new FormControl('', Validators.required),
    department: new FormControl('', Validators.required),
    designation: new FormControl('', Validators.required),
    contactNum: new FormControl('', Validators.required)
  });



  get f(): { [key: string]: AbstractControl } {
    return this.portfolioForm.controls;
  }

  Portfolio_Image(event: any | Event) {
    let reader = new FileReader(); // HTML5 FileReader API
    let file = event.target.files[0];
    if (event.target.files && event.target.files[0]) {
      reader.readAsDataURL(file);
      reader.onload = (event) => {
        //   this.portfolioForm.patchValue({
        //     Profileimage: event.target?.result
        //     // userProfileImage: file.name
        //   })
        //   console.log(reader.result)
        // }
        this.portfilioBase64 = event.target?.result;
        console.log(this.portfilioBase64);
      };
    }
  }


  File: any = '';
  fileName!: string;
  filechoose(event: any) {
    debugger;
    const uploadedFile = event.target.files[0];
    this.File = uploadedFile;
    this.fileName = uploadedFile.name;
    this.portfolioForm.get('projectImage')?.setValue(uploadedFile);
    console.log(this.File);
  }



  OnSubmit() {
    debugger;
    this.submitted = true;
    console.log(this.portfolioForm.value);
    if (this.portfolioForm.invalid) {
      return;
    } else {
      const Data = this.portfolioForm.value;
      if (this.editempolyeeData === undefined) {
        debugger
        this.isLoading = true;
        this._empolyeeData.CreateNewEmpolyee(this.portfolioForm.value).subscribe(

          (response) => {
            console.log(response);
            if (response) {
              debugger;
              // this.toastr.success(response.message);
              // alert('response.message')
              // console.log(response);
              this.toastr.success("Employee Added Successfully")
              // alert("Employee Added Successfully")
              this.modalChange.emit(this.submitted);
              // location.reload();
              this.getAllempolyees()
              this.submitted = true;
              this.isLoading = false;
            } else if (response.errors) {
              debugger;
               this.toastr.error("Employee Not added");
            } else {
              // this.toastr.info('Something Went wrong');
             this.toastr.info("Something Went Wrong")
            }
          },
          (error) => {
            console.log(error);
          }
        );
      } else {
        this.isLoading = true;

        this._empolyeeData.update(Data).subscribe(
          (response) => {
            this.toastr.success(response.message);
            console.log(response);

            this.submitted = true;
            this.modalChange.emit(this.submitted);
            this.getAllempolyees()

            this.isLoading = false;
          },
          (error) => {
            console.log(error);
          }
        );
      }
    }
  }
}

export class mod {
  id:any;
  name:string;
  department:string;
  contactNum:string;
  designation:string;

}
