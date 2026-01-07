const projects = [
  {
    id: 'mechanography',
    nombre: 'Mechanography',
    img: 'images/projects/mechanography.webp',
    desc_short: 'Juego web para practicar mecanografía con palabras aleatorias.',
    desc: 'Juego de mecanografía donde el usuario debe tipear correctamente palabras aleatorias en el menor tiempo posible. Utiliza JavaScript puro para manejar los eventos del teclado y comparar el input en tiempo real. Se conecta a una API para obtener las palabras dinámicamente. Manipulación del DOM, asincronismo, eventos y estructura lógica de una aplicación interactiva.',
    tecs: ['html', 'css', 'javascript'],
    git: 'https://www.github.com/Ezagu/Mechanography',
    url: 'https://mechanography.vercel.app/'
  },
  {
    id: 'todolist',
    nombre: 'To-Do List',
    img: 'images/projects/todolist.webp',
    desc_short: 'Aplicación para gestionar tareas pendientes de forma simple y eficiente.',
    desc: 'Aplicación de tareas que permite agregar, editar, eliminar y marcar como completadas distintas actividades. Los datos se almacenan localmente en el navegador mediante localStorage. Es un ejemplo de manejo de estados en JavaScript sin frameworks, lógica condicional, persistencia de datos y organización de una interfaz simple.',
    tecs: ['html', 'css', 'javascript'],
    git: 'https://github.com/Ezagu/ToDoList',
    url: 'https://to-do-list-beta-six-99.vercel.app/'
  },
  {
    id: 'minesweeper',
    nombre: 'Minesweeper',
    img: 'images/projects/minesweeper.webp',
    desc_short: 'Versión en Python del clásico Buscaminas con interfaz gráfica.',
    desc: 'Versión del clásico juego Buscaminas implementada con Python y Tkinter. Se genera un tablero dinámico con minas distribuidas aleatoriamente, y el usuario debe descubrir las celdas sin detonar ninguna. Presenta varias dificultades y un registro local de tiempos record. El proyecto implica lógica compleja, POO, manejo de matrices, interacción con interfaz gráfica y condiciones de victoria o derrota.',
    tecs: ['python', 'tkinter'],
    git: 'https://github.com/Ezagu/Minesweeper',
    url: undefined
  },
  {
    id: 'calculadora',
    nombre: 'Calculadora',
    img: 'images/projects/calculadora.webp',
    desc_short: 'Calculadora avanzada con interfaz gráfica hecha en Python.',
    desc: 'Calculadora funcional desarrollada con Python y Tkinter que permite realizar operaciones complejas. Cuenta con una interfaz gráfica con botones e input numérico. El proyecto está estructurado con Programación Orientada a Objetos, con especial foco en la separación entre la lógica de cálculo y la interfaz visual.',
    tecs: ['python', 'tkinter'],
    git: 'https://github.com/Ezagu/CalculadoraPython',
    url: undefined
  }
];

export default projects;
