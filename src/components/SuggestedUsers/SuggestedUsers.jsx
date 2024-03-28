import {Text, Flex, VStack,Box, Link } from '@chakra-ui/react'
import React from 'react'
import SuggestedHeader from './SuggestedHeader'
import SuggestedUser from './SuggestedUser'

function SuggestedUsers() {
  return (
   <VStack py={8} px={6} gap={4}>
<SuggestedHeader/>
<Flex alignItems={"center"} justifyContent={"space-between"} w={"full"}>
  <Text fontSize={12} fontWeight={'bold'} color={'gray.500'}>
Suggested for You
  </Text>
  <Text fontSize={12} fontWeight={'bold'} _hover={{color:'gray.400'}} cursor={"pointer"}>
See All
  </Text>
</Flex>


<SuggestedUser name="sudeep" followers={100} avatar='https://bigstarbio.com/wp-content/uploads/2020/04/sudeep.jpg'/>
<SuggestedUser name="vikram" followers={104} avatar='https://th.bing.com/th/id/R.e66562445513e1f0cb8f7befe9bcf995?rik=1UDFDHPrdWDYLQ&riu=http%3a%2f%2fchennai365.com%2fassets%2fActor-Vikram-Photos-14.jpg&ehk=oANV4IKzbjapq8WVmITyY8bT51jvwYXHZzLfR9YfbrM%3d&risl=&pid=ImgRaw&r=0'/>
<SuggestedUser name='prabhas' followers={321} avatar='https://i2.wp.com/godofindia.com/wp-content/uploads/2017/05/prabhas-12.jpg'/>
<Box fontSize={12} color={'gray.500'} mt={5} alignSelf={"start"}>
© 2024 Built by {" "}
<Link href='https://www.linkedin.com/in/varun-r-926299229/' target='_blank' color='blue.500' fontSize={14}> Vrock
</Link>
</Box>
   </VStack>
  )
}

export default SuggestedUsers
