
async function fetchAPI(query, { variables } = {}) {
    const req = await fetch(`${process.env.CONTENT_API_URL}/graphql`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        query,
        variables,
      }),
    })
  
    const res = await req.json()
    if (res.errors) {
      console.error(res.errors)
      throw new Error('Failed to fetch API')
    }
  
    return res.data
  }
  
  export async function getPreviewPostById(id) {
    const data = await fetchAPI(
        `
        query {
            posts( publicationState: PREVIEW, where:{id:${id}} ) {
                title
            }
          }
        `
    )    
    return data?.posts[0]
  }
  
  export async function getPreviewPostBySlug(slug) {
      const data = await fetchAPI(
          `
          query {
              posts( publicationState: PREVIEW, where:{slug:"${slug}"} ) {
                  title
              }
            }
  
          `
      )
      return data?.posts[0]
  }
  
  export async function getPostBySlug(slug) {
    const data = await fetchAPI(
        `
        query {
            posts( publicationState: LIVE, where:{slug:"${slug}"} ) {
                title
            }
          }
  
        `
    )
    return data?.posts[0]
  }
  
  export async function getShowBySlug(slug) {
    const data = await fetchAPI(
        `
        query {
            shows( publicationState: LIVE, where:{slug:"${slug}"} ) {
                title
            }
          }
  
        `
    )
    return data?.shows[0]
  }
  
  export async function getWorks() {
    const data = await fetchAPI(
        `
        query {
          works( publicationState: LIVE ) {
              title
          }
        }

        `
    )
    return data?.works
  }
    
  
    
  