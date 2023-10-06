import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { HeaderFooterTemplate } from './templates/header-footer-template/header-footer-template.component';

@NgModule({
  declarations: [
    FooterComponent,
    HeaderComponent,
    HeaderFooterTemplate
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    HeaderFooterTemplate
  ]
})
export class SharedModule { }
