const { StudyRoute, StudyTopic } = require('../models');

module.exports = {
  createRoute: async (req, res) => {
    const { title, area, description, topics } = req.body;
    const userId = req.user.id;

    if (!title || !area || !description || !topics || topics.length === 0) {
      return res.status(400).json({ message: 'Preencha todos os campos obrigatórios e adicione ao menos um tópico.' });
    }

    const roadmap = topics.map((topic, index) => 
      `Etapa ${index + 1}: ${topic}\n- Estude o tópico "${topic}" com atenção.\n- Marcável como concluída.\n`
    ).join('\n');

    try {
      const newRoute = await StudyRoute.create({ title, area, description, roadmap, userId });

      const topicEntries = topics.map(t => ({ title: t, routeId: newRoute.id }));
      await StudyTopic.bulkCreate(topicEntries);

      res.status(201).json({ route: newRoute });
    } catch (error) {
      console.error('Erro ao criar trilha de estudos:', error);
      res.status(500).json({ message: 'Erro ao criar a trilha de estudos.', error: error.message });
    }
  },

  getAllRoutes: async (req, res) => {
    const userId = req.user.id;
    const routes = await StudyRoute.findAll({
      where: { userId },
      include: ['topics'],
    });
    res.json(routes);
  },

  getRouteById: async (req, res) => {
    const { id } = req.params;
    const route = await StudyRoute.findByPk(id, { include: ['topics'] });
    if (!route) return res.status(404).json({ message: 'Rota não encontrada' });
    res.json(route);
  },

  markTopicCompleted: async (req, res) => {
    const { id } = req.params;

    try {
      const topic = await StudyTopic.findByPk(id);
      if (!topic) return res.status(404).json({ message: 'Tópico não encontrado' });

      topic.completed = true;
      await topic.save();

      res.json({ message: 'Tópico marcado como concluído', topic });
    } catch (err) {
      console.error(err);
      res.status(500).json({ message: 'Erro ao marcar tópico como concluído' });
    }
  }
};