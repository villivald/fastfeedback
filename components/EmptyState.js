import React from "react";
import { Heading, Flex, Text } from "@chakra-ui/react";

import DashboardShell from "./DashboardShell";
import AddSiteModal from "./AddSiteModal";

const EmptyState = () => (
  <DashboardShell>
    <Flex
      width="100%"
      backgroundColor="white"
      borderRadius="8px"
      justify="center"
      direction="column"
      align="center"
      p={16}
    >
      <Heading size="lg" m={2}>
        You haven't added any sites
      </Heading>
      <Text pb={3} mb={4}>
        {"Welcome 👋 Let's get started"}
      </Text>
      <AddSiteModal>Add a Site</AddSiteModal>
    </Flex>
  </DashboardShell>
);

export default EmptyState;
