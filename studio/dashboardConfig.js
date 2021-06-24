export default {
  widgets: [
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '60d489484aa32300dbb214a0',
                  title: 'Sanity Studio',
                  name: 'sanity-kitchen-sink-studio-xrn7jdgo',
                  apiId: '8055480b-da17-4ed6-8d90-20ac85897e7b'
                },
                {
                  buildHookId: '60d4894844d8ec00b0e67e4e',
                  title: 'Blog Website',
                  name: 'sanity-kitchen-sink-web-ha5dpdtp',
                  apiId: 'db47a3fb-db8c-419a-b832-13a393d4db70'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/luigi-veo/sanity-kitchen-sink',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-kitchen-sink-web-ha5dpdtp.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}
