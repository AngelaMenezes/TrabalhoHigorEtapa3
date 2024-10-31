
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { CandidatoEditPageRoutingModule } from './candidatos-edit-routing.module';
import { CandidatosEditPage } from './candidatos-edit.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CandidatoEditPageRoutingModule
  ],
  declarations: [CandidatosEditPage]
})
export class CandidatoEditPageModule {}
