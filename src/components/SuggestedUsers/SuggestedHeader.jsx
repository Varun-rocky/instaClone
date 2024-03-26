import { Avatar, Button, Flex, Text, } from "@chakra-ui/react";
import { Link  } from "react-router-dom";

const SuggestedHeader = () => {
  return (
   <Flex justifyContent={"space-between"} alignItems={"center"} w={"full"}>
    <Flex alignItems={"center"} gap={2}>
    <Avatar name="Vrock" size={"lg"} src="/profilepic.png"/>
    <Text fontSize={12} fontWeight={"bold"}>
      Vrock
    </Text>
    </Flex>
    <Link to={'/auth'} fontSize={14} fontWeight={"medium"}  style={{textDecoration:'none'}}  color="blue.500" important  cursor ={"pointer"} > Log out
    </Link>
    </Flex>
  )
}

export default SuggestedHeader
