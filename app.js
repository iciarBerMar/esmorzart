import GLightbox from 'glightbox';
import 'glightbox/dist/css/glightbox.css';
document.querySelectorAll('a.glightbox').forEach((enlace) => {
  const imagen = enlace.querySelector('img');
  if (imagen) {
    enlace.href = imagen.currentSrc || imagen.src;
  }
});

const lightbox = GLightbox();


//active en los links del menú principal

document.querySelectorAll('.nav-principal a').forEach((enlace) => {
  if (enlace.pathname === location.pathname) {
    enlace.setAttribute('aria-current', 'page');
  }
});

//ritual pasos

document.querySelectorAll('.paso__imagen').forEach((boton) => {
  boton.addEventListener('click', () => {
    const descripcion = document.getElementById(boton.getAttribute('aria-controls'));
    const expandido = boton.getAttribute('aria-expanded') === 'true';
    boton.setAttribute('aria-expanded', String(!expandido));
    descripcion.hidden = expandido;
  });
});

//bocadillos listado

document.querySelectorAll('.entrepa-item__imagen').forEach((boton) => {
  boton.addEventListener('click', () => {
    const revelado = boton.classList.toggle('is-revealed');
    boton.setAttribute('aria-pressed', String(revelado));
  });
});




