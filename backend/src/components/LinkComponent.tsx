import { Field } from 'payload'

const LinkComponent = (imageView: boolean = false): Field[] => [
    {
        type: 'tabs',
        tabs: [
            {
                label: 'Lien',
                description: 'Configration du lien',
                fields: [
                    {
                        name: 'label',
                        type: 'text',
                        localized: true,
                        required: true,
                    },
                    {
                        name: 'type',
                        type: 'radio',
                        options: [
                            { label: 'Page', value: 'page' },
                            { label: 'Article', value: 'post' },
                            { label: 'Lien personnalisé', value: 'external' },
                        ],
                        defaultValue: 'page',
                        required: true,
                    },
                    {
                        name: 'page',
                        type: 'relationship',
                        relationTo: 'pages',
                        admin: {
                            condition: (_data, sibling) => sibling.type === 'page',
                        },
                        validate: (value, { siblingData }) => {
                            if (siblingData.type === 'page' && !value) {
                                return 'Une page est obligatoire'
                            }
                            return true
                        },
                    },
                    {
                        name: 'post',
                        type: 'relationship',
                        relationTo: 'posts',
                        admin: {
                            condition: (_data, sibling) => sibling.type === 'post',
                        },
                        validate: (value, { siblingData }) => {
                            if (siblingData.type === 'post' && !value) {
                                return 'Un article est obligatoire'
                            }
                            return true
                        },
                    },
                    {
                        name: 'url',
                        type: 'text',
                        admin: {
                            condition: (_data, sibling) => sibling.type === 'external',
                        },
                        validate: (value, { siblingData }) => {
                            if (siblingData.type === 'external' && !value) {
                                return 'Une URL est obligatoire'
                            }
                            return true
                        },
                    }
                ]
            },
            {
                label: 'Paramètres',
                description: 'Parametrages optionnels',
                fields: [{
                    name: 'image',
                    label: 'Image',
                    type: 'relationship',
                    relationTo: 'media',
                    admin: {
                        hidden: !imageView,
                    }
                },
                {
                    name: 'newTab',
                    type: 'checkbox',
                    label: 'Ouvrir dans un nouvel onglet',
                }
                ]
            }
        ]
    },
]

export default LinkComponent;