export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-nextjs-landing-pages'
      }
    },
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
                  buildHookId: '61ee4d308b6f2751221a9300',
                  title: 'Sanity Studio',
                  name: 'sanity-nextjs-landing-pages-studio-nqzcycp1',
                  apiId: 'bd527388-eda2-4a5a-9859-32f526698929'
                },
                {
                  buildHookId: '61ee4d3146129e62d6c1c043',
                  title: 'Landing pages Website',
                  name: 'sanity-nextjs-landing-pages-web-s3xervv9',
                  apiId: '93e35593-4360-4788-a4ad-4af0b9241a32'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/taosut/sanity-nextjs-landing-pages',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-nextjs-landing-pages-web-s3xervv9.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recently edited', order: '_updatedAt desc', limit: 10, types: ['page']},
      layout: {width: 'medium'}
    }
  ]
}