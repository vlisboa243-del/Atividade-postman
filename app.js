const express = require('express');

const app = express();
app.use(express.json());

// Rota GET: verifica se o servidor está funcionando.
app.get('/', (req, res) => {
  res.send('Oi, mundo! Servidor Node.js funcionando!');
});

// Operações matemáticas
function soma(a, b) {
  return a + b;
}

function subtracao(a, b) {
  return a - b;
}

function multiplicacao(a, b) {
  return a * b;
}

function divisao(a, b) {
  return a / b;
}

// Valida os dados recebidos no corpo da requisição.
function validarNumeros(req, res) {
  const { a, b } = req.body;

  if (typeof a !== 'number' || typeof b !== 'number' ||
      !Number.isFinite(a) || !Number.isFinite(b)) {
    res.status(400).json({
      erro: 'Envie os campos "a" e "b" como números.'
    });
    return null;
  }

  return { a, b };
}

// Rota POST: soma
app.post('/soma', (req, res) => {
  const valores = validarNumeros(req, res);
  if (!valores) return;

  res.json({ resultado: soma(valores.a, valores.b) });
});

// Rota POST: subtração
app.post('/subtracao', (req, res) => {
  const valores = validarNumeros(req, res);
  if (!valores) return;

  res.json({ resultado: subtracao(valores.a, valores.b) });
});

// Rota POST: multiplicação
app.post('/multiplicacao', (req, res) => {
  const valores = validarNumeros(req, res);
  if (!valores) return;

  res.json({ resultado: multiplicacao(valores.a, valores.b) });
});

// Rota POST: divisão
app.post('/divisao', (req, res) => {
  const valores = validarNumeros(req, res);
  if (!valores) return;

  if (valores.b === 0) {
    return res.status(400).json({
      erro: 'Não é possível dividir por zero.'
    });
  }

  res.json({ resultado: divisao(valores.a, valores.b) });
});

const PORT = process.env.PORT || 3001;

app.listen(PORT, () => {
  console.log(`Servidor funcionando em http://localhost:${PORT}`);
});
