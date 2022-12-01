import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, map, retry } from 'rxjs/operators';
import {API_ENDPOINTS} from '../../shared/api-Endpoints/global'

@Injectable({
  providedIn: 'root'
})
export class EmpDataService {

  constructor(private http: HttpClient) {}

  CreateNewEmpolyee(data: any) {
    return this.http.post<any[]>(API_ENDPOINTS.newEmpolyee, data).pipe(
      map((res: any) => {
        return res;
      }),
      retry(1),
      catchError(this.handleError)
    );
  }



  public update(data: any): Observable<any> {
    debugger
    var id = data.id;
    return this.http
      .post<any[]>(`${API_ENDPOINTS.updateEmpolyee}`, data)
      .pipe(
        map((res: any) => {
          return res;
        }),
        retry(1),
        catchError(this.handleError)
      );
  }



  public getAll(): Observable<any> {
    return this.http
      .get<any>(API_ENDPOINTS.getAllempolyees)
      .pipe(
        map((res: any) => {
          return res;
        }),
        retry(1),
        catchError(this.handleError)
      );
  }

  public getSearchResult(searchText: any) {
    return this.http
      .get<any>(API_ENDPOINTS.userSearch + searchText)
      .pipe(
        map((res: any) => {
          return res;
        }),
        retry(1),
        catchError(this.handleError)
      );
  }


  deleteEmpolyee(_id: any): Observable<any[]> {
    debugger
    return this.http.delete<any[]>(`${API_ENDPOINTS.deleteEmpolyeeByID}/${_id}`);
  }

  // Error Handling Function
  handleError(error: any) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      // client-side error
      errorMessage = `Error: ${error.error.message}`;
    } else {
      // server-side error
      errorMessage = `Error Code: ${error.status}\n Message: ${error.message}`;
    }
    console.log(` Error From Handler: ${errorMessage}`);

    return throwError(errorMessage);
  }
}
