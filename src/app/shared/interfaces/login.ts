
export interface Ilogin {
  email:string;
  password:string
}
export interface ILoginResponse {
  isSuccess:boolean;
  token:string;
  message:string;
  error:any;
  expireDate:Date
}

export interface IUser {
  fName:string,
  lName:string,
  email:string,
  token:string
}
