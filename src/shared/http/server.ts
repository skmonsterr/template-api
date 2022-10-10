import express from 'express';
import 'express-async-errors';
import cors from 'cors';

const app = express();
app.use(cors);
app.use(express.json());

app.get('/', (request, response) => {
  return response.json({ message: 'Hello Dev!' });
});

app.listen(3000, () => {
  console.log('Server started on PORT 3000! 🚀 \n➡️ http://localhost:3000/');
});
