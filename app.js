const path =require('path')
const express =require('express');
const app = express();
const port = 3030;


app.use(express.static('public'));

app.get('/', (req, res)=> res.sendFile(path.resolve(__dirname,'views','index.html')));





app.listen(port, () => console.log(`Server running on port http://localhost:${port}`))