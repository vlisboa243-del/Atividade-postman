# Atividade — Requisições GET e POST

**Disciplina:** Desenvolvimento de Software em Nuvem e Ambientes de Desenvolvimento de Software

## Objetivo

Desenvolver um servidor com Node.js e Express, disponibilizando uma rota GET para verificar o funcionamento do servidor e rotas POST para realizar operações matemáticas.

## Tecnologias utilizadas

- Node.js
- JavaScript
- Express
- Postman (para testar as requisições)

## Funcionalidades

| Método | Rota | Descrição |
|---|---|---|
| GET | `/` | Verifica se o servidor está funcionando |
| POST | `/soma` | Soma dois números |
| POST | `/subtracao` | Subtrai dois números |
| POST | `/multiplicacao` | Multiplica dois números |
| POST | `/divisao` | Divide dois números |

## Como executar

1. Instale o [Node.js](https://nodejs.org/), caso ainda não esteja instalado.
2. Abra esta pasta no Visual Studio Code.
3. Abra o terminal do VS Code (`Terminal > Novo Terminal`).
4. Instale as dependências:

   ```bash
   npm install
   ```

5. Inicie o servidor:

   ```bash
   npm start
   ```

6. Acesse `http://localhost:3001` no navegador para testar a rota GET.

Para encerrar o servidor, volte ao terminal e pressione `Ctrl + C`.

## Como testar as rotas POST no Postman

Em cada teste, selecione o método **POST**, informe a URL indicada e escolha **Body > raw > JSON**.

Exemplo para soma:

**URL:** `http://localhost:3001/soma`

```json
{
  "a": 10,
  "b": 5
}
```

Resposta esperada:

```json
{
  "resultado": 15
}
```

Repita com as seguintes rotas:

| Operação | URL | Valores de exemplo | Resultado esperado |
|---|---|---|---:|
| Subtração | `http://localhost:3001/subtracao` | `a: 10`, `b: 5` | 5 |
| Multiplicação | `http://localhost:3001/multiplicacao` | `a: 10`, `b: 5` | 50 |
| Divisão | `http://localhost:3001/divisao` | `a: 10`, `b: 5` | 2 |

O servidor também valida os dados recebidos e impede divisão por zero.

## Evidências dos testes

Depois de executar cada teste, salve uma captura de tela correspondente na pasta `evidencias`, usando exatamente estes nomes:

### Requisição GET

![Evidência do teste GET](evidencias/get.png)

### Requisição POST — Soma

![Evidência do teste de soma](evidencias/soma.png)

### Requisição POST — Subtração

![Evidência do teste de subtração](evidencias/subtracao.png)

### Requisição POST — Multiplicação

![Evidência do teste de multiplicação](evidencias/multiplicacao.png)

### Requisição POST — Divisão

![Evidência do teste de divisão](evidencias/divisao.png)

> **Importante:** substitua estes espaços pelas capturas reais dos testes realizados no seu computador. Não envie imagens ilustrativas como se fossem resultados reais.

## Conclusão

A atividade demonstra a criação de um servidor Node.js com Express e o uso dos métodos HTTP GET e POST, incluindo o recebimento de dados em JSON, o processamento de operações matemáticas e o retorno de respostas ao cliente.
