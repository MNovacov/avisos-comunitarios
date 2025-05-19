import { Injectable } from '@angular/core';
import { Preferences } from '@capacitor/preferences';
import { Aviso } from '../models/aviso.model';

@Injectable({
  providedIn: 'root'
})
export class AvisoService {
  private readonly STORAGE_KEY = 'avisos';

  async agregarAviso(aviso: Aviso): Promise<void> {
    const avisos = await this.obtenerAvisos();
    avisos.push(aviso);
    await Preferences.set({
      key: this.STORAGE_KEY,
      value: JSON.stringify(avisos)
    });
  }

  async obtenerAvisos(): Promise<Aviso[]> {
    const result = await Preferences.get({ key: this.STORAGE_KEY });
    return result.value ? JSON.parse(result.value) : [];
  }

  async eliminarAviso(id: number): Promise<void> {
    const avisos = await this.obtenerAvisos();
    const filtrados = avisos.filter(a => a.id !== id);
    await Preferences.set({
      key: this.STORAGE_KEY,
      value: JSON.stringify(filtrados)
    });
  }
}
