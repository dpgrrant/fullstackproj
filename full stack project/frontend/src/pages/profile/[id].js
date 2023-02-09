import React from 'react'
import Router from 'next/router'
import {
  Avatar,
  Flex,
  Button,
  Progress,
  VStack
} from '@chakra-ui/react'

function Post({data,data2}){
     
  if (data==null) {
    return(
      <>
              <Flex
              bg={'gray.500'}
               w={'100%'}
               h={'20rem'}
               position="absolute"
              >
                <Avatar
                  size={'sm'}
                  height={70}
                  width={70}
                  left={'50%'}
                  mt={'18rem'}
                  position="absolute"
                />
            </Flex>

            <Flex 
              mt={'24rem'}
              left={'46%'}
              position="absolute">
                Edit profile to add a Bio Section to your profile.

              
            </Flex>
            <Flex 
              mt={'30rem'}
              left={'46%'}
              position="absolute">
              Edit profile to add an About Section to your profile.
            </Flex>

            <Flex mt={'25rem'}>
            <VStack>

            {data2.map(post=>{
              
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
                 </VStack>
            </Flex>
      </>
    )
    
  } else {
    return(
      <>
              <Flex
              bg={'gray.500'}
               w={'100%'}
               h={'20rem'}
               position="absolute"
              >
                <Avatar
                  size={'sm'}
                  height={70}
                  width={70}
                  left={'50%'}
                  mt={'18rem'}
                  position="absolute"
                />
            </Flex>

            <Flex 
              mt={'24rem'}
              left={'46%'}
              position="absolute">
                {data.bio} 

              
            </Flex>
            <Flex 
              mt={'30rem'}
              left={'46%'}
              position="absolute">
              {data.about} 
            </Flex>

            <Flex mt={'25rem'}>
            <VStack>

            {data2.map(post=>{
              
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
                 </VStack>
            </Flex>
      </>
    )
  }
}
  
export async function getServerSideProps(context) {
    const path='http://localhost:4000/profile/'+context.params.id
    const path2='http://localhost:4000/allPosts/'+context.params.id
    const res=await fetch(path)
    const res2=await fetch(path2)
    const data=await res.json()
    const data2=await res2.json()
    return {
      
      props:{data,data2} 
    }
}


  
export default Post
