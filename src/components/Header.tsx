import { Box, Heading, Text, Flex, Stack, HStack, VStack } from "@chakra-ui/react";

export function Header() {
	return (
		<Flex direction='column' fontFamily="Inter, sans-serif" as="section" color="#F7FAFC" bg="#6B46C1" pt={['56px', '72px', '90px']} pb={['186px', '190px', '198px']} px="32px" textAlign={['left', 'left', 'center']}>
			<Heading fontWeight='800' fontSize={['40px', '40px', '48px']} fontFamily="Inter, sans-serif" lineHeight={['48px', '48px', '56px']}>
				Simple pricing for your business
			</Heading>
			<Text fontWeight="500" fontSize={['18px', '18px', '24px']} lineHeight={['26px', '26px', '32px']} pt={['20px', '20px', '16px']}>
				Plans that are carefully crafted to suit your business.
			</Text>
		</Flex>
	);
}
