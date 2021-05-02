## CSS - Flexbox  

### Hoje iremos aprender sobre a maaaaravilha do flexbox!  
Você já percebeu alguns sites que você entra em que o conteúdo se adequa ao tamanho da sua janela?  
Esse é o maravilhoso flexbox, ele torna o comportamento da nossa página dinâmica, possibilitanto o conteúdo dentro dela se adaptar ao tamanho da tela.
  
![yes](https://user-images.githubusercontent.com/56416540/116800542-7a831180-aad8-11eb-9643-392e696e3123.gif)

---

## O que iremos aprender hoje?  
Iremos aprender as principais ferramentas do flexbox para ser aplicado em sua página: 
1. `flex-direction`
2. `flex-wrap`
3. `flex-flow`
4. `justify-content`
5. `align-items`
6. `flex-shrink`
7. `flex-grow`
8. `flex-basis`  

---

## Você será capaz de:  
 - Controlar melhor o dimensionamento da sua página, utilizado layouts flexíveis  
 - Tornar possível o acesso da sua página em diversos dispositivos com tamanho de telas diferentes  
 - Entregar uma experiência completamente diferenciada a quem acessa sua página  
 - ~~Deixar de sofrer com as margens, paddings e position~~
   
![will](https://user-images.githubusercontent.com/56416540/116800547-82db4c80-aad8-11eb-84fa-3388a39a3e0c.gif)

 ---

 ## Porquê isso é importante?  
 - É importante pois o conteúdo que voce planejou e construiu em seu computador, deve ser exibido completamente para quem acessar sua página, e impedir que parte dele seja ocultado ou se torne necessário rolar a página para o lado para conseguir acessa-lo. Sendo resolvido assim, tornando seu comportamento flexível.  
  
 ---

 ## Conteúdo  

 ### Introdução: 
 Dê uma olhada [nesse vídeo sobre flexbox](https://www.youtube.com/watch?v=9e-lWQdO-DA), ele demonstra muito bem o comportamento do atributo `display: flex;` (ps: as legendas com tradução estão muito boas, ok? :wink:)  
   
Primeiro é muito importante você compreender o os eixos de um container em que o flexbox será aplicado, pois é ele que controla como o conteúdo dele é exibido, podendo ser alterado para organizar o conteúdo na horizontal, ou na vertical. Temos como eixo principal o `main-axis` no eixo horizontal do container e temos o `cross-axis` no eixo vertical do container. É possivel observar eles através da próxima imagem:  
  
![Flex-container](https://user-images.githubusercontent.com/56416540/116800078-22e2a700-aad4-11eb-9704-ba7dfeef92e0.png)
  
O comando `flex-direction` altera diretamente como os filhos do container são rearranjados, suas opções são:
* `flex-direction`:  
    * `row` (Propriedade padrão) organiza os filhos do container em linha (`main-axis`)  
    * `column` organiza os filhos do container em coluna (`cross-axis`)
    * `row-reverse` organiza os filhos em linha no (`main-axis`) invertendo a ordem dos filhos
    * `column` organiza os filhos em coluna no (`cross-axis`) invertendo a ordem dos filhos