import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {KhachhangService} from "../../service/khachhang.service";

@Component({
  selector: 'app-create-khach-hang',
  templateUrl: './create-khach-hang.component.html',
  styleUrls: ['./create-khach-hang.component.css']
})
export class CreateKhachHangComponent implements OnInit {
  khachHangForm: FormGroup;

  constructor(private khachhangService: KhachhangService,
              private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.khachHangForm = this.formBuilder.group({
      id: ['',[Validators.required]],
      loaiKH: ['',[Validators.required]],
      hoTen: ['',[Validators.required, Validators.minLength(3)]],
      ngaySinh: ['',[Validators.required]],
      cmnd: ['',[Validators.required]],
      sdt: ['', [Validators.required, Validators.pattern("^([0-9]{10})$")]],
      email: ['', [Validators.required, Validators.email]],
      diaChi: ['', [Validators.required]],
    });

  }

  getKhachHang(){
    const khachhang = this.khachHangForm.value;
    this.khachhangService.addKhachHang(khachhang).subscribe(() =>{
      this.khachHangForm.reset();
      alert('Tạo thành công!');
      }, e => {
      console.log(e);
      });
  }

}
