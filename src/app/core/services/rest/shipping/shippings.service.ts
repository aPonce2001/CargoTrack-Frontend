import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Shipping } from 'src/app/core/core.module';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ShippingsService {
  private readonly apiUrl = environment.apiUrl + 'Shipping';

  constructor(private http: HttpClient) {}

  getShippings(): Observable<Shipping[]> {
    return this.http.get<Shipping[]>(`${this.apiUrl}`);
  }

  getShippingById(id: number): Observable<Shipping> {
    return this.http.get<Shipping>(`${this.apiUrl}/${id}`);
  }

  createShipping(shipping: Shipping): Observable<Shipping> {
    return this.http.post<Shipping>(`${this.apiUrl}`, shipping);
  }

  updateShipping(id: number, shipping: Shipping): Observable<void> {
    return this.http.put<void>(`${this.apiUrl}/${id}`, shipping);
  }

  deleteShipping(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }

  getShippingsByCustomerId(customerId: number): Observable<Shipping[]> {
    return this.http.get<Shipping[]>(`${this.apiUrl}/ByCustomerId?customerId=${customerId}`);
  }
}
