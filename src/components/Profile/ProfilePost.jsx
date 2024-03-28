import { Flex, GridItem,Text,Image ,useDisclosure,Modal,ModalBody,ModalCloseButton,ModalOverlay,ModalContent, Box,Avatar,Divider, VStack} from "@chakra-ui/react";
import { AiFillHeart } from "react-icons/ai";
import { FaComment } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import Comment from '../Comment/Comment'
import PostFooter from "../FeedPosts/PostFooter";
const ProfilePost = ({img}) => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
    <GridItem
      cursor={"pointer"}
      borderRadius={4}
      overflow={"hidden"}
      border={"1px solid"}
      borderColor={"whiteAlpha.300"}
      position={"relative"}
      aspectRatio={1/1}
      onClick={onOpen}
    >
       <Flex
					opacity={0}
					_hover={{ opacity: 1 }}
					position={"absolute"}
					top={0}
					left={0}
					right={0}
					bottom={0}
					bg={"blackAlpha.700"}
					transition={"all 0.3s ease"}
					zIndex={1}
					justifyContent={"center"}
				>
<Flex alignItems={"center"} justifyContent={"center"} gap={50}>
<Flex>
  <AiFillHeart size={20}/>
  <Text fontWeight={"bold"} ml={2}>
      7
  </Text>
</Flex>
<Flex>
<FaComment size={20} />
							<Text fontWeight={"bold"} ml={2}>
							24
							</Text>
</Flex>
</Flex>
      </Flex>
      <Image src={img} alt="profile post" w={"100%"} h={"100%"} objectFit={"cover"}/>
    </GridItem>
    <Modal isOpen={isOpen} onClose={onClose} isCentered={true} size={{ base: "3xl", md: "5xl" }}>
				<ModalOverlay />
				<ModalContent>
					<ModalCloseButton />
					<ModalBody bg={"black"} pb={5}>
            <Flex gap='4'
							w={{ base: "90%", sm: "70%", md: "full" }}
							mx={"auto"}
							maxH={"90vh"}
							minH={"50vh"}>
              <Box borderRadius={4}
              overflow={"hidden"}
              border={'1px solid'}
              borderColor={"whiteAlpha.500"}
              flex={1.5}>
                <Image src={img} alt="profile post"/>
              </Box>
              <Flex flex={1} flexDir={"column"} px={10} display={{base:"none",md:"flex"}} >
                <Flex alignItems={"center"} justifyContent={"space-between"}>
                  
             
                <Flex alignItems={"center"} gap={4}>
                <Avatar src="/profilepic.png" size={"sm"} name="vrock"/>
                <Text fontWeight={"bold"} fontSize={12}>
                  vrock
                </Text>
                </Flex>
                <Box size={"sm"}
											bg={"transparent"}
											_hover={{ bg: "whiteAlpha.300", color: "red.600" }}
											borderRadius={4}
											p={1}>
                  <MdDelete size={20} cursor={"pointer"}/>
                </Box>
                </Flex>
                <Divider my={4} bg={"gray.500"} />
                <VStack w={'full'} alignItems={"start"} maxH={"350px"} overflowY={"auto"} >
                  <Comment createdAt ='1d ago' username='vr'
                  profilePic='/profilepic.png' text={"dummy image"}/>
                  <Comment createdAt ='1h ago' username='dq'
                  profilePic='https://imgs.search.brave.com/KApZqgrs_16mlGcOmBL0ntLm8wPci4qwG0cJIFkrs_E/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9tLm1l/ZGlhLWFtYXpvbi5j/b20vaW1hZ2VzL00v/TVY1Qk5XUmtNRGRq/TlRZdFlUazVaUzAw/WlRobExUbGhNRGN0/WkdRMVlUSTFOakUw/TUdVd1hrRXlYa0Zx/Y0dkZVFYVnlNamt4/TnpRMU5ESUAuanBn' text={"dq"}/>
                  <Comment createdAt ='24h ago' username='rrr'
                  profilePic='https://imgs.search.brave.com/NfTX5aPm6m71bQkas3RVnm4HuWqGkC7efuhrDacNSuk/rs:fit:500:0:0/g:ce/aHR0cHM6Ly93d3cu/Z3JlYXRhbmRocmEu/Y29tL25ld3Bob3Rv/czEwL3JhamFfcnJy/MTE3MDM3OTI0OTUu/anBn' text={"rrr"}/>
                </VStack>
                <Divider my={4} bg={"gray.800"}/>
                <PostFooter isProfilePage={true}/>
              </Flex>
            </Flex>
            </ModalBody>
            </ModalContent>
          </Modal>
    </>
  );
};

export default ProfilePost;
