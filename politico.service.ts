import { Injectable } from '@angular/core';

export interface Politico {
  id?: number;
  nome: string;
  numero: number;
  partido: string;
  cargo: string;
}

@Injectable({
  providedIn: 'root'
})
export class PoliticoService {
  private storageKey = 'politicos';

  constructor() {}

  getPoliticos(): Politico[] {
    const politicos = localStorage.getItem(this.storageKey);
    return politicos ? JSON.parse(politicos) : [];
  }

  private savePoliticos(politicos: Politico[]): void {
    localStorage.setItem(this.storageKey, JSON.stringify(politicos));
  }

  createPolitico(politico: Politico): void {
    const politicos = this.getPoliticos();
    politico.id = new Date().getTime();
    politicos.push(politico);
    this.savePoliticos(politicos);
  }

  updatePolitico(politicoAtualizado: Politico): void {
    const politicos = this.getPoliticos();
    const index = politicos.findIndex(p => p.id === politicoAtualizado.id);
    if (index > -1) {
      politicos[index] = politicoAtualizado;
      this.savePoliticos(politicos);
    }
  }

  deletePolitico(id: number): void {
    let politicos = this.getPoliticos();
    politicos = politicos.filter(p => p.id !== id);
    this.savePoliticos(politicos);
  }
}
