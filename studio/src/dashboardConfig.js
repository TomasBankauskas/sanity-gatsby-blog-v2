export default {
  widgets: [
    { name: 'structure-menu' },
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
                  buildHookId: '5ffcce23e5139c1e411ef9fd',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-blog-v-2-studio',
                  apiId: 'e947f889-bb4d-4c2d-bd59-d3e4de8fcfba'
                },
                {
                  buildHookId: '5ffcce2316b9c71f4a378f50',
                  title: 'Blog Website',
                  name: 'sanity-gatsby-blog-v-2',
                  apiId: 'ba0eabde-51f4-4534-bc81-610f97d3a65f'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/TomasBankauskas/sanity-gatsby-blog-v2',
            category: 'Code'
          },
          { title: 'Frontend', value: 'https://sanity-gatsby-blog-v-2.netlify.app', category: 'apps' }
        ]
      }
    },
    { name: 'project-users', layout: { height: 'auto' } },
    {
      name: 'document-list',
      options: { title: 'Recent blog posts', order: '_createdAt desc', types: ['post'] },
      layout: { width: 'medium' }
    }
  ]
}
