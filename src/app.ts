import express from 'express';
const port = 3000;
import swaggerUi from 'swagger-ui-express';
const app = express();
import yaml from 'js-yaml';
import fs from 'fs';
import createGroup from './routes/createGroup';
import getGroup from './routes/getGroup';

const doc = yaml.load(fs.readFileSync('./src/swagger/api.yaml', 'utf8'));

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(doc))
app.use(express.json())

app.get('/livecheck', (req, res) => {
  res.send("OK");
});

app.post('/create-group', (req,res) => {
  const group = createGroup(req.body.name);
  res.send(group);
});

app.get('/get-group/:name', (req,res) => {
  const group = getGroup(req.params.name)
  res.send(group);
});

app.listen(port, () => {
  console.log(`Express is listening at http://localhost:${port}`);
});