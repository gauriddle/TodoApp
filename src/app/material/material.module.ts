import { NgModule } from '@angular/core';
import {MatIconModule} from '@angular/material/icon';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatButtonToggleModule} from '@angular/material/button-toggle';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import {MatFormFieldModule} from '@angular/material/form-field';


const MaterialComponents =[
  MatIconModule,
  MatToolbarModule,
  MatButtonToggleModule,
  MatSlideToggleModule,
  MatFormFieldModule
];

@NgModule({
  
  imports: [ MaterialComponents],
  exports: [ MaterialComponents]
})
export class MaterialModule { }
