import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { HeaderFooterTemplate } from './templates/header-footer-template/header-footer-template.component';
import { ButtonComponent } from './components/button/button.component';
import { ButtonAnchorComponent } from './components/button-anchor/button-anchor.component';

@NgModule({
  declarations: [
    FooterComponent,
    HeaderComponent,
    HeaderFooterTemplate,
    ButtonComponent,
    ButtonAnchorComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    HeaderFooterTemplate,
    ButtonComponent,
    ButtonAnchorComponent
  ]
})
export class SharedModule { }

export { HeaderFooterTemplate, ButtonComponent, ButtonAnchorComponent };