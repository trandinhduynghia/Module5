import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import {HttpClientModule} from "@angular/common/http";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {ListKhachHangComponent} from "./khachhang/list-khach-hang/list-khach-hang.component";
import {CreateKhachHangComponent} from "./khachhang/create-khach-hang/create-khach-hang.component";
import { EditKhachHangComponent } from './khachhang/edit-khach-hang/edit-khach-hang.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    ListKhachHangComponent,
    CreateKhachHangComponent,
    EditKhachHangComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
