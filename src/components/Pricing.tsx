import { Button, Flex, Heading, HStack, Icon, ListIcon, Stack, StackProps, Text } from "@chakra-ui/react";
import { CheckIcon } from "../icons/icon";

export const ListItem = (props: StackProps) => {
	const { children, ...rest } = props;
	return (
		<HStack as="li" spacing="20px" {...rest}>
			<Icon as={CheckIcon} w="22px" h="22px" />
			<Text>{children}</Text>
		</HStack>
	);
};
export function Pricing() {
	return (
		<Flex fontFamily="Inter, sans-serif" maxW="994px" margin="auto" mt="-140px" bg="#fff" borderRadius="12px" overflow="hidden" boxShadow="0px 20px 25px -5px rgba(0, 0, 0, 0.10), 0px 10px 10px -5px rgba(0, 0, 0, 0.04);">
			<Flex bg="rgba(101, 44, 211, 0.1)" direction="column" py="60px" px="48px">
				<Text fontSize="24px" fontWeight="800">
					Premium PRO
				</Text>
				<Heading fontFamily="Inter, sans-serif" as="h3" fontSize="60px" mt="16px">
					$329
				</Heading>
				<Text mb="24px">billed just once</Text>
				<Button colorScheme="purple" size="lg" w="282px">
					Get Started
				</Button>
			</Flex>

			<Flex direction="column" p="60px" fontSize="18px">
				<Text align="left">Access these features when you get this pricing package for your business.</Text>
				<Stack as="ul" spacing="16px" pt="24px">
					<ListItem>International calling and messaging API</ListItem>
					<ListItem>Additional phone numbers</ListItem>
					<ListItem>Automated messages via Zapier</ListItem>
					<ListItem>24/7 support and consulting</ListItem>
				</Stack>
			</Flex>
		</Flex>
	);
}
