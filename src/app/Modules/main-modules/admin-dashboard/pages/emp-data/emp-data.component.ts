import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { ToastrService } from 'ngx-toastr';
import {
  ConfirmationService,
  ConfirmEventType,
  MessageService,
} from 'primeng/api';
import { IPagination } from 'src/app/shared/interfaces/pagination';
// import { IPagination } from 'src/app/shared/interface/pagination';
// import { IUserEntity } from 'src/app/shared/interface/user';
// import { PortfiloService } from '../../../../../services/portfilo/portfilo.service';
import {EmpDataService} from '../../../../../services/empolyeeData/emp-data.service'
@Component({
  selector: 'app-emp-data',
  templateUrl: './emp-data.component.html',
  styleUrls: ['./emp-data.component.scss']
})
export class EMPDataComponent implements OnInit {
  EmpolyeeData: any = [];
  openModal: boolean = false;
  editempolyeeData: any;
  totalRecords: any;
  empolyeesData: any;
  fn:any
  constructor(
    private sanitizer: DomSanitizer,
    private confirmationService: ConfirmationService,
    private messageService: MessageService,
    private _empDataService:EmpDataService,
    private toastr: ToastrService,
  ) {}

  ngOnInit(): void {
    this.getAllempolyees();
  }

  EmpolyeeModal(response: boolean) {
    this.openModal = response;
    // this.apiDataLoad()
  }

  editPortfilo(item: any) {
    this.EmpolyeeModal(true);
    // localStorage.setItem("employeeData",item)
    this.editempolyeeData = item;
    // this.apiDataLoad()
  }

  toggleActiveStatus(userObject: any) {
    debugger;
    this._empDataService.update(userObject).subscribe((res: any) => {
      if (res.status === true) {
        this.toastr.success(res.message);
        // alert(res.message)
      } else {
        this.toastr.error('Failed To Update  Status');
        // alert(res.message)
      }
    });
  }



  search(searchText: any, event?: IPagination) {
    if (searchText?.length) {
      this._empDataService
        .getSearchResult(searchText)
        .subscribe((response) => {
          this.empolyeesData = response.users;
        });
    } else {
      this.getAllempolyees();
    }
  }



   getAllempolyees=()=> {

    this._empDataService.getAll().subscribe(
      (res: any) => {
        debugger
        console.log('DATA::::', res);
        this.empolyeesData = res;
        this.totalRecords = res.length;
      },
      (error) => {
        console.log(error);
      }
    );
  }

  // delete record
  OnDeleteRecord(_id: any) {
    console.log('delete');
    console.log(_id);
    debugger;
    this.confirmationService.confirm({
      message: 'Do you want to delete this record?',
      header: 'Delete Confirmation',
      icon: 'pi pi-info-circle',
      accept: () => {
        debugger;
        this._empDataService.deleteEmpolyee(_id).subscribe(
          (data: any) => {
            this.toastr.success(data.message);
            // alert('data.message')
            this.getAllempolyees();
          },
          (error) => {
            console.log(error);
            this.toastr.error(error)
          }
        );
      },
      reject: (type: any) => {
        switch (type) {
          case ConfirmEventType.REJECT:
            this.messageService.add({
              severity: 'error',
              summary: 'Rejected',
              detail: 'You have rejected',
            });
            break;
          case ConfirmEventType.CANCEL:
            this.messageService.add({
              severity: 'warn',
              summary: 'Cancelled',
              detail: 'You have cancelled',
            });
            break;
        }
      },
      key: 'deleteAlert',
    });
  }
}
