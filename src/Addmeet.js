import { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";

const Addmeet = () => {
const navigate=useNavigate()
const [alert , setalert]=useState()
const [button,setbutton]=useState("Add Meet")
  const title=useRef()
  const meet=useRef()
  const date=useRef()
  const desc=useRef()
  function getdata(){
    const titleName=title.current.value
    const titlemeet=meet.current.value
    const titledate=date.current.value
    const titledesc=desc.current.value
    if( titleName=='' || titlemeet=='' || titledate=='' || titledesc==''){
     const showalert="please fill the all the feilds!!!"
     setalert(showalert)
    }
    else{
      const array={
        meetname:titleName,
        meetimage: titlemeet,
        meetdate:titledate,
        meetdesc:titledesc
      }
     fetch("https://letsmeet-89248-default-rtdb.firebaseio.com/letsmeet.json",{
      method:'post',
      body:JSON.stringify(array)
     }).then(()=>{
      const newdata="Added😍"
      setbutton(newdata)
      const empty=""
      setalert(empty)
      navigate('/')
     })
    }
   
  }
  return (
    <div className="addmeet">
      <div className="meet-container">
        <h1 className="heading-2">Creat a new meet!!!</h1>
        <input className="input" type="text" placeholder="enter meeting name" ref={title}></input>
        <input className="input" type="text" placeholder="enter image" ref={meet}></input>
        <input className="input" type="datetime-local" ref={date}></input>
        <textarea className="inputde" id="w3review"  name="w3review" placeholder="enter  your description here...." rows="3" cols="50" ref={desc}>
        </textarea>
        <p className="alert">{alert}</p>
        <button className="btn" onClick={getdata}>{button}</button>
      </div>
    </div>
  );
};
export default Addmeet;
