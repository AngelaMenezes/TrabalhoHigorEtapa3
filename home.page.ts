import { Component, OnInit } from '@angular/core';
import { PoliticoService, Politico } from '../services/politico.service';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {
  salvarPolitico(arg0: { nome: string; numero: number; partido: string; cargo: string; }) {

  }
  politicos: Politico[] = [];

  constructor(private politicoService: PoliticoService, private alertController: AlertController) {}

  ngOnInit() {
    this.loadPoliticos();
  }

  // Carregar todos os políticos do Local Storage
  loadPoliticos() {
    this.politicos = this.politicoService.getPoliticos();
  }

  // Adicionar um novo político
  async adicionarPolitico() {
    const alert = await this.alertController.create({
      header: 'Adicionar Político',
      inputs: [
        { name: 'nome', placeholder: 'Nome', type: 'text' },
        { name: 'numero', placeholder: 'Número de Votação', type: 'number' },
        { name: 'partido', placeholder: 'Partido', type: 'text' },
        { name: 'cargo', placeholder: 'Cargo', type: 'text' }
      ],
      buttons: [
        { text: 'Cancelar', role: 'cancel' },
        {
          text: 'Adicionar',
          handler: (data) => {
            const novoPolitico: Politico = {
              nome: data.nome,
              numero: data.numero,
              partido: data.partido,
              cargo: data.cargo
            };
            this.politicoService.createPolitico(novoPolitico);
            this.loadPoliticos();  // Atualizar a lista de políticos
          }
        }
      ]
    });
    await alert.present();
  }

  // Editar um político existente
  async editarPolitico(politico: Politico) {
    const alert = await this.alertController.create({
      header: 'Editar Político',
      inputs: [
        { name: 'nome', placeholder: 'Nome', value: politico.nome, type: 'text' },
        { name: 'numero', placeholder: 'Número de Votação', value: politico.numero, type: 'number' },
        { name: 'partido', placeholder: 'Partido', value: politico.partido, type: 'text' },
        { name: 'cargo', placeholder: 'Cargo', value: politico.cargo, type: 'text' }
      ],
      buttons: [
        { text: 'Cancelar', role: 'cancel' },
        {
          text: 'Salvar',
          handler: (data) => {
            const politicoAtualizado: Politico = {
              id: politico.id,
              nome: data.nome,
              numero: data.numero,
              partido: data.partido,
              cargo: data.cargo
            };
            this.politicoService.updatePolitico(politicoAtualizado);
            this.loadPoliticos();  // Atualizar a lista de políticos
          }
        }
      ]
    });
    await alert.present();
  }

  // Excluir um político
  excluirPolitico(id: number) {
    this.politicoService.deletePolitico(id);
    this.loadPoliticos();  // Atualizar a lista de políticos
  }
}
