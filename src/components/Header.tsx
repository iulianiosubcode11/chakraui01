import { Box, Heading, Text, Flex, Stack, HStack, VStack } from "@chakra-ui/react";

export function Header() {
	return (
		<Flex direction='column' fontFamily="Inter, sans-serif" as="section" color="#F7FAFC" bg="#6B46C1" pt="90px" pb="198" px="32px">
			<Heading fontWeight='800' fontSize={['30px', '30px', '48px']} fontFamily="Inter, sans-serif">
				Simple pricing for your business
			</Heading>
			<Text fontWeight="500" fontSize={['16px', '16px', '24px']} pt="16px">
				Plans that are carefully crafted to suit your business.
			</Text>
		</Flex>
	);
}
