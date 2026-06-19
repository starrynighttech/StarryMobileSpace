import { useState } from "react"

export default function Tracking(){

const [code,setCode] = useState("")
const [data,setData] = useState(null)

const search = async()=>{

const res = await fetch(
`http://localhost:5000/api/tracking/${code}`
)

const json = await res.json()

setData(json)

}

return(

<div>

<h1>Track Package</h1>

<input
value={code}
onChange={(e)=>setCode(e.target.value)}
/>

<button onClick={search}>
Track
</button>

{data && (

<div>

<h2>{data.status}</h2>

<p>{data.location}</p>

</div>

)}

</div>

)

}
