

# CiPlus +

#### Status do Projeto:

![Badge](https://img.shields.io/website?down_message=em%20andamento&label=STATUS&style=for-the-badge&up_message=conclu%C3%ADdo&url=https%3A%2F%2Fytallobruno.github.io%2FProjetoFinalModulo2%2F)


## Sobre

O Ciplus + é uma API (interface de aplicativos) que possui conexão com um banco de dados + programação de diagrama de banco de dados com objetivo principal (reação de projeto principal). Além disso, ela controla as exigências feitas ao banco de dados e controla os consumidores dela, além de apresentar outras funcionalidades, como as funcionalidades que podem ser seguras, fazendo uma cópia do projeto.
## Protótipo 

![Login](https://media.discordapp.net/attachments/1013933622576828507/1013935152591802398/WhatsApp_Image_2022-08-29_at_19.08.19.jpeg?width=1025&height=360)

![Planos e Filmes](https://media.discordapp.net/attachments/1013933622576828507/1013935152105279620/WhatsApp_Image_2022-08-29_at_19.08.191.jpeg?width=1025&height=360)


## Clonando repositório da API

1. Escolha um local no seu sistema para o repositório;

2. Abra o terminal do seu sistema operacional no local escolhido:

3. Digite o seguinte comando no terminal:

```bash
  git clone -b Main 
  https://github.com/GustavoVieiraDeAraujo/Projeto-Final-Resilia-Modulo-4

```
    
4. Abra o local escolhido e se tem uma pasta com o nome do repositório confirmado;

5. Se a pasta apareceu, o repositório foi clonado com sucesso, caso contrário tente fazer download do ZIP.



## Instalando os pacotes necessários para uma API


1. Abra o terminal do seu sistema operacional na pasta em que os arquivos da API armazenados;

2. No terminal digite o seguinte comandos para instalar as dependências:

```bash
  npm i
```
3. Verifique na pasta da API se existir como node_modules e package.json, caso tenha os pacotes instalados com sucesso, caso contrário, repita o processo ou instale as embalagens enviadas com o node.js.


## Instalando os pacotes necessários para uma API

1. Abra o terminal do seu sistema operacional na pasta em que os arquivos da API armazenados;

2. No terminal digite o seguinte comando para criar o banco de dados:

```bash
  npm run createDatabase
```
3. Abra a pasta infra que está junto com os arquivos do projeto;

4. Se o arquivo database.db estiver dentro da pasta infra a criação do banco de dados deu certo, caso contrário repita o processo ou execute o arquivo diretamente com node por meio do seguinte comando:

```bash
  node ./src/infra/CreateDatabase.js
```
## Resetar banco de dados

1. Abra o terminal do seu sistema operancional na pasta em que os arquivos da API estão armazenados;

2. No terminal digite o seguinte comando para criar o banco de dados:

```bash
npm run restartDatabase
```

3. Verifique se o arquivo ``database.db`` esta igual ao condfigurado no arquivo ``CreateDatabase.js`` localizado na pasta ``Ìnfra``

## Ligar e desligar a API

#### !!! Para ligar a API é necessario ter os pacotes instalados e o banco de dados criado previamente !!!

1. Para iniciar a API, basta acessar a pasta do projeto, abrir um terminal e digitar o seguinte comando;

```bash
npm start
```

2. Verifique se no terminal aparareceu a mensagem 'API rodando na porta 3000', caso tenha aparecido a API esta funcionando, caso contrario tente repetir o procedimento;

3. Para desligar a API, basta acessar o terminal em que ela esta executando e apertar os seguintes botões do teclado  ``CTRL + C``;


## Testando API com Postman

1. Instale o Postman: https://www.postman.com/
2. Crie sua conta de acesso;
3. Clique em ``Create New →`` para criar uma nova collection:

![Create New](https://media.discordapp.net/attachments/1013933622576828507/1013935151769714869/WhatsApp_Image_2022-08-29_at_19.08.192.jpeg)

4. Clique em ``HTTP Request`` para criar uma solicitação:

![http request](https://media.discordapp.net/attachments/1013933622576828507/1013935151379656774/WhatsApp_Image_2022-08-29_at_19.08.20.jpeg?width=1025&height=435)



### Testando a entidade Users:

1. Selecione o metodo `GET`, depois escreva o caminho de acesso: `http://localhost:3000/users/all` clique em `Send`:
![GET](https://media.discordapp.net/attachments/1013933622576828507/1013935151035732058/WhatsApp_Image_2022-08-29_at_19.08.201.jpeg)

2. Dados da API fornecidos:

![Create New](https://media.discordapp.net/attachments/1013933622576828507/1013935153065775155/WhatsApp_Image_2022-08-29_at_19.08.202.jpeg)


## Apresentação de Slides
Confira os [slides](https://drive.google.com/file/d/1qYZS7Q31hcenWPKK5SZYk0vNdFiKLM5T/view?usp=sharing) que fizemos para a nossa apresentação.


## 🤝 Colaboradores

Agradecemos às seguintes pessoas que contribuíram para este projeto:

<table>
  <tr>
    <td align="center">
      <a href="https://github.com/Marlonalvss">
        <img src="https://cdn.discordapp.com/attachments/999712721941581977/1003868547711254528/86992904.jpg" width="100px;" alt="Foto Perfil Marlon GitHub"/><br>
        <sub>
          <b>Marlon Alves</b>
        </sub>
      </a>
    </td>
    <td align="center">
      <a href="https://github.com/Cripim">
        <img src="https://avatars.githubusercontent.com/u/102764794?v=4" width="100px;" alt="Foto perfil Diego GitHub"/><br>
        <sub>
          <b>Diego Cripim</b>
        </sub>
      </a>
    </td>
     <td align="center">
      <a href="https://github.com/isabellaoliv">
        <img src="https://avatars.githubusercontent.com/u/92725386?v=4" width="100px;" alt="Foto perfil Isabella GitHub"/><br>
        <sub>
          <b>Isabella Oliveira</b>
        </sub>
      </a>
    </td>
    <td align="center">
      <a href="https://github.com/GustavoVieiraDeAraujo">
        <img src="https://avatars.githubusercontent.com/u/98619055?v=4" width="100px;" alt="Foto perfil Gustavo GitHub"/><br>
        <sub>
          <b>Gustavo Araujo</b>
        </sub>
      </a>
    </td>
</table>


## 📝 Licença

Esse projeto está sob licença de Resilia Educação.
