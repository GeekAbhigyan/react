import React , {useEffect, useLayoutEffect, useState} from 'react'
import { useLoaderData, useRouteLoaderData } from "react-router-dom";
function Github() {
    const data = useRouteLoaderData()
        // const [data,setData] = useState([])
    // useEffect(()=>{
    //     fetch('https://api.github.com/users/hiteshchoudhary')
    //     .then(response => response.json)
    //     .then(data =>{
    //         console.log(data);
    //         setData(data);
    //     })
    // },[])
    return (
        <div className='text-center m-4 bg-gray-400 text-white p-4 text-3xl'>
                Github Followers : {data.followers}
                <img src={data.avtar_url} alt="Git Pic" width= {300}/>
        </div>
    )
}

export default Github

export const githubInfoloader = async () => {
       const response = await fetch('https://api.github.com/users/hiteshchoudhary')

        return response.json();
    }
