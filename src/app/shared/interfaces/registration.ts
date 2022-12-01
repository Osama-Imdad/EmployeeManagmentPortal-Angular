
 export interface IRegisterResponse {
  status: boolean;
  message: string;
}
export interface IRegister {
   firstName:string,
   lastName:string,
   email:string,
   password:string,
   address:string,
   checkTOC:boolean,
}
