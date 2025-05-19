import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'formatearFecha',
  standalone: true,
})
export class FormatearFechaPipe implements PipeTransform {
  transform(fechaISO: string): string {
    const fecha = new Date(fechaISO);
    return fecha.toLocaleDateString('es-CL', {
      day: '2-digit',
      month: '2-digit',
      year: 'numeric',
    });
  }
}
