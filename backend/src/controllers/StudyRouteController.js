const { StudyRoute, StudyTopic } = require('../models');
const { OpenAI } = require('openai');

const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });

module.exports = {
  createRoute: async (req, res) => {
    const { title, area, description, topics } = req.body;
    const userId = req.user.id;

    if (!topics || topics.length < 3) {
      return res.status(400).json({ message: 'Informe ao menos 3 tópicos.' });
    }

    const prompt = `
Crie uma trilha de estudos com base nas seguintes informações:

Título: ${title}
Área: ${area}
Descrição: ${description}
Tópicos: ${topics.join(', ')}

Formato: 
- Título da Etapa
- Descrição da Etapa
- Marcável como concluída
Organize por ordem lógica e progressiva.
    `;

    try {
      const aiResponse = await openai.createChatCompletion({
        model: 'gpt-4',
        messages: [{ role: 'user', content: prompt }],
      });

      const roadmap = aiResponse.data.choices[0].message.content;

      const newRoute = await StudyRoute.create({ title, area, description, roadmap, userId });

      const topicEntries = topics.map(t => ({ title: t, routeId: newRoute.id }));
      await StudyTopic.bulkCreate(topicEntries);

      res.status(201).json({ route: newRoute });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Erro ao criar rota de estudo' });
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