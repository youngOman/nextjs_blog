import React from 'react'
import { Categories,PostCard,Loading } from '../../components';

import { useRouter } from 'next/router'
// API 
import { getCategoryPost } from '../../services';
import { getCategories } from '../../services';

const CategoryRelatedPost = ({categoryPosts}) => {

    const router = useRouter();

    if(router.isFallback){
        return <Loading />
    }
    
    return  (
        <div className="container mx-auto px-10 mb-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            <div className="col-span-1 lg:col-span-8">
                {categoryPosts.length > 0 ? categoryPosts.map((post, index) => (
                <PostCard key={index} post={post.node} />
                )):<div className='text-5xl'> 目前這個分類還沒有貼文 QQ..</div>}
            </div>
            <div className="col-span-1 lg:col-span-4">
                <div className="relative lg:sticky top-8">
                <Categories />
                </div>
            </div>
            </div>
        </div>
    )
}

export default CategoryRelatedPost

export async function getStaticProps({params}){

    const categoryPosts = await (getCategoryPost(params.slug) || []); //若無資料就回傳空陣列
    return{
        props: {categoryPosts},
    }

}

export async function getStaticPaths(){

    const categories = await getCategories();

    return {
        paths: categories.map(({slug})=>({params:{slug}})),
        fallback:true,
    }
}
