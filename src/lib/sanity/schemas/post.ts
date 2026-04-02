/**
 * Sanity schema definition for blog posts.
 * Use this schema when configuring Sanity Studio.
 *
 * To set up: copy this into your Sanity Studio project's schemas folder
 * and register it in the schema configuration.
 */
const postSchema = {
  name: 'post',
  title: 'Post',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Título',
      type: 'object',
      fields: [
        { name: 'pt', title: 'Português', type: 'string' },
        { name: 'en', title: 'English', type: 'string' },
      ],
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: { source: 'title.pt', maxLength: 96 },
    },
    {
      name: 'category',
      title: 'Categoria',
      type: 'string',
      options: {
        list: [
          { title: 'Fichamento', value: 'fichamento' },
          { title: 'Resenha', value: 'resenha' },
          { title: 'Tutorial', value: 'tutorial' },
        ],
      },
    },
    {
      name: 'excerpt',
      title: 'Resumo',
      type: 'object',
      fields: [
        { name: 'pt', title: 'Português', type: 'text', rows: 3 },
        { name: 'en', title: 'English', type: 'text', rows: 3 },
      ],
    },
    {
      name: 'body',
      title: 'Conteúdo',
      type: 'object',
      fields: [
        {
          name: 'pt',
          title: 'Português',
          type: 'array',
          of: [
            { type: 'block' },
            { type: 'image', options: { hotspot: true } },
            {
              type: 'code',
              title: 'Code Block',
              options: {
                languageAlternatives: [
                  { title: 'Java', value: 'java' },
                  { title: 'JavaScript', value: 'javascript' },
                  { title: 'TypeScript', value: 'typescript' },
                  { title: 'SQL', value: 'sql' },
                  { title: 'Bash', value: 'bash' },
                  { title: 'JSON', value: 'json' },
                  { title: 'YAML', value: 'yaml' },
                ],
              },
            },
          ],
        },
        {
          name: 'en',
          title: 'English',
          type: 'array',
          of: [
            { type: 'block' },
            { type: 'image', options: { hotspot: true } },
            {
              type: 'code',
              title: 'Code Block',
              options: {
                languageAlternatives: [
                  { title: 'Java', value: 'java' },
                  { title: 'JavaScript', value: 'javascript' },
                  { title: 'TypeScript', value: 'typescript' },
                  { title: 'SQL', value: 'sql' },
                  { title: 'Bash', value: 'bash' },
                  { title: 'JSON', value: 'json' },
                  { title: 'YAML', value: 'yaml' },
                ],
              },
            },
          ],
        },
      ],
    },
    {
      name: 'coverImage',
      title: 'Imagem de capa',
      type: 'image',
      options: { hotspot: true },
    },
    {
      name: 'publishedAt',
      title: 'Data de publicação',
      type: 'datetime',
    },
  ],
  preview: {
    select: {
      title: 'title.pt',
      media: 'coverImage',
      category: 'category',
    },
    prepare({ title, media, category }: { title: string; media: unknown; category: string }) {
      return {
        title,
        subtitle: category,
        media,
      }
    },
  },
}

export default postSchema
