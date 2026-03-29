import express from 'express';
import type { Express } from 'express';
import productRoutes from './routes/productRoutes';
import dailyRoutes from './routes/dailyRoutes';
import cors from 'cors';

const app: Express = express();

app.use(express.json());

app.use(cors({ origin: 'http://localhost:5173' }));

app.use('/products', productRoutes);
app.use('/daily', dailyRoutes);

app.use('*', (req, res) => {
    res.status(404).json({ error: 'Nie znaleziono endpointu' });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(` App is running on http://localhost:${PORT}`);
});