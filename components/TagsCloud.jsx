// import React,{ useEffect,useState } from 'react';
// import { TagCloud } from 'react-tagcloud';
// import { getCategories } from '../services';
// import randomColor from 'randomcolor';
// const defaultData = [
//   { value: 'jQuery', count: 25 },
//   { value: 'MongoDB', count: 18 },
//   { value: 'JavaScript', count: 38 },
//   { value: 'React', count: 30 },
//   { value: 'Nodejs', count: 28 },
//   { value: 'Express.js', count: 25 },
//   { value: 'HTML5', count: 33 },
//   { value: 'CSS3', count: 20 },
//   { value: 'Webpack', count: 22 },
//   { value: 'Babel.js', count: 7 },
//   { value: 'ECMAScript', count: 25 },
//   { value: 'Jest', count: 15 },
//   { value: 'Mocha', count: 17 },
//   { value: 'React Native', count: 27 },
//   { value: 'Angular.js', count: 30 },
//   { value: 'TypeScript', count: 15 },
//   { value: 'Flow', count: 30 },
//   { value: 'NPM', count: 11 },
// ]

// function getRandom(min,max){
//   return Math.floor(Math.random()*(max-min+1))+min;
// };

// const options = {
//   luminosity: 'dark',
//   format: 'rgba',
//   alpha: 0.5 // e ,
// } 
// const TagsCloud = () => {
    
//   const [tags,setTags]=useState([])

//   useEffect(()=>{
//     getCategories()
//       .then((response)=>setTags(response))
//   },[])
//   // console.log(tags)
//     // const data123 = tags.map(tag=>({value:tag,count:getRandom(1,50)}))
//   // console.log(data123)
//   const changeval = tags.map(({name:value,...rest})=>({value,...rest,count:getRandom(25,50)}));
//   // console.log(changeval)

//   return (
//     <div className=''>   
//       <TagCloud
//         minSize={32}
//         maxSize={50}
//         shuffle
//         className='tag-cloud font-bold flex-1'
//         colorOptions={randomColor()}
//         tags={defaultData}
//         onClick={tag=> alert(`'${tag.value}' was selected!`)}
//       ></TagCloud>
//     </div>
//   )
// }

// export default TagsCloud