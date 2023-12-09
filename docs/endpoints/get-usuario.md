# Endpoint: `GET /usuario`

Permite obtener información detallada sobre todos los usuarios disponibles


## Ejemplo de Solicitud
```http
GET /usuario
```

## Respuesta Exitosa (Código 200 OK)
```json

 [
    {
        "id_usuario": 1,
        "nombre": "Juan",
        "apellido": "Perez",
        "correoElectronico": "juan.perez@example.com",
        "contrasena": "clave123"
    },
    {
        "id_usuario": 2,
        "nombre": "MarÃ­a",
        "apellido": "Rodriguez",
        "correoElectronico": "maria.rodriguez@example.com",
        "contrasena": "contrasenaSegura"
    },
    {
        "id_usuario": 3,
        "nombre": "Carlos",
        "apellido": "Gonzalez",
        "correoElectronico": "carlos.gonzalez@example.com",
        "contrasena": "miPassword123"
    },
    {
        "id_usuario": 5,
        "nombre": "Prueba Dos",
        "apellido": "Larios",
        "correoElectronico": "Larios@mail.com",
        "contrasena": "12345"
    }
]
```

## Respuestas de Errores Posibles
- Código 404 Not Found:

  ```json
  {
  "errno": 404,
  "error": "not_found",
  "error_description": "No se encontró el usuario."
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

