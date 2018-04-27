# ListApp
Projeto de Tópicos em Programação e Novas Tecnologias.

## Como contribuir pro projeto

Primeiro, se você não tiver feito ainda, utilize o comando:

```
git clone https://github.com/pedrug19/ListApp
```

Para clonar o repositório para o seu local. Depois, basta você fazer as mudanças que achar necessário pro projeto. Para adicionar todos os arquivos que você mudou para o projeto:

```
git add *
```

Então, faça um commit:

```
git commit
```

Por favor, escreva uma mensagem significativa (é obrigatório deixar uma mensagem) Ao invés de fazer algo como "pedren lixo". Descreva o que você fez, vamos levar a sério isso aqui.

Então depois é so fazer um push:

```
git push
```

Se quiser criar um branch para criar uma funcionalidade nova para o programa, sem afetar o master:

```
git checkout -b <seunome>
```

Esse comando vai criar o branch e já vai mudar seu foco para o branch <seunome>.

Isso por enquanto já é suficiente pra vocês entenderem o git. É bem simples.

## Projeto

O projeto é formado por páginas definidas.

Iniciaremos na HOME, que detectará se o usuário está conectado com o servidor, para autenticar ou registrá-lo. Da HOME, podemos ir para LOGIN ou REGISTRO.

Após autenticado, a HOME mostrará a Lista de Eventos criados, que começará vazia.

Ao clicar para criar um evento, o usuário será levado para ADDEVENTO, um formulário para preencher as informações do evento.

O Evento aparecerá na HOME, podendo ser excluído ou editado, ou adicionar novos convidados.

Ao clicar no evento, cairemos em uma lista de convidados adicionados (começa vazio). Então você pode adicionar novos convidados em ADDCONVIDADOS, um formulário para inserção de dados de convidados.

Os convidados serão adicionados à Lista de convidados.

Resumindo:

HOME <-----> REGISTRO/LOGIN

|

|

-----> LISTAEVENTOS <----->  ADDEVENTOS/LISTACONVIDADOS <-----> ADDCONVIDADOS

Bem simples. Por enquanto é só isso.
