import { useState } from "react"

function Education() {
    const [name,setName] = useState("");
    const [email,setEmail] = useState("");
    const [number,setNumber] = useState("");
    const [school,setSchool] = useState("");
    const [title, setTitle] = useState("")
    const [date, setDate] = useState(" ")
    const [show,setShow] = useState(false)
    const [inputSkills,setInputSkills] = useState("")
    const [skills,setSkills] = useState([])
    
    function handleClick (){
        setSkills([...skills, inputSkills])
    }
  return (
    <div className="education_container">
        {!show &&
        <div className="input">
        <div>Full Name : <input type="text" value={name} onChange={(e)=>setName(e.target.value)}/></div>
        <div>Email : <input type="email" value={email} onChange={(e)=>setEmail(e.target.value)}/></div>
        <div>Phone : <input type="text" value={number} onChange={(e)=>setNumber(e.target.value)}/></div>
        <div>School Name : <input type="text" value={school} onChange={(e)=>setSchool(e.target.value)}/></div>
        <div>Title : <input type="text" value={title} onChange={(e)=>setTitle(e.target.value)}/></div>
        <div>Date : <input type="date" value={date} onChange={(e)=>setDate(prev=>[...prev + e.target.value])}/></div>
        <div>Skills : <input type="text" value={inputSkills} placeholder="Write ur relevent skills" onChange={(e)=>setInputSkills(e.target.value)}/> <button onClick={handleClick}>Add</button> <button onClick={()=>{setSkills(skills.slice(0,skills.length-1))}}>Delete Last</button></div>
        </div>
}
        <button type="submit" onClick={()=>setShow(!show)}>{show ? "Edit":"Show"}</button>
        {show && 
        <div className="cv">
            <h1>{name}</h1>
            <h2>Contacts</h2>
            <div className="contacts">
                <div>Email: {email}</div>
                <div>Phone Number: {number}</div>
            </div>
            <div className="education">
                <h2>Education</h2>
                <div>School Name: {school}</div>
                <div>Title: {title}</div>
                <div>Date: {date}</div>
                <div>Skills :<ul>{skills.map((s)=><li>{s}</li>)}</ul></div>
            </div>
        </div>}
    </div>


  )
}

export default Education