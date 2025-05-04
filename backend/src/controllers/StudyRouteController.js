const { StudyRoute, StudyTopic } = require('../models');
const { GoogleGenerativeAI } = require('@google/generative-ai');

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);

module.exports = {
  createRoute: async (req, res) => {
    const { title, area, description, topics } = req.body;
    const userId = req.user.id;

    if (!title || !area || !description) {
      return res.status(400).json({ message: 'Preencha todos os campos obrigatórios.' });
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
      console.log('Enviando prompt para Gemini...');
      const model = genAI.getGenerativeModel({ model: 'gemini-pro' });

      const result = await model.generateContent(prompt);
      const response = await result.response;
      const roadmap = response.text();

      const newRoute = await StudyRoute.create({ title, area, description, roadmap, userId });

      const topicEntries = topics.map(t => ({ title: t, routeId: newRoute.id }));
      await StudyTopic.bulkCreate(topicEntries);

      res.status(201).json({ route: newRoute });
    } catch (error) {
      console.error('Erro ao gerar com Gemini:', error);
      res.status(500).json({
        message: 'Erro ao gerar a trilha de estudos com Gemini.',
        error: error.message,
      });
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