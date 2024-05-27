function nomeAleatorio() {
  const nomes = [
    "João",
    "Maria",
    "José",
    "Ana",
    "Pedro",
    "Luana",
    "Rafael",
    "Gabriela",
    "Lucas",
    "Juliana",
  ];
  const indiceAleatorio = Math.floor(Math.random() * nomes.length);
  return nomes[indiceAleatorio];
}

console.log(nomeAleatorio());