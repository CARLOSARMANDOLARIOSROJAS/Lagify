# Endpoint: `GET /historial/{id}`

Permite obtener información detallada sobre un usuario específico mediante su identificador único.

## Parámetros de URL
- `{id}` (obligatorio): Identificador único del tema que se desea recuperar.

## Ejemplo de Solicitud
```http
GET /historial/1
```

## Respuesta Exitosa (Código 200 OK)
```json

   {
        "id": 1,
        "idUsuario": 1,
        "fecha": "2023-12-08T20:35:12.000Z",
        "velocidadCarga": 500,
        "velocidadDescarga": 1000,
        "latencia": 20,
        "perdidaPaquetes": 5
    }
```

## Respuestas de Errores Posibles
- Código 404 Not Found:

  ```json
  {
  "errno": 404,
  "error": "not_found",
  "error_description": "No se encontró el historial."
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

- Asegurate de incluir un ID válido en la solicitud para obtener la información
  sobre un tema en específico.