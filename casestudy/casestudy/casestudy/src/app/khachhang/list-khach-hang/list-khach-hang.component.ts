import { Component, OnInit } from '@angular/core';
import {KhachhangService} from "../../service/khachhang.service";
import {Khachhang} from "../../model/khachhang";
import {Route, Router} from "@angular/router";

@Component({
  selector: 'app-list-khach-hang',
  templateUrl: './list-khach-hang.component.html',
  styleUrls: ['./list-khach-hang.component.css']
})
export class ListKhachHangComponent implements OnInit {
  khachHangs: Khachhang[] = [];
  khachHang: Khachhang = {};

  constructor(private khachhangService: KhachhangService,
              private router: Router) { }

  ngOnInit(): void {
    this.khachhangService.getAllKhachHang().subscribe(
      data => this.khachHangs = data,
    );
  }

  deleteKhachHang(id: number) {
    this.khachhangService.deleteKhachHang(id).subscribe(data => {
      this.khachHang = {};
      document.getElementById('deleteModal').click();
      this.ngOnInit();
    })
  }

  delete(khachhang: Khachhang){
    this.khachHang = khachhang;
  }




}
