import express from 'express';
const port = 3000;
import swaggerUi from 'swagger-ui-express';
const app = express();
import yaml from 'js-yaml';
import fs from 'fs';

const doc = yaml.load(fs.readFileSync('./src/swagger/api.yaml', 'utf8'));

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(doc))
app.use(express.json())

app.get('/livecheck', (req, res) => {
  res.send("OK");
});

app.post('/create-group', (req,res) => {
  res.send({
    error: false,
    message: `${req.body.name} group created successfully`
  });
});

app.get('/get-group/:name', (req,res) => {
  res.send({
    error: false,
    message: `Group fetched ${req.params.name}`
  });
});

app.listen(port, () => {
  console.log(`Express is listening at http://localhost:${port}`);
});