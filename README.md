# CiPlus +

#### Status do Projeto:

![Badge](https://img.shields.io/website?down_message=em%20andamento&label=STATUS&style=for-the-badge&up_message=conclu%C3%ADdo&url=https%3A%2F%2Fytallobruno.github.io%2FProjetoFinalModulo2%2F)


## Sobre

O Ciplus + é uma API (interface de aplicativos) que possui conexão com um banco de dados + programação de diagrama de banco de dados com objetivo principal (reação de projeto principal). Além disso, ela controla as exigências feitas ao banco de dados e controla os consumidores dela, além de apresentar outras funcionalidades, como as funcionalidades que podem ser seguras, fazendo uma cópia do projeto.
## Protótipo 

![Login](https://lh3.googleusercontent.com/wcBpgzjKLhIrQv0p6F12ZiF7rj2aJpdLNmLzHgNyxqzIGP5PzdxvNhkPChfMcvCb4uUeqpCxkkLoGlyiZGfT7hf-oeI8NKugixtCzkbOgswIPS_xBSvfQZJuv9Gwv1UHnI-gRwbIflz5jmYt9qtl0NZnxBQ1qareAakcRralTyJ6NskEt09vb3R91X3zt0jxgDtqjqx8w0SMoK5LQJVSBLjx9VRTVj3i3KO5m5gOjL7Yfc-TrcsLxzPcyBkPiSHyEgFhnwMrTTM4YziAnOlN3yjfdcgJRZd_Fic1TIm4TOKZ2FNTY5vNpChsNE7aAlnvenP1lwqe8l6vDW5I37_fuU66ojGFMeworbyRwgXWOOtmk-2gcfpSMlfhiJJKI2ifsYlp-aEM727jH0ImAQjJlqTbSC6d0wS-k44IhpzytLdO28uRG9TtNUmOvBaTQcEY6GSav33m_SVWNGqzahVXrCtyxie2JRrSHDaIT2gTW2Px757sXZt4R_5MA0sINEsfVBVqJG1btW4XD5aYc9tuLM2XGOMu6xsGr1DiWJnteacFvEMRp9LlqTJ_RZ8hM0zBebcxdehgyVEnp2VG8KHMxjFIU3jioYJDj2OCUbqnsMeiM5zD0tmIJ9EDmT2JkQGMTIfl3dp0qeTDRMCaRuLcKZ1TE044qAUP-4r_8cCrJFR4nII1mvmUy71QWiHZzHrlhFahQn11KksL4h3BDmipv-u03UT1BaQ1ewWGV4hUPktekaj5SKkRNruUAwc=w744-h262-no?authuser=0)

![Planos e Filmes](https://lh3.googleusercontent.com/wYPNZQv3eAZ4nX_Ftb2UGglPoa1uc1kbI83aZE5Fw2uHBni7QjIaEdqqiyozck2s2JG3NKTWLqU2phXuMtnQ5cpNaw7JftiyyLH5stMuZ0DvXZoqXueZzyV6QD6RkLwr8nqKAXs0eNLJxey7RLanpVhXoZ1BTAl-pjO--SoenNUoo2symwEHSCzUNJhDceSfc_1DBnq9XyS4pM2p9XE0cK2XvgRL_9uk1mBPI9kE6zMvNzJNuaZrDkgfD5HZUrapPeMjByinLO5vv1QngBh7tq7Ttb3T0SPd3wSmRX3Uaj_nDBDt3PNBx8EPiNp4GbU0DGeWivwBh_8pA90xziQMjLwf7c93QbZJb6uZ1YIE9kD7j6_j5JJObTVOkNQd-duJzXNm-Vwk5WNheUP7zPFxVZDCejtKSNWaXH_xS-5LE400HmusCgfCjafQaHb2kBWYyuDL8vb2cap9WGHFWHrrP4sGvn4LMNAMeXtd1WO2C0brk95289woJkoKIZO3VQU1Cxdzomg6R4igX2e-JmSEg12CRSUYM0C63e7a0HNY8MFNpYAOcHJKq34FbGhzbuVkcxbJn7oXUzYps5RleejOEcxhTtUQWf_no5BIJF7s1tAZHHZIY2in_coUSIJuJnu8AuIKSPGpj60aGqBSF127ghjnwNQ79os__LUF5fslGAnxcdc9CHOXPatl869Zj2MpdsKKKOdK0bmn4wr09hQB1crIzO0NEUOaAMRyc_dUV092LKpM7QbYT79RXZg=w744-h262-no?authuser=0)


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

![Create New](https://lh3.googleusercontent.com/OxbsgzhBvAkuZZ52ISAPUDdwQxto5VBfC2XY_u5WxQ1OsC6LyMSxe1Oa-bOLkGkpxBeS4f5rcNa0rIDFUcqYEv-hPvke_l3Md7CPinxpGVOqssK19Ylxs89wN8I2nEJtbpx3G-4-ySG41shnZDLLTHabWLUHudaJfgytewUuWgzIkbKSCOtLgOkOUEzclo5ev0-keGZBPDKMSroq2ezGw6jRQCsTMJ5DsERS5u_CF-c9ne1ggh4YRsPCcmjMz_bwO8zFqFFC1coELLHV15RQwviTyfbJDXgsyET3r70eNpeAWtnkr5zmD2DPbkIl3CfgNQs4TkXUwdZRg00sMLn4iPZAP55xdlWrN8GwNK0mso4sK3chkkIqOTRid9K2QdVHAZ6mRKyHef9pHdxu0A7VgYNIRbX4USB4aCYZA_3S0AaIej_oS3KDBGG-NzY5d86Zotu8pM0wyzcHxQXj1BwGGvW0lNIFh8BbEcwi0vOp_AgEwrDBtPdSK-p_O83UmZD5QTsGTrMN1PxccHjdtdTnwA-c7RRSaOuKMUYqCDSzn-ZMLHkUqv4q1jKg9x9wcVwRJLNsJc30lQuy9EfWzI1iWtLtM3Jl-fv-LP2U_DNimy3vs8Vix5md4JPjfNAb-1WuqKka3ZDyp8mLHlSZFpxAGuLkfaCtlyPmfPpe9XW5Ehazji1sWTVWenW2aChoCzmj4DvfDwFQA7AMHPXopqGBKwkmzry1RGOATPm9TiS0yd8Fp1NZ26y0AXipqJQ=w581-h255-no?authuser=0)

4. Clique em ``HTTP Request`` para criar uma solicitação:

![http request](https://lh3.googleusercontent.com/Z_BvR7aYYxCUMJguLtDzDef6SVUrG6JLfYKjkSJQe5z4ezZHbqZwbFbsdYl2C4TEQ4g7N1xO1VoPKkJmK-R46eIwQrO6Eo5a_o61Tnx2Y7VjqLFfkVUP4CMP6tInygUK16rZLhf6_1T7HxktU8kFpzijtUXS7tnuWUcPsLnCSIQAUvjdNThMj9Vhg-Bqu1ZjaN9-rp1LEEpPsXOrOIzRkHaCnBjwYXQLfjmbr4i_x7vy9gUYhpxVlASIucnhsA23_sRMT2S8J1qlpNo8jahFEt8kUMF3WtyU3ChqIyNbDNATFpFITAZc_QQG5m4zl0vzAlqlIeEFBwYz_HSJ2yARglJZKZ1tf-HSHjyeuJGpD8r_8_weefS0lsE3y4b7h3mrOH1EwiFJ5O0cS-XErfonMq1ctKbTkSrh_oMJUbAY3wjx1mEgP759avjQ5Lf90bk66EGiBWmvaYoF0NHV08owlZ9bWkkHXcVICY81aff7SJ4Qynj2w73PuW8uAkwh3VHRZdhUnpqZIVqPHnRiVr09bcH3x6I8Axe3tWR7tlw7Hg7T_fHWnwbrTkGirdnAPcQo66HABbk0gYOtq4kMFtYH734gAEVo4nK8qs2KuL-LmimV64-vBEc-aaRGlJBzTPknuOZvqhqXwhMRxMHzogfl7undbYaGwZFiMcAp98rBql4dZV75z5hodhJ6us5095sAfWcK1lagjwOM03ILcAJaVFX-6xvufFh_V6vJeNQO7tlL-fQ_I3ZnFxRa9-g=w744-h316-no?authuser=0)



### Testando a entidade Users:


1. Selecione o metodo `GET`, depois escreva o caminho de acesso: `http://localhost:3000/users/all` clique em `Send`:

![GET](https://lh3.googleusercontent.com/sFK7XgvZSEeD_dl05McYXD4s-sJQcd7N0qSfe-KjrLNFrIFFpbrQb-Af7Hgmoe6pJ_DpIwg8GRHqoepD_TlVubLxOp_SpRYfI2U_iQ6Sd-Xp19mh4Q3qKce1UZpNDVTV0t6JVFuRfWfzoASuKHNr1trtsnE3_Ry7m8OCCr750qjKrnNFr4v8ZivlFkS_FUM-RlD8B7uoTEwkgEzuuei_ao6i0iAfaZ6HZbH3rfX40Thg5d-jTFzREq-ALPf8dYowIat--0GTIsuDoTqMSjvvuSk-zq0fkC4ON0_FzfDFlvyiK6P_M5XUmT9LxfTF78D5EqysWFSYB0iqA0nLHWGj00xK8uW7SoqT34TfEgm7hVG9hBVSZnf7rJZU_ns050M-YIuTKHR22l1uYmR_Td8xV0hrnE_kX1qiAoYkZTYglQhZiPbn497AJhZAxLMAOuOpBbUNDTy-5p2H7Dlia_3gQ_gtUC3pNLywKEJWIH3sWzZY55SV_8j124t1bW0qxnxb25f3fXPtZO0fmDdBRCx6fl92wfTrbtoaPx-zKcwVSE1RBRuCQ4jcNFo5EBAjz6FcAGOD1Y4wRUdUZoGo4X6UpukRTbc9fBm8nT0VaJR6xUyKOGtyQRg07MrMbmXrO5yhKabmx9SLAqARqFoD07e7c2l89gheWGMRuxGQPajcLNFzjb716TjaBgdOQrsrGFYgFH1r-GK8z3mEon_qkLkHsuCmlqV-NqPaR1gSIoRdIqHUlY3RjZS19A5oH-o=w744-h97-no?authuser=0)

2. Dados da API fornecidos:


![Create New](https://lh3.googleusercontent.com/DXNV8gfqVqJga-FMzc6vRWDrNNViYaqV5ZIR1CLMQpo2DCh_Gmk_S0DOcw1TMuVzGR8W1S5qV3WWf2m51apinqBY6Tpw8Kf_8g_GW9C-e9DdnwzosZdS8bItmOb0pMneDEjSEmmFg6gIuEEAnwMAaXEogFUoXgseBYCmi_Vn62JbzGu-iVHeyxrG1TtHkENMJtqbR0YqmY7kHX0h2MGEzT_Hr9wh0aoKLdsWX9JoXSTgtgtpqwbjXPmMaWaXkkB3BdkJ574q2gEOxjo-4dkshb0ZPn-SloireZnMXg9Q9tFFnWsopAvg6Jl-f5dX2ILv1XXaQB3SxA3-WMrFLY6qZza9mOlFFOjNG4ryk5pp1Th_5IfbbjsA2RgdbaDC6LBtDK1jJI147xb81EK_I8QCh-8CKSXz7FdDQWQSx3u470kCaAtxcrDdAS00dcujopHF7K7gAQh4veeTHnMr-jjfqdu255WyiLxzwuWMyuYvX1JKGP6KoU89YdnGbbhMQNogSCOO6I5DLFtHrcBJ3CRDfo3MtF73lDsbXiRrtxxbi7zhL_2ufzJ_lN_-s_Xk0zJOgZzyGaFiYNsFYgc4ARgJdKutXY8o1ptX1wdI5DkST3kDkrV7yyaAkOmxgZN3jBvlDqxlhU5YTtwhyHrqJnmYdD8cldXxlC_EZVRaZXE_AjS63hejnmiRaz2Lj0Bv_FkSdJ9l528nzk2s2d4AbKYgY22r7A3WMdn48CptE0zBXF5RON85O3tOcdB6PK0=w371-h199-no?authuser=0)


## Apresentação de Slides
Confira os [slides](https://www.canva.com/design/DAFJDodWpHc/ahlf-7_faJRB4SMG712-NQ/watch?utm_content=DAFJDodWpHc&utm_campaign=designshare&utm_medium=link&utm_source=publishsharelink) que fizemos para a nossa apresentação.


## Autores

- [Diego Cripim](https://github.com/Cripim)
- [Gustavo Vieira](https://github.com/GustavoVieiraDeAraujo)
- [Isabella Oliveira](https://github.com/isabellaoliv)
- [Marlon Alves](https://github.com/Marlonalvss)


