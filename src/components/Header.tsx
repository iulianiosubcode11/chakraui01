import {
	Box,
	Heading,
	Text,
	Flex,
	Stack,
	HStack,
	VStack,
} from "@chakra-ui/react";

export function Header() {
	return (
		<Box fontFamily="Inter, sans-serif"
			as="section"
			color="#F7FAFC"
			bg="#6B46C1"
			direction="column"
			pt="90px"
			pb="198"
			px="32px"
		>
			<Heading fontWeight="800" fontSize="48px" fontFamily="Inter, sans-serif">
				Simple pricing for your business
			</Heading>
			<Text fontWeight="500" fontSize="24px" pt="16px">
				Plans that are carefully crafted to suit your business.
			</Text>
		</Box>
	);
}
