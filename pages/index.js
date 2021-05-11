import Head from "next/head";
import { Button, Flex } from "@chakra-ui/react";
import { AtSignIcon } from "@chakra-ui/icons";
import { useAuth } from "@/lib/auth";

const Home = () => {
  const auth = useAuth();

  return (
    <Flex
      as="main"
      direction="column"
      align="center"
      justify="center"
      h="100vh"
    >
      <Head>
        <title>Fast Feedback</title>
      </Head>

      <AtSignIcon color="red" w={58} h={58} />

      {auth.user ? (
        <Button mt={4} onClick={() => auth.signout()}>
          Sign Out
        </Button>
      ) : (
        <Button mt={4} size="sm" onClick={() => auth.signinWithGithub()}>
          Sign In
        </Button>
      )}
    </Flex>
  );
};

export default Home;
