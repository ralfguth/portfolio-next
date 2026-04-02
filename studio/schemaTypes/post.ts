import { defineType, defineField } from 'sanity'

export default defineType({
  name: 'post',
  title: 'Post',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Título',
      type: 'object',
      fields: [
        defineField({ name: 'pt', title: 'Português', type: 'string' }),
        defineField({ name: 'en', title: 'English', type: 'string' }),
      ],
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: { source: 'title.pt', maxLength: 96 },
    }),
    defineField({
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
    }),
    defineField({
      name: 'excerpt',
      title: 'Resumo',
      type: 'object',
      fields: [
        defineField({ name: 'pt', title: 'Português', type: 'text', rows: 3 }),
        defineField({ name: 'en', title: 'English', type: 'text', rows: 3 }),
      ],
    }),
    defineField({
      name: 'body',
      title: 'Conteúdo',
      type: 'object',
      fields: [
        defineField({
          name: 'pt',
          title: 'Português',
          type: 'array',
          of: [
            { type: 'block' },
            { type: 'image', options: { hotspot: true } },
            { type: 'code' },
          ],
        }),
        defineField({
          name: 'en',
          title: 'English',
          type: 'array',
          of: [
            { type: 'block' },
            { type: 'image', options: { hotspot: true } },
            { type: 'code' },
          ],
        }),
      ],
    }),
    defineField({
      name: 'coverImage',
      title: 'Imagem de capa',
      type: 'image',
      options: { hotspot: true },
    }),
    defineField({
      name: 'publishedAt',
      title: 'Data de publicação',
      type: 'datetime',
    }),
  ],
  preview: {
    select: {
      title: 'title.pt',
      media: 'coverImage',
      category: 'category',
    },
    prepare({ title, media, category }) {
      return {
        title,
        subtitle: category,
        media,
      }
    },
  },
})
