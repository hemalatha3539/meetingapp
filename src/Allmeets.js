import { useEffect, useState } from "react";
const Card=(props)=>{
  return <div className="card">
    <img className="image" src={"https://source.unsplash.com/1600x800/?"+props.texter.meetimage}></img>
    <h3 className="tt">{props.texter.meetname}</h3>
    {/* <h4 className="tt">{props.texter.meetimage}</h4> */}
    <h4 className="tt">{props.texter.meetdate}</h4>
    <p className="tt">{props.texter.meetdesc}</p>

  </div>
}



const Allmeets = () => {
  const [meeting, setmeeting]=useState([])
  async function getapi(){
   
   const api=await fetch("https://letsmeet-89248-default-rtdb.firebaseio.com/letsmeet.json")
   const originalData= await api.json()
   console.log(originalData)
   const object=[]
   for(let key in originalData) {
    if (originalData.hasOwnProperty(key)){
      object.push(originalData[key]) 

    }
    
   }
   setmeeting(object)
  }
  useEffect(()=>{
    getapi()
  },[])
    return (
      <div>
        <h1 className="heading">All your meetings here!!</h1>
        <div className="body">
       {
        meeting.map((x)=>{
         return <Card texter={x}/>
        })
       }
      </div>
      </div>
    );
  };
  export default Allmeets
