import { graphql } from 'graphql'
import {request,gql} from 'graphql-request'

const graphqlAPI = process.env.NEXT_PUBLIC_GRAPHCMS_ENDPOINT; // endpoint .env檔

export const getPosts = async() =>{
    const query = gql`
        query MyQuery {
            postsConnection {
                edges {
                    node {
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
            posts(
                orderBy: createdAt_ASC, last: 3
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
    const result = await request(graphqlAPI,query)
    return result.posts
}
// category List裡不能有null member List本身可以是null
// slug_not 不要取得current slug ， 我們要的資料是除目前這篇以外的相同category的貼文
// 進入特定文章的狀態 顯示類似貼文
export const getSimilarPosts = async () => {
    const query = gql`
        query GetPostDetails($slug:String!,$category:[String!]){
            posts(
                where:{slug_not:$slug AND: {categories_some :{slug_in:$category}}}
                last: 3
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
    const result = await request(graphqlAPI,query)
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