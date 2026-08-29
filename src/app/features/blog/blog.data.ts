import { BlogPost } from './blog.types';
import { comandosLinuxEssenciaisTerminalPost } from './posts/comandos-linux-essenciais-terminal.post';
import { cloneableJavaDeepCopyPost } from './posts/cloneable-java-deep-copy.post';
import { codigoLimpoCap01Post } from './posts/codigo-limpo-cap-01.post';
import { codigoLimpoCap02Post } from './posts/codigo-limpo-cap-02.post';

export const blogPosts: readonly BlogPost[] = [
  codigoLimpoCap02Post,
  codigoLimpoCap01Post,
  comandosLinuxEssenciaisTerminalPost,
  cloneableJavaDeepCopyPost,
] as const;

export const featuredPostSlug = codigoLimpoCap02Post.slug;

export function findBlogPostBySlug(slug: string): BlogPost | undefined {
  return blogPosts.find((post) => post.slug === slug);
}
