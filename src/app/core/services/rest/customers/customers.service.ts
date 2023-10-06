import { Injectable } from '@angular/core';
import { Customer } from 'src/app/core/core.module';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CustomersService {

  private readonly URL = environment.apiUrl + 'Customer';

  constructor(private http: HttpClient) { }

  getCustomers(): Observable<Customer[]> {
    return this.http.get<Customer[]>(this.URL);
  }

  getCustomer(id: number): Observable<Customer> {
    return this.http.get<Customer>(`${this.URL}/${id}`);
  }

  createCustomer(customer: Customer): Observable<Customer> {
    return this.http.post<Customer>(this.URL, customer);
  }
}
