import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Router } from '@angular/router';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { Camera, CameraResultType, CameraSource } from '@capacitor/camera';
import { AvisoService } from '../../services/aviso.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.page.html',
  styleUrls: ['./form.page.scss'],
  standalone: true,
  imports: [
    CommonModule,
    IonicModule,
    ReactiveFormsModule,
    RouterModule  
  ]
})
export class FormPage {
  imagenPreview: string | null = null;

  avisoForm = this.fb.group({
    titulo: ['', [Validators.required, Validators.minLength(5)]],
    descripcion: ['', [Validators.required, Validators.minLength(20)]],
    fecha: [new Date().toISOString()],
  });

  constructor(
    private fb: FormBuilder,
    private avisoService: AvisoService,
    private router: Router
  ) {}

  async capturarFoto() {
    try {
      const imagen = await Camera.getPhoto({
        resultType: CameraResultType.DataUrl,
        source: CameraSource.Camera,
        quality: 70,
      });

      this.imagenPreview = imagen.dataUrl!;
    } catch (err) {
      console.log('Captura cancelada o fallida', err);
    }
  }

  async guardarAviso() {
    if (this.avisoForm.invalid) return;

    const form = this.avisoForm.value;

    const nuevoAviso = {
      id: Date.now(),
      titulo: form.titulo ?? '',
      descripcion: form.descripcion ?? '',
      fecha: form.fecha ?? '',
      tipo: 'General',
      valor: 0,
      imagen: this.imagenPreview ?? ''
    };

    await this.avisoService.agregarAviso(nuevoAviso);
    this.router.navigate(['/list']);
  }

  get titulo() {
    return this.avisoForm.get('titulo');
  }

  get descripcion() {
    return this.avisoForm.get('descripcion');
  }
}
