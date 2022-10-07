import { request,gql } from 'graphql-request'

const graphqlAPI = process.env.NEXT_PUBLIC_GRAPHCMS_ENDPOINT; // endpoint .env檔

export const getPosts = async() =>{
    const query = gql`
        query getPosts{
            postsConnection(orderBy: createdAt_DESC){
                edges {
                    node{
                        author {
                            bio
                            name
                            id
                            photo {
                            url
                            }
                        }
                        id
                        createdAt
                        featuredPost
                        slug
                        title
                        excerpt
                        thumbnail {
                            url
                        }
                        categories {
                            name
                            slug
                        }
                    }
                }
            }
        }
        
    `
    const result =  await request(graphqlAPI,query)
    return result.postsConnection.edges;
} 

export const getPostDetails = async(slug) =>{
    const query = gql`
        query GetPostDetails ($slug:String!){
            post(where: {slug:$slug}){
                author {
                    bio
                    name
                    id
                    photo {
                    url
                    }
                }
                createdAt
                slug
                title
                excerpt
                thumbnail {
                    url
                }
                categories {
                    name
                    slug
                }
                content{
                    raw
                    json
                    references{
                        __typename
                        ...on Post{
                            id
                            title
                            slug
                            excerpt
                            thumbnail{
                                url
                            }
                        }
                        ...on Asset{
                            id
                            url
                            mimeType
                        }
                    }
                }
            }
        }  
    `
    const result =  await request(graphqlAPI,query,{ slug })
    return result.post;
} 
// 首頁的側欄 顯示最新貼無文
export const getRecentPosts = async() =>{
    const query = gql`
        query GetPostDetails {
            posts(orderBy: createdAt_DESC, first: 4)
            {
                title
                createdAt
                slug
                thumbnail {
                    url
                }
            }
        }
        
    `
    const result = await request(graphqlAPI,query)
    return result.posts
}
// category !在[]裡的˙=List裡不能有null member List本身可以是null
// slug_not 不要取得目前所在頁面的 slug 要取得目前除這篇以外的相同category的貼文
// 進入特定文章的狀態 顯示類似貼文
export const getSimilarPosts = async (categories,slug) => {
    const query = gql`
        query GetPostDetails($slug:String!,$categories:[String!]){
            posts(
                where:{slug_not:$slug AND: {categories_some :{slug_in:$categories}}}
                first: 4
            ){
                title
                createdAt
                slug
                thumbnail {
                    url
                }
            } 

        }
    `
    const result = await request(graphqlAPI,query,{categories,slug})
    return result.posts
}

export const getCategories = async() =>{
    const query = gql`
        query GetCategories {
            categories {
                name
                slug
            }
        }
        `
    const result = await request(graphqlAPI,query)
    return result.categories        
} 

export const getCategoryPost = async (slug) =>{
    const query = gql`
        query getCategoryPost($slug:String!){
            postsConnection(where: {categories_some: {slug:$slug}}) 
            {
                edges {
                  cursor
                  node {
                    author {
                      bio
                      name
                      id
                      photo {
                        url
                      }
                    }
                    id
                    createdAt
                    slug
                    title
                    excerpt
                    featuredPost
                    thumbnail {
                      url
                    }
                    categories{
                      name
                      slug
                    }
                  }
                }
            }
        }
    `
    const result =  await request(graphqlAPI,query,{ slug })
    return result.postsConnection.edges;
}
export const getCarouselPost = async () =>{
    const query = gql`
        query getCarouselPost(){
            posts(where: {carouselShow:true}) {
                author{
                    name
                    photo{
                    url
                    }
                }
                thumbnail{
                    url
                }
                title
                slug
                createdAt
            }
        }
    `
    const result = await request(graphqlAPI,query)
    return result.posts
}

export const getFeaturedPost = async () =>{
    const query = gql`
        query GetFeaturedPost(){
            posts(where: {featuredPost:true},first:10) {
                author{
                    name
                    photo{
                    url
                    }
                }
                thumbnail{
                    url
                }
                title
                slug
                createdAt
            }
        }
    `
    const result =  await request(graphqlAPI,query)
    return result.posts
}

// 取>=及<=所在這篇的日期及slug來當上篇下篇貼文
export const getAdjacentPosts = async (createdAt, slug) => {
    const query = gql`
      query GetAdjacentPosts($createdAt: DateTime!,$slug:String!) {
        next:posts(
          first: 1
          orderBy: createdAt_ASC
          where: {slug_not: $slug, AND: {createdAt_gte: $createdAt}} 
        ) {
          title
          thumbnail {
            url
          }
          createdAt
          slug
        }
        previous:posts(
          first: 1
          orderBy: createdAt_DESC
          where: {slug_not: $slug, AND: {createdAt_lte: $createdAt}}
        ) {
          title
          thumbnail {
            url
          }
          createdAt
          slug
        }
      }
    `;
  
    const result = await request(graphqlAPI, query, { slug, createdAt });
  
    return { next: result.next[0], previous: result.previous[0] };
  };
