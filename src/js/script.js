const spans = document.querySelectorAll("span");

spans.forEach((span) => {
  span.addEventListener("click", () => {
    const lista = span.nextElementSibling;
    lista.classList.toggle("hide");
  });
});
