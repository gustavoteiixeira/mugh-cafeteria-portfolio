// ==========================
// MENU MOBILE (SANDUÍCHE)
// ==========================
const menuToggle = document.querySelector(".menu-toggle"); // botão do sanduíche
const mobileMenu = document.querySelector(".mobile-menu"); // menu móvel
const mobileLinks = document.querySelectorAll(".mobile-menu a"); // links do menu móvel

// Abre/fecha menu ao clicar no botão
menuToggle.addEventListener("click", () => {
  menuToggle.classList.toggle("active");
  mobileMenu.classList.toggle("active");
});

// Fecha o menu quando um link é clicado
mobileLinks.forEach(link => {
  link.addEventListener("click", () => {
    menuToggle.classList.remove("active");
    mobileMenu.classList.remove("active");
  });
});


// ==========================
// CONTAGEM ANIMADA (NUMÉRICOS)
// ==========================
const contadores = document.querySelectorAll(".contador"); // todos os elementos com contador

contadores.forEach(contador => {
  const alvo = +contador.getAttribute("data-alvo"); // valor final
  const incremento = alvo / 200; // velocidade da animação

  const atualizarContador = () => {
    const valorAtual = +contador.innerText;

    if (valorAtual < alvo) {
      contador.innerText = Math.ceil(valorAtual + incremento);
      setTimeout(atualizarContador, 10);
    } else {
      contador.innerText = alvo; // garante que termina exatamente no alvo
    }
  };

  atualizarContador(); // inicia animação
});
