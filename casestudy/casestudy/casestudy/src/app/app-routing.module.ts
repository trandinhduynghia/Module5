import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ListKhachHangComponent} from "./khachhang/list-khach-hang/list-khach-hang.component";
import {CreateKhachHangComponent} from "./khachhang/create-khach-hang/create-khach-hang.component";
import {EditKhachHangComponent} from "./khachhang/edit-khach-hang/edit-khach-hang.component";


const routes: Routes = [
  {path: 'khachhang', component: ListKhachHangComponent},
  {path: 'khachhang/create', component: CreateKhachHangComponent},
  {path: 'khachhang/edit/:id', component: EditKhachHangComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
