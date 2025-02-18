// Rotas de Avaliações
app.post('/avaliacoes', async (req, res) => {
    const avaliacao = await Avaliacao.create(req.body);
    res.json(avaliacao);
});

app.put('/avaliacoes/:id', async (req, res) => {
    await Avaliacao.update(req.body, { where: { id: req.params.id } });
    res.json({ message: 'Avaliação atualizada' });
});

app.delete('/avaliacoes/:id', async (req, res) => {
    await Avaliacao.destroy({ where: { id: req.params.id } });
    res.json({ message: 'Avaliação excluída' });
});