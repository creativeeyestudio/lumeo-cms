// collections/Themes.ts
import { CollectionConfig } from 'payload'

export const Themes: CollectionConfig = {
  slug: 'themes',
  labels: {
    singular: 'Thème',
    plural: 'Thèmes',
  },
  admin: {
    useAsTitle: 'themeName',
    group: 'Fonctions du site',
    hidden: ({ user }) => {
      return !['admin', 'editor'].includes(user?.role)
    },
  },
  access: {
    read: () => true,
    create: ({ req }) => ['admin', 'editor'].includes(req.user?.role ?? 'editor'),
    update: ({ req }) => ['admin', 'editor'].includes(req.user?.role ?? 'editor'),
    delete: ({ req }) => ['admin', 'editor'].includes(req.user?.role ?? 'editor'),
  },
  fields: [
    { 
        name: 'themeName', 
        label: "Nom du thème",
        type: 'text', 
        required: true 
    },
    { 
        name: 'zip', 
        label: "Fichier ZIP",
        type: 'upload', 
        relationTo: 'media', 
        required: true 
    },
    { 
        name: 'themeData', 
        type: 'json', 
        admin: { 
            readOnly: true, 
            hidden: true 
        } 
    },
  ],
}

export default Themes
