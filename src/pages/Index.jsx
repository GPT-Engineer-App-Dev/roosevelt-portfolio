import { Box, VStack, HStack, Heading, Text, Image, Spacer } from "@chakra-ui/react";

const Index = () => {
  return (
    <Box bg="gray.100" minH="100vh">
      <HStack bg="white" p={4} borderBottomWidth={1} borderColor="gray.200">
        <Heading size="xl" color="gray.700">
          Franklin D. Roosevelt
        </Heading>
        <Spacer />
        <Text fontWeight="semibold" color="gray.600">
          Home
        </Text>
      </HStack>

      <VStack spacing={8} maxW="4xl" mx="auto" p={8}>
        <HStack spacing={8} alignItems="flex-start">
          <Image borderRadius="lg" boxSize="sm" objectFit="cover" src="https://images.unsplash.com/photo-1580128637215-659d70729ad0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxmcmFua2xpbiUyMHJvb3NldmVsdCUyMHBvcnRyYWl0fGVufDB8fHx8MTcxMzA3MDI3N3ww&ixlib=rb-4.0.3&q=80&w=1080" alt="Franklin Roosevelt portrait" />
          <VStack alignItems="flex-start" spacing={6}>
            <Heading size="xl">Biography</Heading>
            <Text>Franklin Delano Roosevelt, often referred to as FDR, was the 32nd president of the United States. Born into an affluent New York family in 1882, Roosevelt attended Harvard University and Columbia Law School. He married his fifth cousin Anna Eleanor Roosevelt in 1905.</Text>
            <Text>Roosevelt entered politics in 1910 and served as a New York state senator and later as Assistant Secretary of the Navy under President Woodrow Wilson. In 1921, he contracted a paralytic illness, believed to be polio, which cost him the use of his legs. Despite his physical limitations, he was elected governor of New York in 1928 and became the Democratic presidential nominee in 1932.</Text>
            <Text>As president, FDR faced the worst crisis since the Civil War: the Great Depression. He acted swiftly to provide relief and recovery through his New Deal programs which redefined the role of the federal government in the lives of Americans. Roosevelt led the United States through World War II and forged an alliance with Britain and the Soviet Union to defeat Nazi Germany. Elected to four terms, FDR died in office in April 1945, just months before the end of the war.</Text>
          </VStack>
        </HStack>
      </VStack>

      <Box as="footer" py={8} textAlign="center" borderTopWidth={1} borderColor="gray.200">
        <Text>&copy; {new Date().getFullYear()} Franklin D. Roosevelt. All rights reserved.</Text>
      </Box>
    </Box>
  );
};

export default Index;
