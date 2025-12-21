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
                        validate: (value: any, { siblingData }: any) => {
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
                        validate: (value: any, { siblingData }: any) => {
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
                        validate: (value: any, { siblingData }: any) => {
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
                fields: [
                {
                    name: 'newTab',
                    type: 'checkbox',
                    label: 'Ouvrir dans un nouvel onglet',
                    defaultValue: false,
                },
                {
                    name: 'noFollowLink',
                    type: 'checkbox',
                    label: 'Interdire le suivi du lien sur Google',
                    defaultValue: false,
                }
                ]
            }
        ]
    },
]

export default LinkComponent;