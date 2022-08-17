# Ciplus +

O Ciplus+ é uma API (Interface de programação de aplicações) que possui objetivo principal conectar um banco de dados ([diagrama do banco de dados](https://dbdiagram.io/d/62f6d557c2d9cf52fa9bcb0f)) voltado à um futuro projeto react.js. Alem disso, ela controla as requisições feita ao banco de dados e controla os consumidores dela, alem de apresentar outras funcionalidades secundarias, as quais podem ser testadas, fazendo uma copia do projeto.

# Clonando repositorio da API

1. Escolha um local no seu sistema para armazenar o repositorio;

2. Abra o terminal do seu sistema operacional no local escolhido:

3. Digite o seguinte comando no terminal:

```bash
git clone -b Main https://github.com/GustavoVieiraDeAraujo/Projeto-Final-Resilia-Modulo-4
```

4. Abra o local escolhido anteriormente e verifique se tem uma pasta com o nome do repositorio clonado;

5. Se a pasta apareceu, o repositorio foi clonado com sucesso, caso contrario tente fazer dowload do ZIP;

# Instalando os pacotes necessarios para a API

1. Abra o terminal do seu sistema operancional na pasta em que os arquivos da API estão armazenados;

2. No terminal digite o seguinte comando para instalar as dependecias:

```bash
npm i
```

3. Verique na pasta da API se existem as pastas ``node_modules`` e ``package.json``, caso tenha, os pacotes foram instalados com sucesso, caso contrario, tente repetir o processo ou instale os pacotes separadamente com o node.js.


# Criando banco de dados

1. Abra o terminal do seu sistema operancional na pasta em que os arquivos da API estão armazenados;

2. No terminal digite o seguinte comando para criar o banco de dados:

```bash
npm run createDatabase
```

3. Abra a pasta infra que esta junto com os arquivos do projeto;

4. Se o arquivo ``database.db`` estiver dentro da pasta infra a criação do banco de dados deu certo, caso contrario tente repetir o processo ou executar o arquivo diretamente com node por meio do seguinte comando:

```bash
node ./src/infra/CreateDatabase.js
```

# Resetar banco de dados

1. Abra o terminal do seu sistema operancional na pasta em que os arquivos da API estão armazenados;

2. No terminal digite o seguinte comando para criar o banco de dados:

```bash
npm run restartDatabase
```

3. Verifique se o arquivo ``database.db`` esta igual ao condfigurado no arquivo ``CreateDatabase.js`` localizado na pasta ``Ìnfra``

# Ligar e desligar a API

### !!! Para ligar a API é necessario ter os pacotes instalados e o banco de dados criado previamente !!!

1. Para iniciar a API, basta acessar a pasta do projeto, abrir um terminal e digitar o seguinte comando;

```bash
npm start
```

2. Verifique se no terminal aparareceu a mensagem 'API rodando na porta 3000', caso tenha aparecido a API esta funcionando, caso contrario tente repetir o procedimento;

3. Para desligar a API, basta acessar o terminal em que ela esta executando e apertar os seguintes botões do teclado  ``CTRL + C``;

