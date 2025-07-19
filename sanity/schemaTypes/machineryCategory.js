import { defineField, defineType } from "sanity";


export const machineryCategory = defineType({
    name: 'machineryCategory',
    title: 'Strojní Vybavení Kategorie',
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