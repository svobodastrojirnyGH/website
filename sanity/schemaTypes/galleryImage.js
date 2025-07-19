import { defineField, defineType } from "sanity";

export const galleryImage = defineType({
    name: 'galleryImage',
    title: 'Fotka z Galerie',
    type: 'document',
    fields: [
        defineField({
            name: 'galleryCategory',
            title: 'Kategorie',
            type: 'reference',
            to: [{type: 'galleryCategory'}],
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
            name: 'alt',
            title: 'Alt Popisek',
            type: 'string',
            description: 'Pro SEO a čítačky obrazovek - krátky, pár slovní popis toho, co je na fotce',
            validation: Rule => Rule.required()
        }),
        defineField({
            name: 'description',
            title: 'Popis',
            type: 'string',
            description: 'Detailnější Popis - Zobrazí se na stránce - jestli vynechán, použije se Alt Popisek'
        })
    ]
})