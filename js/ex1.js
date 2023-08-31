// Definindo um array com valores de salários iniciais
const salarios = [1500, 2200, 1800, 2500, 1900, 3000, 2100, 2800, 2300, 1700];

// Usando o método map() para percorrer o array de salários
// e aplicar aumentos de acordo com as condições
const salariosAtualizados = salarios.map(salario => {
  // Se o salário for menor ou igual a 2000, aplica aumento de 15%
  if (salario <= 2000) {
    return salario * 1.15; // Aumento de 15%
  } else {
    return salario * 1.10; // Aumento de 10%
  }
});

// Usando o método filter() para criar um novo array com salários superiores a 2500
const salariosSuperiores2500 = salariosAtualizados.filter(salario => salario > 2500);

// Usando o método reduce() para somar os salários atualizados
const totalSalarios = salariosAtualizados.reduce((acumulador, salario) => acumulador + salario, 0);

// Exibindo os resultados no console
console.log("Esses são os salários:", salarios);  // Exibe os salários originais da array principal
console.log("Salários atualizados:", salariosAtualizados);  // Exibe os salários com os aumentos aplicados (10 e 15%)
console.log("Salários superiores a 2500:", salariosSuperiores2500);  // Exibe os salários acima de 2500
console.log("Total de salários:", totalSalarios);  // Exibe a soma total dos salários
