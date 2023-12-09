-- Crear la base de datos si no existe
CREATE DATABASE IF NOT EXISTS lagify;

-- Usar la base de datos
USE lagify;

-- Crear la tabla Usuarios
CREATE TABLE Usuarios (
    id_usuario INT PRIMARY KEY AUTO_INCREMENT,
    nombre VARCHAR(255) NOT NULL,
    apellido varchar (255) NOT NULL,
    correoElectronico VARCHAR(255) NOT NULL,
    contrasena VARCHAR(255) NOT NULL
);


-- Crear la tabla HistorialDiagnostico con columnas especÃ­ficas para velocidad, latencia y pÃ©rdida de paquetes
CREATE TABLE HistorialDiagnostico (
    id INT PRIMARY KEY AUTO_INCREMENT,
    idUsuario INT,
    fecha TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    velocidadCarga INT,
    velocidadDescarga INT,
    latencia INT,
    perdidaPaquetes INT,
    FOREIGN KEY (idUsuario) REFERENCES Usuarios(id_usuario)
);


-- Inserciones en la tabla Usuarios
INSERT INTO Usuarios (nombre, apellido, correoElectronico, contrasena) VALUES
    ('Juan', 'PÃ©rez', 'juan.perez@example.com', 'clave123'),
    ('MarÃ­a', 'RodrÃ­guez', 'maria.rodriguez@example.com', 'contraseÃ±aSegura'),
    ('Carlos', 'GonzÃ¡lez', 'carlos.gonzalez@example.com', 'miPassword123');

-- Inserciones en la tabla HistorialDiagnostico
INSERT INTO HistorialDiagnostico (idUsuario, velocidadCarga, velocidadDescarga, latencia, perdidaPaquetes) VALUES
    (1, 500, 1000, 20, 5),
    (2, 800, 1200, 25, 2),
    (3, 600, 800, 18, 1);
