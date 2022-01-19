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
                  buildHookId: '61e8726da155ad1261077419',
                  title: 'Sanity Studio',
                  name: 'sanity-kitchen-sink-test-studio-v52jrpch',
                  apiId: '54602956-7e32-43a2-9a6c-5e2be59a74d6'
                },
                {
                  buildHookId: '61e8726e1b8cc6145c91283c',
                  title: 'Blog Website',
                  name: 'sanity-kitchen-sink-test-web-5fg92p7u',
                  apiId: 'bb5e0d0b-1a32-4c70-a6fa-15347e3e446d'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/dev-searchengineunity/sanity-kitchen-sink-test',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-kitchen-sink-test-web-5fg92p7u.netlify.app', category: 'apps'}
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
