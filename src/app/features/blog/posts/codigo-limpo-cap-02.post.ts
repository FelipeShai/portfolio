import { BlogPost } from '../blog.types';

// Este post tem uma rota dedicada (ver app.routes.ts + features/blog/chapters/codigo-limpo-cap-02)
// que preserva o design do artigo. Os campos abaixo alimentam apenas o card
// na listagem "/blog"; sections/conclusion/references ficam vazios de propósito.
export const codigoLimpoCap02Post: BlogPost = {
  slug: 'codigo-limpo-cap-02',
  title: 'Código Limpo, Cap. 2: nomes significativos',
  description:
    'Resumo do Capítulo 2 de "Código Limpo" (Robert C. Martin, com Tim Ottinger): dezessete regras práticas para nomear variáveis, funções e classes.',
  publishedAt: '2026-08-29',
  readingTime: '8 min',
  author: 'Felipe Shai',
  tags: ['Código Limpo', 'Boas práticas', 'Robert C. Martin'],
  sections: [],
  conclusion: [],
  references: [],
};
