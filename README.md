

# CiPlus +

#### Status do Projeto:

![Badge](https://img.shields.io/website?down_message=em%20andamento&label=STATUS&style=for-the-badge&up_message=conclu%C3%ADdo&url=https%3A%2F%2Fytallobruno.github.io%2FProjetoFinalModulo2%2F)


## Sobre

O Ciplus + é uma API (interface de aplicativos) que possui conexão com um banco de dados + programação de diagrama de banco de dados com objetivo principal (reação de projeto principal). Além disso, ela controla as exigências feitas ao banco de dados e controla os consumidores dela, além de apresentar outras funcionalidades, como as funcionalidades que podem ser seguras, fazendo uma cópia do projeto.
## Protótipo 

![Login](https://lh3.googleusercontent.com/tR4xi4Q2gQ-z3m3qXbXQ0eLcKTxcJOSLpAg8RAqs5wBxqCp495Kndn6FZZ8skDsK5v1su-WfQ1J-32eMqP3OlEUPzXhOWxKejbQsmW0ZoxCCd6etrFaJ9XXMdqmym5Tj6rXJ8opA8WUVL7to1OS5E7eMLwN6Nu_h6lif2ljRB0GbLXKpz6KMnF7qJSwDnBSIa6z26obzAn3Az2GeKqpsNjE4ojU5tmlashhbL4IYbOE7vuGERw0MdF79us0uYDKaw8fPRMmmeOZ6e3DsdU7BqNPzRnhhI9D_4ccv0IZ6z6nqpXKQiX_nuJqmBj60lSuMbvvx5NTy1AXd0L4O3yYKiJUYbvGZn5lXFWdY-mqGJFQSdqnQpQPbsKcEaBlMI8mW27rQl2T4NMdQK3NcsWb_NmlwC_rUoUdCoxHMPgn1v0UaHhbPkY2zm_IDlSqHhMYICeudEDktXpdCoASW7bfPA74ZUyzb2WyuLA4yi74rHB5zrU0yoWJFa8dyS93t643V_XrIi-uhcnif7hELcKpbcIUjIqYGuV4ayT_Q1S5n6OqN_YJyzlHW3ChhumAonPbn0oLj2_vS3DBDVjvE0LeI2K3e_-FSkLpL_1NMLai4un4vcDMBMESgL3454F7c3g8HgT_DguhIL7kr7ExQ4PQgDGuXGLYLx57z3gsk_0QfgD3FwLx5oXavmjFXGIBR86ZZscJ36wHVE4hdKBKzTqC-WJs0eYm1sSXP9kTdefBCpqmZAtM211N2Xfy-KvM=w1366-h481-no?authuser=0)

![Planos e Filmes](https://lh3.googleusercontent.com/qgSK_aYe8Mt5hspky-E-5nww9N-i6CF0dnqb1Z0q16peMj05mySYC8RfLYkkBLI2PqGrxERup8du51YAR5clpgG_gmed_sSUKjsMOef15wbo1PNzsKymyqHUdl0TNJHli2icy6XisSWMtq7_utSkYCss2P9wZ9i5FDZ9EO_gs-o53YFgiHH5Dz133jb160ve-_zYeEysW8daJ2EPKSEszcOi0XeJ_Q2u_TsLDya-w0frp15cdfToVHCSlrEZt8ygNWkXV1lEaPMLpslrcssLjKS0eyL0AOr6xlOVrE2ckLlfI-tftgW2VogHDQ8KeI6lx1Tv2RHfwf4vg8SicYOzNAk6Ky2zlbhVGCMbqNQrSjWnnRQy08fnEBWgfIDm1HvUBfJZOLY5Y1BhJldJw71AbITENB038wG5CB9s1ZWf8-P89I8_lhgYuG9jDF-QlZAN_08buZVEkhvXTMzEG33BEgsqXKYNw81orGT-PBTvhGLFCszi92jNGc4XuuCCzrwjRofhx2F02FFGnJD60eSkYn6c5dfRDxIkoCBrlaxSca8C5N5aVARh3HwqpIFPINiFUV3s5IuHcRr3ViUL9b0favds8cKbJlKFkxDQQvrge8BBR5ROAmhNqJ12N2A_ACzefWxcLB0j8T6WvqlOsnrOPG2dkIUbBLewMQ-5f9P19iaQ9XmXJoQtEBOozGbV-zJlFg42JKIi0_B-NiCWy0lfdetvPQ8F0blAkNbozNF3YfZpEHGSCovVJpI6peE=w1366-h481-no?authuser=0)


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

![Create New](https://lh3.googleusercontent.com/QwR-m7G7dlKD2YzjvQDeLS1WGmYko-rFVl8dgT8mYFCArbsipflbF-r1v_8ekvB5zezGATgWg79Mq_BKLytsAxN1lr7Mqx2c_Th6HO225yqRNAv8QcPHQ5j__80Ul1h-L5wVMHUlHbdSki-6trBBTFAva2PogyQNKzpscI-vb9BT5v7zZaaht0CGoOB84vHL5qZtQwQLjnehWudAhYUljw0BlzFVF74SO9S2A45EGEaRMhvr5dr_W-42Tbj17So_Wpsrsbl-WDs1jSRI4wd5LkvSQhi02_Q2jDjXVHA7EfroYIB3wriXIqjSNHodazy7F-biTnYn4rMEUnizPmn892OIqmEOMtzz7zy8PKz0ucLXlDmqpdxtLZUZkksma1SUwk7BAaFmykLyGAvnarj0WWtO5FrTLp9KuohCn8rIqakm8p9U0FfqGyF9cmGoEB2DAHip-6-ejG4esCn8DfOp80u4m41iExYvZCdc_klfBZaEva0sR8vAO0vUp-hzRxgooNh1W95TO515uvEyvlza8Xc4QWesFMx-Krqvzos0xOznRmyPnD9JGD5-JNKsWr4KVjd-IN2mcMPfAAH6W_Hr8hk1U7UjmKA9gD1hzoktu5GqUGqNLy-tAjJQ9iHghDAZpKjH9Q9PeOvyLq995G43pWBWVqeue8IbhVCVQT8D3RjxklTWc7G629I-LA2tZPRHMnJvAm00YqHyGl3As4fHK8iFtyPVJYf4oMzQ8Klb4ovtdYGrLJ2FpdMqroI=w581-h255-no?authuser=0)

4. Clique em ``HTTP Request`` para criar uma solicitação:

![http request](https://lh3.googleusercontent.com/b8YYvLJPTq0sNggYk9HBDZqmhoq73q0LqCih9YW7T70cygOn1zJxn75IFocsQhwKvbj59N-5VdeKm4rPjDJ2KUxQeccDX9sfuV9EwqFG-MbhBwYBuo5o66ljzr7vj1cAIsZHKazkpPBbX2adUJHo8OahD6PQ_A6H6FdvTZiVduD0wTVsUcPjOIBLqwF_3_0jTpfK56AKZRg82gCJxYyke02Pv7ImwRpp8zVzAKUGFjtdYJFSgOX_rLxIoHRU2tbTUG4OQVYPPjSa8ehVfD3KKawj2h6aoo_-Ai9P7YTZ1rDD4eOirKBcLy2igg-g7xGR908dS4GZuRBbNa2L3B_UeCC5vmiyTD80efBsye1Xu-lkLxCzgICj-8E0J3X7vsE5gUS66yePVj1m-fOAJrC9JIEnP1jzM8ZkibGGObh9-BSMkKw7s86psOHIzoEHBG4HvQUxk8NptyXAV0gNFBHH6piXH5oeBdVYem6FLDYKaFLdDQ1lhAGXhh4xRrgdljTfQ9w-UsWlNomoU_xj5ozoz4BGkKd3HGt6EAYSZrvo_S_DSZQCLd60UGmjaNh2YN0cGpA1THyhYDNyzLYuVTJXHriTlEtLcre-DWcCL5nqJyDQLPH6XLDUuDlHQge4aRhZhszIclkDmsi7mfL9mJk8KZkRLEfRZWFm_nO_b8hN_F5MesIk7pFry48Nt25YKj7mbHrDZdqziby3DJAIASzL1-WIXGzwd4gJSMYgdjfJl8Shaf5pqwsgSJcV39o=w1068-h453-no?authuser=0)



### Testando a entidade Users:

1. Selecione o metodo `GET`, depois escreva o caminho de acesso: `http://localhost:3000/users/all` clique em `Send`:
![GET](https://lh3.googleusercontent.com/sFHBcjibkEnYPSEgOAP5h6nJutMBpqaTi45iHIo7XpkwuVB-jfZAHBdjLQyfDwes3uB2XXoxXcSnrerG6o36QTqTlXzedArLhOmstfzpeHsV1Vrpw96szJFYqNFMyJR9JhRIqtpOzOkaZnmkNT6ZoQK7lSKDZJP9U1hq5oNgl-g7N34j5OBYj-eQBW_zLlV9Ej6Tcz5WJujdwN0eEmC96Z993OgbxJzH45aj2Lj6pWEUz30WwmvqOPmvGz8v4rFYkXhTNnkEnOKUJ3AxjHmCm8-EBSITNPyxJk_sgIlQZ2D12aTY-uBxITJkL9Z_QjqU53hOmQh7665aobUpiZwu_ufjUmm5dTv4YGE7zY0FmPaVFXFbgrHW-6b0_Kn7IoUawbFXztDm7Rw_QeqjOJUQzWchZ43kLefW-3bQkKNsxUv_SiMWWOH-ec7OvNvuypBqYbkVnu8rEePSCevAsDvSJDeM-e8nsfprehfmiuDAKZCrt4QCjeMDtMg_Gi-H6ZnqmVgdQwIB9glyiOMDlrnthXD6fS4xgbNT5rxb23zzqQRTItUm5ZFSRHJikoi_tyrUFCv_1Bvk7ir9VI_Csd2gLUuWGbJQylVEZkHsVa6grVpjvm9jJUSCca-Ac3fNp0jJ_ktnYlvB4zS3cnDGdCKsMSBlSZz0VNlQESa1y15iRT-loMljthTwubQzvyv8NHz77uZ7jjUtgnHP1idJtV8R4PiIB_Q5CETNuDwiGBmOPMnb9UbfhJM6c_KXGjY=w942-h122-no?authuser=0)

2. Dados da API fornecidos:

![Create New](https://lh3.googleusercontent.com/Mq2vtfb14xJKsMHyPXngJsvS5rXvpBvrp04HUr8JzJ5wM55HE-ph_849yrvoMaKd86h5R-MYrysTaiVwsdSG2nqk6zQ5v9tYyeErWmgy1l0jA_nNu7miwz9yX0iyPsL6ghMpMWtIMv_T9wzgGQkkH40ylvCXD6M2khK7PUaxVjxEStxjldHFScBww398D8V2W1BLLbD77TRSB1wF7gK0QieIQgzyHtbJEhYh6_GbM8RBoOZ2n_bJanNDG7O899h_lKUe6HLZXh1oNNCHn5eaD41LpEKoykz0yalBrPhdCIpQlXF_2azjRorTv0jlLEoaffmZU09--g0_EUDuiV2gth80p2Xj5xStZbIywYDAZ26Oyri0GUnDd3mzhYq0BUHddKaDL2-OyWs5Fmg5_CnkR1nEqIAOTYfBpSPmyGwjFUBXNScCvW8c0VEtYGilxcp7030fYHdByK8wCo5Ire9zwL-jMQYNJVi9arwkNAa18Yv0TFVTXfeNnRVngrex4yJcB9pG5mOfZRhlWhhgvJOjql7QfHl_6GL7u85Z6pgtlCXhMEEnLhXmPdXJxUp4vCJBJkSDG20aVxgRcY2kzjf-vCdAaAczNoDgCypGGnVvkQFl5aD0Q_qPmgrp5o4lfH_qZHoH28DBGH6YrMx1MJIaTKESX_W3-GoYsJHiBjHltJqECYSVMsd5uejNDFli-kOpWLw0r6OgQL_rrasT6x7FDKkDNE-7rwuekA3QXebn4Un4fcegraukIpKzi2U=w371-h199-no?authuser=0)


## Apresentação de Slides
Confira os [slides](https://drive.google.com/file/d/1qYZS7Q31hcenWPKK5SZYk0vNdFiKLM5T/view?usp=sharing) que fizemos para a nossa apresentação.


## Autores

- [Diego Cripim](https://github.com/Cripim)
- [Gustavo Vieira](https://github.com/GustavoVieiraDeAraujo)
- [Isabella Oliveira](https://github.com/isabellaoliv)
- [Marlon Alves](https://github.com/Marlonalvss)
