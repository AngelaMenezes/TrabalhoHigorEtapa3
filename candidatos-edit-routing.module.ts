
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CandidatosEditPage } from './candidatos-edit.page';

const routes: Routes = [
  {
    path: '',
    component: CandidatosEditPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CandidatoEditPageRoutingModule {}
