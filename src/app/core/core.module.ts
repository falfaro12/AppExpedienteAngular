import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { BannerComponent } from './banner/banner.component';
import { FooterComponent } from './footer/footer.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { AppRoutingModule } from '../app-routing.module';
import { FormsModule } from '@angular/forms';




@NgModule({
  declarations: [HeaderComponent, BannerComponent, FooterComponent, PageNotFoundComponent],
  imports: [
    CommonModule, FormsModule, AppRoutingModule
  ],
  exports: [HeaderComponent, BannerComponent, FooterComponent]
})
export class CoreModule { }
