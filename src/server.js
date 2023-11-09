import express from "express";
import { config } from "dotenv";

config();

const port = process.env.PORT || 5000;

const app = express();
app.use(express.json());

// app.get("/", (req, res) => {
//     const nome = req.query.nome;
//     const anime = req.query.anime;
//     const page = req.query.anime;
//     const limit = req.query.limit;

//     res.status(200).json({ message: nome, anime: anime, pagina: page, LimitePágina: limit});
// });

app.get("/:nome/:anime", (req, res) => {
    const nome = req.params.nome;
    const qualquerNome = req.params.anime;

    res.status(200).json({ Nome: nome, anime: qualquerNome});
})

app.get("/", (req, res) => {
    const nome = req.query.nome;
    const idade = req.query.idade;
    const coisaQueGosta = req.query.coisaQueGosta;

    res.status(200).json({ frase: `Meu nome é ${nome}, tenho ${idade} anos, e gosto de ${coisaQueGosta}.`});
})

app.post("/", (req, res) => {
    const nome = req.body.nome;
    const sobrenome = req.body.sobrenome;
    const idade = req.body.idade;
    res.status(200).json({ Nome: nome, Sobrenome: sobrenome, Idade: idade });
});

app.delete("/", (req, res) => {
    res.status(200).json({ message: "Hello, Delelte!"});
});

app.put("/", (req, res) => {
    res.status(200).json({ message: "Hello, Put!"});
});

app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
});