# Endpoint: `POST/historial`

Permite crear un nuevo usuario.

## Parámetros del Cuerpo (JSON)
- `idUsuario` (obligatorio): Id del usuario.
- `velocidadCarga` (obligatorio): La velocidad de la nueva carga.
- `velocidadDescarga` (obligatorio): Velocidad de descarga.
- `latencia` (obligatorio): Latencia nueva.
- `perdidaPaquetes` (obligatorio): Pérdida de paquetes.


## Ejemplo de Solicitud
```http
POST /historial/{id}
Content-Type: application/json

 
  {
  "idUsuario": 2,
  "velocidadCarga": 200,
  "velocidadDescarga": 200,
  "latencia": 20,
  "perdidaPaquetes": 5
}


```

## Respuesta Exitosa (Código 200 OK)
```json
{
  "id_usuario": 4,
  "mensaje": "historial creado exitosamente."
}
```

## Respuestas de Errores Posibles
- Código 404 Not Found:

  ```json
  {
  "errno": 400,
  "error": "bad_request",
  "error_description": "Faltan parámetros obligatorios en la solicitud."
  }
  ```

- Código 500 Internal Server Error:
  ```json
  {
  "errno": 500,
  "error": "internal_error",
  "error_description": "Ocurrió un problema para procesar la solicitud"
  }
  ``` 

## Notas Adicionales

- Asegurate de incluir datos válido en la solicitud para obtener la información
  sobre un tema en específico.