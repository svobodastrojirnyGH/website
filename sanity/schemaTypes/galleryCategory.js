import { defineField, defineType } from "sanity";


export const galleryCategory = defineType({
    name: 'galleryCategory',
    title: 'Kategorie Galerie',
    type: 'document',
    fields: [
        defineField({
            name: 'title',
            title: 'Název',
            type: 'string',
            validation: Rule => Rule.required(),
        }),

        defineField({
            name: 'slug',
            title: 'Slug',
            type: 'slug',
            description: '...',
            options: {
                source: 'title'
            }

        })
    ]
})