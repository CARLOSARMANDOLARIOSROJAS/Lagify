# Endpoint: `GET /historial`

Permite obtener información detallada sobre todos los historiales disponibles


## Ejemplo de Solicitud
```http
GET /historial
```

## Respuesta Exitosa (Código 200 OK)
```json

[
    {
        "id": 1,
        "idUsuario": 1,
        "fecha": "2023-12-08T20:35:12.000Z",
        "velocidadCarga": 500,
        "velocidadDescarga": 1000,
        "latencia": 20,
        "perdidaPaquetes": 5
    },
    {
        "id": 3,
        "idUsuario": 3,
        "fecha": "2023-12-08T20:35:12.000Z",
        "velocidadCarga": 600,
        "velocidadDescarga": 800,
        "latencia": 18,
        "perdidaPaquetes": 1
    },
    {
        "id": 10,
        "idUsuario": 2,
        "fecha": "2023-12-09T03:53:04.000Z",
        "velocidadCarga": 200,
        "velocidadDescarga": 200,
        "latencia": 20,
        "perdidaPaquetes": 5
    }
]
```

## Respuestas de Errores Posibles
- Código 404 Not Found:

  ```json
  {
  "errno": 404,
  "error": "not_found",
  "error_description": "No se encontraron historiales."
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

