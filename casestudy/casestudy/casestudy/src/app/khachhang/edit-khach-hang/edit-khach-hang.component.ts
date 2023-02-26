import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";
import {KhachhangService} from "../../service/khachhang.service";
import {ActivatedRoute, ParamMap} from "@angular/router";

@Component({
  selector: 'app-edit-khach-hang',
  templateUrl: './edit-khach-hang.component.html',
  styleUrls: ['./edit-khach-hang.component.css']
})
export class EditKhachHangComponent implements OnInit {
  khachHangForm: FormGroup;
  id: number;

  constructor(private khachhangService: KhachhangService,
              private activatedRoute: ActivatedRoute) {
    this.activatedRoute.paramMap.subscribe((paramMap: ParamMap) => {
      this.id = +paramMap.get('id');
      this.getKhachHang(this.id);
      });
  }

  ngOnInit(): void {
  }

  getKhachHang(id: number) {
    return this.khachhangService.getById(id).subscribe(khachhang => {
      this.khachHangForm = new FormGroup({
        id: new FormControl(khachhang.id),
        loaiKH: new FormControl(khachhang.loaiKH),
        hoTen: new FormControl(khachhang.hoTen),
        ngaySinh: new FormControl(khachhang.ngaySinh),
        cmnd: new FormControl(khachhang.cmnd),
        sdt: new FormControl(khachhang.sdt),
        email: new FormControl(khachhang.email),
        diaChi: new FormControl(khachhang.diaChi)
      });
    });
  }

  updateKhachHang(id: number) {
    const khachHang = this.khachHangForm.value;
    this.khachhangService.updateKhachHang(id, khachHang).subscribe(() => {
      alert('Cập nhật thành công!');
    }, e => {
      console.log(e);
    });
  }

}
