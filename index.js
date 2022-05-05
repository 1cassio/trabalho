import express from 'express';

const app = express(); 

app.listen(1234,()=> 
    console.log('servidor iniciado')
    );

    app.get('/' , (rec,res) =>
    res.send('ok')
    );