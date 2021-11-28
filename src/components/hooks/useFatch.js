import { useEffect, useState} from "react"

let useFatch =(Json)=>{
    let [service , setService ] = useState([]);
    useEffect(()=>{        
         fetch(`${Json}`)
        .then(res=>res.json())
        .then(data => setService(data))
    },[])

    return{
        service
    }

}

export default useFatch;