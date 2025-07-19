// https://www.sanity.io/docs/structure-builder-cheat-sheet
export const structure = (S) =>
  S.list()
    .title('Content')
    .items([
        S.documentTypeListItem('galleryCategory').title('Kategorie Galerie'),
        S.documentTypeListItem('galleryImage').title('Galerie Fotka'),
        S.documentTypeListItem('machineryCategory').title('Kategorie Strojní Výbava'),
        S.documentTypeListItem('machineryItem').title('Strojní Výbava'),
    ])
