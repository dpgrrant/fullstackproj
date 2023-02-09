import React from 'react'
import Router from 'next/router'
import { Progress,Button,Flex} from '@chakra-ui/react'




function posts({data}){
  const stuff = Array.from(data.data);

 
  return(
    <>
    {stuff.map(post=>{
        return(
       
          <div key={post.id} className={"funds"} onClick={() => Router.push('/post/[id]', `/post/${post.id}`)}>
            <Flex>
              {post.title}            
            </Flex>
            <Flex mb={4}>
              <Flex maxW={"20rem"}>
              {post.text} {post.goal}
              </Flex>
              
              <Button colorScheme={'orange'} ml={2}> Donate</Button>
            </Flex>
            <h3 className={"description"}> </h3>
            <Progress hasStripe value={50} />
            
          </div>
        )
      })}
    </>
  )
}

export default posts


export async function getServerSideProps(context) {
  const res=await fetch('http://localhost:4000/')
  const data=await res.json()
  console.log(data)
  return {
    
    props:{data,} 
  }
}

