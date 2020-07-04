import mongoose from 'mongoose';
//teste branche
mongoose 
  .connect(
    //'mongodb+srv://paulo:123456@bootcamp.lzptq.mongodb.net/teste?retryWrites=true&w=majority',
    'mongodb+srv://paulolot:pLqb4n6egiysShnd@bootcamp.lzptq.mongodb.net/trabalhoPratico?retryWrites=true&w=majority',
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }
  )
  .then(console.log('db conectado'))
  .catch((err) => {
    console.log('erro ao conectar ' + err);
  });
