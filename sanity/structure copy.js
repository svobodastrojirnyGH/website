import { StructureBuilder as S } from 'sanity/desk';
import {
  ImagesIcon,
  FolderIcon,
  ImageIcon,
  WrenchIcon,
  CogIcon
} from '@sanity/icons';
import { orderableDocumentListDeskItem } from '@sanity/orderable-document-list';

orderableDocumentListDeskItem

export const structure = (S) =>
  S.list()
    .title('Obsah')
    .items([

      // 🖼️ Galerie Section
      S.listItem()
        .title('Galerie')
        .icon(ImagesIcon)
        .child(
          S.documentTypeList('galleryCategory')
            .title('Kategorie Galerie')
            .child(categoryId =>
              S.documentList()
                .title('Fotky v kategorii')
                .filter('_type == "galleryImage" && references($categoryId)')
                .params({ categoryId })
            )
        ),

      // 🛠️ Strojní Výbava Section
      S.listItem()
        .title('Strojní Výbava')
        .icon(CogIcon)
        .child(
          S.documentTypeList('machineryCategory')
            .title('Kategorie Výbavy')
            .child(categoryId =>
              S.documentList()
                .title('Stroje v kategorii')
                .filter('_type == "machineryItem" && references($categoryId)')
                .params({ categoryId })
            )
        ),
    ]);
