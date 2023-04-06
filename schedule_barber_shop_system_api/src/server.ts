import { app, server } from "./app";


const port: number = process.env.PORT? parseFloat(process.env.PORT): 3001

server.listen(port, () => {
  console.log(`Aplicação rodando na porta ${port}`);
});