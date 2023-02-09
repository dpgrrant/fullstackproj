import React from 'react'
import Router from 'next/router'
import { Button } from '@chakra-ui/react'

async function deletePost(id){
  
    await fetch('http://localhost:4000/post/'+id, {
            method: 'DELETE',
            headers:{}
    })
    Router.push('http://localhost:3000/funder/search', `http://localhost:3000/funder/search`)
    
}

function Post({data}){
    return(
      <>
            <div key={data.id} className={"funds"}>
              <h1>
                {data.title}            
              </h1>
              <h3 className={"description"}>{data.text} {data.goal} </h3>
              <Button onClick={()=>deletePost(data.id) } mt={"2"}colorScheme={'orange'}>
                Delete
              </Button>
            </div>
      </>
    )
}
  
export async function getServerSideProps(context) {
    const path='http://localhost:4000/post/'+context.params.id
    const res=await fetch(path)
    const data=await res.json()
    return {
    
      props:{data,} 
    }
}
  
export default Post