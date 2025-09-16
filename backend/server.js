import app from './app.js';
import { PORT } from './src/config/env.js';

app.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`);
});
