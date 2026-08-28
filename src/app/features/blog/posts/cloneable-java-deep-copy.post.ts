import { BlogPost } from '../blog.types';

// Este post tem uma rota dedicada (ver app.routes.ts + features/blog/chapters/cloneable-java-deep-copy)
// que preserva o design rico do artigo. Os campos abaixo alimentam apenas o card
// na listagem "/blog"; sections/conclusion/references ficam vazios de propósito.
export const cloneableJavaDeepCopyPost: BlogPost = {
  slug: 'cloneable-java-deep-copy',
  title: 'Cloneable no Java: shallow copy, deep copy e por quê evitar',
  description:
    'Ao clonar um objeto em Java, há duas abordagens: Shallow Copy (cópia rasa) e Deep Copy (cópia profunda).',
  publishedAt: '2026-04-20',
  readingTime: '10 min',
  author: 'Felipe Shai',
  tags: ['Java', 'Cloneable', 'Boas práticas'],
  sections: [],
  conclusion: [],
  references: [],
};
