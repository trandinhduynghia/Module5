import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Khachhang} from "../model/khachhang";

@Injectable({
  providedIn: 'root'
})
export class KhachhangService {

  readonly API_URL = 'http://localhost:3000/khachhangs';

  constructor(private httpClient: HttpClient) { }

  getAllKhachHang(): Observable<Khachhang[]>{
    return this.httpClient.get<Khachhang[]>(this.API_URL).pipe();
  }

  addKhachHang(khachhang: Partial<Khachhang>): Observable<Khachhang>{
    return this.httpClient.post<Khachhang>(this.API_URL, khachhang);
  }

  deleteKhachHang(id: number): Observable<any>{
    return this.httpClient.delete(`${this.API_URL}/${id}`);
  }

  updateKhachHang(id: number, khachhang: Khachhang): Observable<Khachhang>{
    return this.httpClient.patch<Khachhang>(`${this.API_URL}/${khachhang.id}`, khachhang);
  }

  getById(id: number): Observable<Khachhang>{
    return this.httpClient.get<Khachhang>(`${this.API_URL}/${id}`);
  }
}
