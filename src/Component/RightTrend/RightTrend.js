import React ,{useState}from 'react'
import style from './RightTrend.module.css'
import MorePop from '../../Atom/PopOver/MorePop/MorePop' 
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
function RightTrend() {
  const[ismodalopen,setismodalOpen]=useState(false)
  const [data , setData] = useState([
    {
  id:1,
    isNotIntrested:false,
    Trends:"Entertainment · Trending",
    Hash:"#PushpaTheRule",
    Tweets:"31.4K Tweets"
   },
   {
    id:2,
    isNotIntrested:false,
    Trends:"Trending in India",
    Hash:"#बागेश्वर_धाम_सरकार",
    Tweets:"Trending with #BageshwarDham"
   },
   {id:3,
    isNotIntrested:false,
    Trends:"Trending in India",
    Hash:"#PawanKalyanOnAHA",
    Tweets:"Trending with BAAP OF ALL EPISODES"
   },
   {
    id:4,
    isNotIntrested:false,
    Trends:"Trending in India",
    Hash:"#PawanKalyanOnAHA",
    Tweets:"Trending with BAAP OF ALL EPISODES"
   },
   {
    id:5,
    isNotIntrested:false,
    Trends:"Trending in India",
    Hash:"#PawanKalyanOnAHA",
    Tweets:"Trending with BAAP OF ALL EPISODES"
   }

  ] 
  )


  // function handleIntrest(){
  //    setismodalOpen(false)
  //   //  alert("function run")
  // }
  


  return (
    <div className={style.mainParent}>
    <h2 style={{fontSize:'large',
    paddingTop:'1rem'
  }}>  What’s happening
     
    </h2>
     {data
    .map((data)=>
     <div className={style.parent}>
       <div className={style.trendbtn}>
      <div className={style.datadiv}>
        <div className={style.trends}>{data.Trends}</div>
        <div className={style.Hash}> {data.Hash}</div>
       <div className={style.trends}>{data.Tweets}</div> 
      </div>
      
        {/* <MoreHorizIcon 
        onClick={()=>setismodalOpen(true)}
        className={style.more}/>        */}
        <MorePop/>
       </div>
       </div>
     )}
     {/* <button  onClick={handleIntrest}>submit</button>
  {ismodalopen &&  <MorePop onClick={handleIntrest}/>} */}
      <div className={style.Show}>Show more</div>
    </div>
  )
}
// style={{marginLeft:'1rem', padding:'1rem',
//color:"#1D9BF0"}}
export default RightTrend