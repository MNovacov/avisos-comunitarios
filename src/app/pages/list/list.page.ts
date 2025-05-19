import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterModule } from '@angular/router';
import { IonicModule, AlertController } from '@ionic/angular';

import { AvisoService } from '../../services/aviso.service';
import { Aviso } from '../../models/aviso.model';
import { FormatearFechaPipe } from '../../pipes/formatear-fecha.pipe';

@Component({
  selector: 'app-list',
  templateUrl: './list.page.html',
  styleUrls: ['./list.page.scss'],
  standalone: true,
  imports: [
    CommonModule,
    IonicModule,
    RouterModule,
    FormatearFechaPipe
  ]
})
export class ListPage {
  avisos: Aviso[] = [];

  constructor(
    private avisoService: AvisoService,
    private router: Router,
    private alertCtrl: AlertController
  ) {}

  ionViewWillEnter() {
    this.cargarAvisos();
  }

  async cargarAvisos() {
    this.avisos = await this.avisoService.obtenerAvisos();
  }

  nuevoAviso() {
    this.router.navigateByUrl('/form');
  }

  async confirmarEliminar(index: number) {
    const alerta = await this.alertCtrl.create({
      header: '¿Eliminar?',
      message: '¿Estás seguro que deseas eliminar esta publicación?',
      buttons: [
        { text: 'Cancelar', role: 'cancel' },
        {
          text: 'Eliminar',
          handler: async () => {
            const id = this.avisos[index].id;
            await this.avisoService.eliminarAviso(id);
            this.cargarAvisos();
          },
        },
      ],
    });

    await alerta.present();
  }
}
