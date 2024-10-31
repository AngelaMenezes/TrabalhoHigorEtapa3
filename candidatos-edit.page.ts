
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-candidatos-edit',
  templateUrl: './candidatos-edit.page.html',
  styleUrls: ['./candidatos-edit.page.scss'],
})
export class CandidatosEditPage {
  politico: any = { nome: '', numero: '', partido: '', cargo: '' };
  isEditMode = false;
  politicos: any[] = [];

  constructor(private router: Router) {
    const nav = this.router.getCurrentNavigation();
    if (nav && nav.extras.state && nav.extras.state['politico']) {
      this.politico = { ...nav.extras.state['politico'] }; 
      this.isEditMode = true; 
    }
  }

  ionViewWillEnter() {
    const storedPoliticos = localStorage.getItem('politicos');
    this.politicos = storedPoliticos ? JSON.parse(storedPoliticos) : [];
  }

  salvarPolitico() {
    if (this.isEditMode) {
      
      this.politicos = this.politicos.map(p => p.id === this.politico.id ? this.politico : p);
    } else {
     
      this.politico.id = new Date().getTime();
      this.politicos.push(this.politico);
    }
    localStorage.setItem('politicos', JSON.stringify(this.politicos));
    this.router.navigate(['/home']);
  }
}


