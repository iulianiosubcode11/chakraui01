import { Button, Flex, Heading, HStack, Icon, ListIcon, Stack, StackProps, Text } from "@chakra-ui/react";
import { CheckIcon } from "../icons/icon";

export const ListItem = (props: StackProps) => {
	const { children, ...rest } = props;
	return (
		<HStack as="li" spacing={["10px", "14px", "20px"]} {...rest}>
			<Icon as={CheckIcon} />
			<Text fontSize={["16px", "18px", "18px"]} textAlign="left">
				{children}
			</Text>
		</HStack>
	);
};
export function Pricing() {
	return (
		<Flex px={["16px", "24px", "30px"]}>
			<Flex direction={["column", "column", "row"]} fontFamily="Inter, sans-serif" maxW="994px" margin="auto" mt="-140px" bg="#fff" borderRadius="12px" overflow="hidden" boxShadow="0px 20px 25px -5px rgba(0, 0, 0, 0.10), 0px 10px 10px -5px rgba(0, 0, 0, 0.04);" >

				<Flex bg="rgba(101, 44, 211, 0.1)" direction="column" py="56px" px="16px" align="center" justify="space-between" gap='16px' w={['100%','100%','38%']}>
					<Flex direction="column">
						<Text fontSize="24px" fontWeight="800">
							Premium PRO
						</Text>
						<Heading fontFamily="Inter, sans-serif" as="h3" fontSize={["48px", "48px", "60px"]} mt="16px" fontWeight="800">
							$329
						</Heading>
						<Text mb="24px">billed just once</Text>
					</Flex>

					<Button colorScheme="purple" size="lg" px={["48px", "56px", "64px"]}>
						Get Started
					</Button>
				</Flex>

				<Flex direction="column" p={["24px", "32px", "60px"]} fontSize="18px" w={['100%', '100%', '62%']}>
					<Text align={["left", "left", "left"]} fontSize={["16px", "18px", "18px"]}>
						Access these features when you get this pricing package for your business.
					</Text>
					<Stack as="ul" spacing="16px" pt="24px">
						<ListItem>International calling and messaging API</ListItem>
						<ListItem>Additional phone numbers</ListItem>
						<ListItem>Automated messages via Zapier</ListItem>
						<ListItem>24/7 support and consulting</ListItem>
					</Stack>
				</Flex>
			</Flex>
		</Flex>
	);
}
