import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { Flex, Box, Stack, HStack, VStack, Heading, Button } from "@chakra-ui/react";

function App() {
	const [count, setCount] = useState(0);

	return (
		<>
			<Heading as="H1" fontSize="54" pb="32px">
				Lorem ipsum dolor sit amet
			</Heading>
      <Button mb='48px' color="#376b90" bgColor='#945577' _hover={{ background: '#fff000', color: '#000' }}>Push me</Button>
			<Stack justify="space-between" w="600px" bg="grey" margin='auto' mb='30px' direction="row-reverse" align='center'>
				<Flex bg="green" w="120px" h="200px">
					This is a Box
				</Flex>
				<Flex bg="blue" w="120px" h="200px">
					This is a Box
				</Flex>
				<Flex bg="yellow" w="100px" h="250px">
					This is a Box
				</Flex>
				<Flex bg="brown" w="120px" h="200px">
					This is a Box
				</Flex>
			</Stack>

			<Flex justify="space-between" align="center" w="600px" bg="grey" margin='auto'>
				<Flex bg="green" w="120px" h="200px">
					This is a Box
				</Flex>
				<Flex bg="blue" w="120px" h="200px">
					This is a Box
				</Flex>
				<Flex bg="yellow" w="100px" h="250px">
					This is a Box
				</Flex>
				<Flex bg="brown" w="120px" h="200px">
					This is a Box
				</Flex>
			</Flex>
		</>
	);
}

export default App;
