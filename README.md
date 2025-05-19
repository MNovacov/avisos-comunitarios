# Avisos Comunitarios - Peor Es Nada 🏘️

Aplicación web desarrollada con Ionic + Angular para crear y visualizar avisos de utilidad pública.

## Funcionalidades

1. Proyecto construido con Ionic + Angular (entorno web).
2. Dos pantallas:
   - Listado de publicaciones.
   - Formulario para crear avisos.
3. Estructura dividida en componentes standalone.
4. Persistencia local usando `@capacitor/preferences`.
5. Confirmación antes de eliminar un aviso con `ion-alert`.
6. Fecha asignada automáticamente (sin ingreso manual).
7. Pipe personalizado para mostrar fecha en formato chileno.
8. Validación del formulario:
   - Campos obligatorios.
   - Título mínimo 5 caracteres.
   - Descripción mínima 20 caracteres.
   - Mensajes de error visibles.
9. Captura de fotografía con la cámara del dispositivo.
