import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { Flex, Box, Stack, HStack, VStack } from "@chakra-ui/react";

function App() {
	const [count, setCount] = useState(0);

	return (
		<>
			<HStack w='600px' bg='grey'>
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
			</HStack>

      <Flex justify="space-between" align='center' w='600px' bg='grey'>
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
