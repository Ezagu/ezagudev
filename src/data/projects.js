const projects = [
  {
    id: "redsocial",
    nombre: "React Social",
    img: "images/projects/reactsocial.png",
    desc_short:
      "Red Social Fullstack desarrollada con el stack MERN, que permite a los usuarios registrarse, autenticarse, crear publicaciones e interactuar mediante comentarios, likes y notificaciones. Proyecto enfocado en aplicar buenas prácticas y simular el funcionamiento de una red social real.",
    desc: `Red Social Fullstack desarrollada como proyecto personal con el objetivo de aplicar y consolidar conocimientos en desarrollo web moderno, tanto en frontend como en backend.

La aplicación permite a los usuarios registrarse e iniciar sesión, crear y editar su perfil, publicar contenido, seguir a otros usuarios e interactuar mediante comentarios, respuestas, likes y notificaciones, simulando el comportamiento de una red social real.

El frontend fue desarrollado con React y Tailwind CSS, utilizando React Router para el enrutado, react-hook-form para la gestión de formularios, manejo de estado con hooks como useState, useEffect y useContext, y la creación de custom hooks para abstraer lógica reutilizable.

El backend consiste en una API REST construida con Node.js, Express, MongoDB y Mongoose, incluyendo validación de datos con express-validator, uso de transacciones para asegurar integridad de la información, sistema de autenticación con JWT y almacenamiento de archivos en la nube mediante Cloudinary.

Tanto el frontend como el backend se encuentran desplegados en Vercel, con la base de datos alojada en MongoDB Atlas, permitiendo que la aplicación sea accesible públicamente.

Este proyecto me permitió enfrentar problemáticas reales de desarrollo, mejorar la arquitectura de la aplicación y adquirir una visión más completa del desarrollo fullstack.`,
    tecs: ["React", "Node.js", "Express", "MongoDB", "TailwindCSS"],
    git: "https://github.com/Ezagu/red-social",
    url: "https://red-social-ezagu.vercel.app",
  },
  {
    id: "mechanography",
    nombre: "Mechanography",
    img: "images/projects/mechanography.webp",
    desc_short: "Videojuego web con JavaScript puro.",
    desc: "El proyecto consiste en un juego de mecanografía en el que el usuario debe tipear correctamente palabras aleatorias en el menor tiempo posible. Fue desarrollado utilizando JavaScript puro, manejando eventos del teclado y validando el input en tiempo real. El juego se conecta a una API externa para obtener las palabras de forma dinámica. A través de este proyecto adquirí experiencia en el uso de fetch, solicitudes AJAX y el manejo de funciones asíncronas con async y await.",
    tecs: ["html", "css", "javascript"],
    git: "https://www.github.com/Ezagu/Mechanography",
    url: "https://mechanography.vercel.app/",
  },
  {
    id: "minesweeper",
    nombre: "Minesweeper",
    img: "images/projects/minesweeper.webp",
    desc_short: "Buscaminas hecho en python con tkinter.",
    desc: "El proyecto consiste en una versión del clásico juego Buscaminas, desarrollada utilizando Python y la librería Tkinter para la interfaz gráfica. El juego incluye la generación dinámica del tablero y las minas, así como la posibilidad de seleccionar distintos niveles de dificultad. Además, cuenta con un contador de tiempo y un sistema de registro de récords persistente. A través de este proyecto fortalecí mi lógica de programación, la aplicación de programación orientada a objetos (POO) y el manejo de eventos y archivos.",
    tecs: ["python", "tkinter"],
    git: "https://github.com/Ezagu/Minesweeper",
    url: undefined,
  },
  {
    id: "calculadora",
    nombre: "Calculadora",
    img: "images/projects/calculadora.webp",
    desc_short: "Calculadora avanzada con interfaz gráfica hecha en Python.",
    desc: "Calculadora funcional desarrollada con Python y Tkinter que permite realizar operaciones complejas. Cuenta con una interfaz gráfica con botones e inputs numéricos. El proyecto está estructurado con Programación Orientada a Objetos, con especial foco en la separación entre la lógica de cálculo y la interfaz visual.",
    tecs: ["python", "tkinter"],
    git: "https://github.com/Ezagu/CalculadoraPython",
    url: undefined,
  },
  {
    id: "todolist",
    nombre: "To-Do List",
    img: "images/projects/todolist.webp",
    desc_short: "Aplicación para gestionar tareas pendientes.",
    desc: "El proyecto consiste en una aplicación de gestión de tareas que permite agregar, editar, eliminar y marcar actividades como completadas. Los datos se almacenan de forma local en el navegador mediante localStorage, garantizando la persistencia de la información entre sesiones. Fue desarrollada utilizando JavaScript puro, y a través de este proyecto adquirí experiencia en la implementación de un sistema CRUD, así como en el manejo eficiente de la persistencia de datos en el frontend.",
    tecs: ["html", "css", "javascript"],
    git: "https://github.com/Ezagu/ToDoList",
    url: "https://to-do-list-beta-six-99.vercel.app/",
  },
];

export default projects;
