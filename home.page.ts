
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage {
  politicos: any[] = [];

  constructor(private router: Router) {}

  ionViewWillEnter() {
    this.carregarPoliticos(); 
  }

  carregarPoliticos() {
    const storedPoliticos = localStorage.getItem('politicos');
    this.politicos = storedPoliticos ? JSON.parse(storedPoliticos) : [];
  }

  adicionarPolitico() {
    this.router.navigate(['/candidatos-edit']);
  }

  editarPolitico(politico: any) {
    this.router.navigate(['/candidatos-edit'], { state: { politico } });
  }

  excluirPolitico(id: number) {
    this.politicos = this.politicos.filter(p => p.id !== id);
    localStorage.setItem('politicos', JSON.stringify(this.politicos));
  }
}



