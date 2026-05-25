# Laboratorio 6 - Snake

José Manuel Sanchez Hernández - 24092

## Descripción

La aplicación permite controlar una serpiente, comer galletas para crecer y subir niveles, mostrar puntaje y terminar la partida cuando se detecta una colisión.

## Herramientas utilizadas

- React con JSX
- Vite como herramienta de build y servidor de desarrollo

## Instalación y ejecución

1. Clonar el repositorio en tu equipo:

```bash
git clone https://github.com/josesan28/lab-6-snake-web.git
```

2. Entrar a la carpeta del proyecto:

```bash
cd snake-game
```

3. Instalar las dependencias:

```bash
npm install
```

4. Iniciar el servidor de desarrollo:

```bash
npm run dev
```

5. Abrir la dirección que aparece en la terminal, normalmente:

```bash
http://localhost:5173
```

## Cómo jugar

- Mueve la serpiente con las flechas del teclado o con `W A S D`.
- Come las galletas para crecer y sumar puntos con el objetivo de avanzar niveles.
- Evita chocar contra las paredes o contra tu propio cuerpo.
- Si ocurre una colisión, la partida termina con `game over`.

---

## Puntos extras

Se implementaron las tres tareas para obtener los puntos adicionales:

- Animaciones suaves
- Pantalla de inicio o reinicio
- Niveles o aumento de dificultad