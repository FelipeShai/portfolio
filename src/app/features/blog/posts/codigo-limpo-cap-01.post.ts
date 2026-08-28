import { BlogPost } from '../blog.types';

// Este post tem uma rota dedicada (ver app.routes.ts + features/blog/chapters/codigo-limpo-cap-01)
// que preserva o design original do artigo. Os campos abaixo alimentam apenas o card
// na listagem "/blog"; sections/conclusion/references ficam vazios de propósito.
export const codigoLimpoCap01Post: BlogPost = {
  slug: 'codigo-limpo-cap-01',
  title: 'Código Limpo, Cap. 1: por que código limpo é a base de tudo',
  description:
    'Resumo do Capítulo 1 de "Código Limpo" (Robert C. Martin): o custo real de um código confuso, a Lei de LeBlanc e a Regra do Escoteiro.',
  publishedAt: '2026-08-28',
  readingTime: '7 min',
  author: 'Felipe Shai',
  tags: ['Código Limpo', 'Boas práticas', 'Robert C. Martin'],
  sections: [],
  conclusion: [],
  references: [],
};
