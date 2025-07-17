import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const app = express();
const PORT = process.env.PORT || 3000;


app.use(express.json());


app.use(express.static(path.join(__dirname, 'public')));


let quotes = [
  "The best way to predict the future is to invent it.",
  "Life is 10% what happens to us and 90% how we react to it.",
  "The only limit to our realization of tomorrow is our doubts of today.",
  "Do not wait to strike till the iron is hot; but make it hot by striking."
];


app.get('/api/quote', (req, res) => {
  const randomIndex = Math.floor(Math.random() * quotes.length);
  res.json({ quote: quotes[randomIndex] });
});

// Square calculation 
app.get('/square', (req, res) => {
    const num = parseFloat(req.query.num);
    
    if (isNaN(num)) {
        return res.send("Error: Please provide a valid number using query parameter 'num'.");
    }
    
    const square = num * num;
    res.send(`The square of ${num} is: ${square}`);
});

// Addition endpoint (for Task 2.2P)
app.get('/add', (req, res) => {
    const a = parseFloat(req.query.a);
    const b = parseFloat(req.query.b);
    
    if (isNaN(a) || isNaN(b)) {
        return res.send("Error: Please provide valid numbers for both 'a' and 'b' parameters.");
    }
    
    const sum = a + b;
    res.send(`The sum of ${a} and ${b} is: ${sum}`);
});


app.listen(PORT, () => {
  console.log(`App listening on port: ${PORT}`);
  console.log(`Access: http://localhost:${PORT}`);
});