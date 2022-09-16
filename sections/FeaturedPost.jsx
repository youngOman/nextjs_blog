import React,{ useState,useEffect } from 'react'
import { FeaturedPostCard } from '../components';

import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { getFeaturedPost } from '../services'


const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you. 
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
};


const CustomRightArrow = ({ onClick, ...rest }) => {
    const {
      onMove,
      carouselState: { currentSlide, deviceType }
    } = rest;
    // onMove means if dragging or swiping in progress.
    return (    
    <div className="absolute arrow-btn right-0 text-center cursor-pointer bg-slate-700 rounded-full py-3" onClick={() => onClick()}>
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-14 text-white w-full" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
        </svg>
    </div>
    );
};
const CustomLeftArrow = ({ onClick, ...rest }) => {
    const {
      onMove,
      carouselState: { currentSlide, deviceType }
    } = rest;
    // onMove means if dragging or swiping in progress.
    return (    
    <div className="absolute arrow-btn left-0 text-center cursor-pointer bg-slate-700 rounded-full py-3" onClick={() => onClick()}>
      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white w-full ml-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
      </svg>
    </div>
    );
};

const FeaturedPost = () => {

    const [ featuredPost,setFeaturedPost ] = useState(null); 
    const [ dataload , setDataLoad ] = useState(false); // 預防無資料 map()出錯情況

    useEffect(() => {
        getFeaturedPost()
        .then((response) => {
            setFeaturedPost(response);
            setDataLoad(true);
        });
    }, []);
    // console.log(featuredPost)

  return (
    <div className='mb-8'>
        <Carousel 
          infinite={true} 
          showDots={true} 
          responsive={responsive} 
          itemClass="px-4" 
          customRightArrow={<CustomRightArrow />} 
          customLeftArrow={<CustomLeftArrow />} 
          autoPlay={true}
        >
            {dataload ? featuredPost.map((post,index)=>(
                <FeaturedPostCard post={post} key={index} />
            )): <div>輪撥載入中....</div> }
        </Carousel>
    </div>
  )
}

export default FeaturedPost