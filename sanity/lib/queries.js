import { defineQuery } from "next-sanity";

export const MACHINERY_QUERY = defineQuery(`
    *[_type == "machineryItem"] | order(_createdAt desc) {
      _id,
      title,
      machineryCategory-> {
        _id,
        title
      },
      image,
      parameters,
      description
    }
`)

export const GALLERY_QUERY = defineQuery(`
    *[_type == "galleryImage"] | order(_createdAt desc) {
    _id,
    alt,
    description,
    image,
    galleryCategory->{
      _id,
      title
    }
  }
`)