window.sr = ScrollReveal({ reset: true });

sr.reveal('footer', { 
    rotate: { x: 0, y: 20, z: 0},
    duration: 1000 });

sr.reveal('#imagem-1', { 
    rotate: { x: 0, y: 20, z: 0},
    duration: 1000 });

sr.reveal('#imagem-2', { 
    rotate: { x: 0, y: 20, z: 0},
    duration: 1000 });

sr.reveal('#imagem-5', { 
    rotate: { x: 0, y: 20, z: 0},
    duration: 1000 });

sr.reveal('.elementos-5', { 
    rotate: { x: 0, y: 20, z: 0},
    duration: 1000 });


    function typeWriter(elemento) {
        const textoArray = elemento.innerHTML.split('');
        elemento.innerHTML = '';
        textoArray.forEach((letra, i) => {
            setTimeout(() => elemento.innerHTML += letra, 150 * i)
        });
    }

    const titulo = document.querySelector('span');
    typeWriter(titulo);
