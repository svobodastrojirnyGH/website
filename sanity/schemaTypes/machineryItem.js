import { defineField, defineType } from "sanity";

export const machineryItem = defineType({
    name: 'machineryItem',
    title: 'Strojní Výbava',
    type: 'document',
    fields: [

        defineField({
            name: 'machineryCategory',
            title: 'Kategorie',
            type: 'reference',
            to: [{type: 'machineryCategory'}],
            validation: Rule => Rule.required()
        }),

        defineField({
            name: 'title',
            title: 'Název',
            type: 'string',
            validation: Rule => Rule.required()
        }),

        defineField({
            name: 'image',
            title: 'Fotka',
            type: 'image',
            options: {
                hotspot: true
            },
            validation: Rule => Rule.required()
            
        }),

        defineField({
            name: 'parameters',
            title: 'Parametry',
            type: 'array',
            of: [
                {
                    type: 'object',
                    fields: [
                        {
                            name: 'name',
                            title: 'Parametr',
                            type: 'string',
                            validation: Rule => Rule.required()
                        },
                        {
                            name: 'value',
                            title: 'Hodnota',
                            type: 'string',
                            validation: Rule => Rule.required()
                        },

                    ],
                    preview: {
                        select: {
                            title: 'name',
                            subtitle: 'value'
                        }
                    }
                }
            ]
        }),

        defineField({
            name: 'description',
            title: 'Popis',
            type: 'string',
            description: 'Dodatečný popis'
        })

    ]
})