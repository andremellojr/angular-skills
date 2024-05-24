# Angular Skill Test

Projeto em angular 8 para a apresentação de um dashboard com as skills pessoais.

Atividades

* 1. Responsividade do Dashboard de Skills
    
    Ajustar o layout dos cards de forma responsiva, para exibir em telas com breakpoint lg ou maior com 3 cards por linha, breakpoint md com 2 cards por linha, e menores que md com 1 card por linha.
    Referência dos breakpoints: https://github.com/angular/flex-layout/wiki/Responsive-API.

* 2. Funcionalidades do Card

    - A cada click no botão like, incrementar um contador e exibir a quantidade de likes
        - esse contador deve ser incrementado e salvo via api rest (pode utilizar a api do httpClient)
        - após o incremento de likes chegar no valor 5, deve ficar azul
        - após o incremento de likes chegar em um valor maior que 10, escolha uma cor de sua preferencia que não seja nem preto nem azul.
        - uma api rest já está integrada usando o https://github.com/angular/in-memory-web-api. Está configurado um delay de 5 segundos. 
        Por isso, implemente também algum tipo de loading amigável para informar o usuário do processamento da requisição.
    
    - no botão share, abrir uma nova aba no seu linkedin.

* 3. Design

    Essa tela está bem sem graça não? Bom, ta aí a chance de você mostrar seus dotes artísticos !
    Afinal, queremos encantar nossos clientes com a apresentação dessas skills, portanto seja criativo, e fique a vontade para adicionar animações, cores, bordas, enfim, o que achar melhor para que essa tela fique mais a sua cara.

# Comentários

* 1. Responsividade do Dashboard de Skills

Para tanto, foi utilizado o atributo fxLayout para que a div do component dashboard fosse flex. fxLayoutAlign center start para alinhar os cards de forma agradável, com um gap de 12px.

Cada card tem por padrâo 30% de tamanho, para que caibam 3 cards além das margens, 45% em telas médias e 90% em telas menores, sempre totalizando 90% do espaço total para manter o espaço entre os cards. O algoritmo busca primeiro os tamanhos para as telas menores, de acordo com a documentação.

* 2. Funcionalidades do Card

Ainda no componente dashboard, acrescentei um evento que dispara o método onCardLiked. Esse evento é emitido pelo componente card e envia o novo card alterado para atualização da UI.

Pra evitar memory leak, inseri o unsubscribe no ngOnDestroy.

As cores azul e verde foram escolhidas do site https://designerly.com/best-button-colors-for-websites/. A cor do texto do botão passou a ser branca quando a cor do botão muda para manter um alto contraste.

* 3. Design

Quanto aos estilos, alterei alguns estilos padrões do body. Então adicionei variáveis CSS para serem usadas pela função dark mode. Foi criado um serviço que envia para qualquer parte da aplicação o novo valor do dark mode através de um behaviorsubject, pois este sempre envia o valor atual para os componentes. Neste caso não seria necessário, mas caso a aplicação viesse a ter mais componentes, isso ajudaria. O dark mode funciona removendo e adicionando o atributo data-theme no document a partir do AppComponent conforme o valor enviado pelo behaviorsubject quando o método toggleDarkMode é utilizado. Mais algumas alterações estéticas foram feitas.