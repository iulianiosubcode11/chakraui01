import { Flex, HStack, Icon, StackProps, Text } from "@chakra-ui/react";
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
			<Text textAlign='left' fontSize="18px" fontWeight="700">
				{children}
			</Text>
		</HStack>
	);
}

export function Features() {
	return (
		<Flex maxW='1024px' m='auto' pt='60px' pb='24px'>
			<HStack p='32px' spacing='20px'>
				<Feature icon={MoneyBack}>30 days money back Guarantee</Feature>
				<Feature icon={HassleFree}>No setup fees 100% hassle-free</Feature>
				<Feature icon={MontlySub}>No monthly subscription, pay once and for all</Feature>
			</HStack>
		</Flex>
	);
}
