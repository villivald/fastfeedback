import React from "react";
import { Heading, Box, Text, Button } from "@chakra-ui/react";

import DashboardShell from "./DashboardShell";

const FreePlanEmptyState = () => (
  <DashboardShell>
    <Box width="100%" backgroundColor="white" borderRadius={4}>
      <Heading size="md">Get feedback on your site instantly</Heading>
      <Text pb={3}>Start today, then grow with us 🌱</Text>
      <Button variant="solid" size="md">
        Upgrade to Starter
      </Button>
    </Box>
  </DashboardShell>
);

export default FreePlanEmptyState;
