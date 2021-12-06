import gql from 'graphql-tag';

export const GET_REPOS = gql`
  {
  user(login: "ofirmich") {
    repositories(first: 4 orderBy: {field:UPDATED_AT, direction: DESC} ) {
      nodes {
        id
        name
        description
        url
        isPrivate
        owner {
          id
          login
        }
        diskUsage
      }
    }
  }
}

`;



export const GET_EXTRA_DATA = gql`
query($name: String!)
{
  user(login: "ofirmich") {
    repository(name: $name) {
      name
      isPrivate
      object(expression: "master:.github/workflows/test.yml") {
        id
        ... on Blob {
          text
          byteSize
        }
      }
      ref(qualifiedName: "master") {
        name
        target {
          ... on Commit {
            id
            history(first: 1) {
              pageInfo {
                hasNextPage
              }
              totalCount
              # edges {
              #   node {
              #     changedFiles
              #     tree {
              #       entries {
              #         name
              #         object {
              #           ... on Tree {
    
              #             entries {
              #               name
                      
              #             }
              #           }
              #         }
              #       }
              #     }
              #   }
              # }
            }
          }
        }
      }
    }
  }
}



    
`;
