// Rotas de Reservas
app.post('/reservas', async (req, res) => {
    const reserva = await Reserva.create(req.body);
    res.json(reserva);
});

app.put('/reservas/:id', async (req, res) => {
    await Reserva.update(req.body, { where: { id: req.params.id } });
    res.json({ message: 'Reserva atualizada' });
});

app.delete('/reservas/:id', async (req, res) => {
    await Reserva.destroy({ where: { id: req.params.id } });
    res.json({ message: 'Reserva excluída' });
});