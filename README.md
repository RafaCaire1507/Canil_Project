# Projeto Canil

### Instruções para executar o sistema

1. Clone o repositório para o seu ambiente local.
2. Certifique-se de ter Node.js instalado em sua máquina.
3. Abra o terminal e navegue até o diretório do projeto.
4. Execute `npm install` para instalar as dependências do projeto.
5. Após a instalação das dependências, execute `npm run dev`.
6. O aplicativo estará acessível em seu navegador em `http://localhost`.

### Lista de premissas assumidas

1. **Formato de data**: A entrada para a data seguirá o formato DD/MM/AAAA.
2. **Tipo de pet**: O sistema suporta apenas cães pequenos e grandes.
3. **Preço dos banhos**: O cálculo do preço total dos banhos será baseado na data, na quantidade de cães pequenos e grandes, e na oferta dos petshops.
4. **Distância entre petshops**: A distância será fornecida pelo método `calcularPrecoTotal()`.

### Decisões de projeto

1. **Tecnologias utilizadas**: O sistema foi desenvolvido utilizando React.js para o front-end.
2. **Biblioteca de manipulação de data**: Utilizou-se o Luxon para manipulação de datas devido à sua facilidade de uso e recursos robustos.
3. **Estado do aplicativo**: Utilização do hook `useState` do React para gerenciar o estado dos dados do formulário e dos resultados.
4. **Manipulação de data**: A função `mascara_data` é responsável por formatar a data inserida no formato esperado (DD/MM/AAAA).
5. **Cálculo do preço total**: O preço total dos banhos é calculado ao submeter o formulário, utilizando a função `calcularPrecoTotal` do arquivo `CalcularPreco.js`.
6. **Exibição dos resultados**: Os resultados são exibidos somente se a melhor opção de petshop e o preço total forem válidos. Isso é verificado antes de renderizar os elementos na UI.
7. **Estilo**: Utilização de classes CSS e estilos inline para garantir uma aparência limpa e organizada na interface do usuário.





 
