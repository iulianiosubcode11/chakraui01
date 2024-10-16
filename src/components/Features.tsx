import { Box, Flex, HStack, Icon, StackProps, Text } from "@chakra-ui/react";
import { ElementType } from "react";
import { MoneyBack, HassleFree, MontlySub } from "../icons/icon";

interface FeatureProps extends StackProps {
	icon: ElementType;
}

export function Feature(props: FeatureProps) {
	const { icon, children, ...rest } = props;
	return (
		<HStack {...rest} spacing="24px">
			<Icon as={icon} boxSize="48px" />
			<Text textAlign="left" fontSize="18px" fontWeight="700">
				{children}
			</Text>
		</HStack>
	);
}

export function Features() {
	return (
		<Flex maxW="1024px" m="auto" pt="57px" pb="24px">
			<HStack spacing="20px" w="898px" m="auto">
				<Feature icon={MoneyBack}>30 days money back Guarantee</Feature>
				<Feature icon={HassleFree}>No setup fees 100% hassle-free</Feature>
				<Feature icon={MontlySub}>No monthly subscription, pay once and for all</Feature>
			</HStack>
		</Flex>
	);
}

export function Feats() {
	return (
		<Flex maxW="962px" gap={["16px", "18px", "20px"]} m="auto" py={["48px", "48px", "56px"]} px={["32px", "32px", "32px"]} direction={["column", "column", "row"]} align={["left", "left", "left"]}>
			<Flex gap={["12px", "16px", "16px"]} align="center">
				<MoneyBack />
				<Text textAlign="left" fontSize={["18px", "18px", "20px"]} fontWeight="700" w='100%'>
					30 days money back Guarantee
				</Text>
			</Flex>

			<Flex gap={["12px", "16px", "16px"]} align="center">
				<HassleFree />
				<Text textAlign="left" fontSize={["18px", "18px", "20px"]} fontWeight="700" w='100%'>
					No setup fees 100% hassle-free
				</Text>
			</Flex>

			<Flex gap={["12px", "16px", "16px"]} align="center" pr={["56px", "16px", "16px"]}>
				<MontlySub />
				<Text textAlign="left" fontSize={["18px", "18px", "20px"]} fontWeight="700" w='100%'>
				No monthly subscription 
				Pay once and for al
				</Text>
			</Flex>
		</Flex>
	);
}
