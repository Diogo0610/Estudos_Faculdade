// Seleciona todos os links
const links = document.querySelectorAll("nav a");

// Adiciona um ouvinte de eventos de clique para cada link
links.forEach((link) => {
  link.addEventListener("click", function (event) {
    // Previne o comportamento padrão do link (navegar para outra página)
    event.preventDefault();

    // Seleciona a lista dentro do link clicado
    const lista = link.querySelector("ul");

    // Alterna a classe "hide" na lista
    lista.classList.toggle("hide");
  });
});
