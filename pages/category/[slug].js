import React,{useState} from 'react'
import { Categories,PostCard,Loading,Pagination } from '../../components';

import { useRouter } from 'next/router'
// API 
import { getCategoryPost,getCategories } from '../../services';

const CategoryRelatedPost = ({categoryPosts}) => {

    const router = useRouter();

    if(router.isFallback){
        return <Loading />
    }
    // 分頁功能
    const [pageNumber, setPageNumber] = useState(0); 
    const postsPerPage = 2;
    const pagesVisited = pageNumber * postsPerPage; // 總筆數 = 目前所在頁數*每頁筆數
    // Ex:設每頁10筆 目前在第4頁 40->50
    const currentcategoryPosts = categoryPosts.slice(pagesVisited,pagesVisited+postsPerPage); // 目前這頁顯示的posts = .slice(總筆數,總筆數+每頁筆數)

    const changePage = ({ selected }) => { // selected = 下一個要移動到的頁數
        setPageNumber(selected); 

    };
    return  (
        <div className="container mx-auto px-10 mb-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            <div className="col-span-1 lg:col-span-8">
                {currentcategoryPosts.length > 0 ? currentcategoryPosts.map((post, index) => (
                <PostCard key={index} post={post.node} />
                )):<div className='text-5xl'> 目前這個分類還沒有貼文 QQ..</div>}
            </div>
            <div className="col-span-1 lg:col-span-4">
                <div className="relative lg:sticky top-8">
                <Categories />
                </div>
            </div>
            </div>
            <Pagination posts={categoryPosts} postsPerPage={postsPerPage} changePage={changePage} />

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
