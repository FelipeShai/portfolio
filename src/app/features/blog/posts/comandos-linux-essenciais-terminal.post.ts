import { BlogPost } from '../blog.types';

// Este post tem uma rota dedicada (ver app.routes.ts + features/blog/chapters/comandos-linux-essenciais-terminal)
// que preserva o design rico do artigo. Os campos abaixo alimentam apenas o card
// na listagem "/blog"; sections/conclusion/references ficam vazios de propósito.
export const comandosLinuxEssenciaisTerminalPost: BlogPost = {
  slug: 'comandos-linux-essenciais-terminal',
  title: 'Comandos Linux essenciais para navegar, administrar e resolver no terminal',
  description:
    'Um guia de referência rápida com os comandos que mais aparecem no dia a dia: arquivos, pacotes, processos, rede, compactação e permissões.',
  publishedAt: '2026-04-20',
  readingTime: '8 min',
  author: 'Felipe Shai',
  tags: ['Linux', 'Terminal', 'CLI', 'Produtividade'],
  sections: [],
  conclusion: [],
  references: [],
};
