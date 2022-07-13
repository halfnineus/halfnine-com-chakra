import {
  Box,
  Center,
  Heading,
  SimpleGrid,
  useColorModeValue,
  Image,
  Text,
} from '@chakra-ui/react';

import Head from 'next/head'


const IndexAbout = () => {
  return (
    <>
      <Head>
        <title>About Us - Ochoa - International Product Development, Design and Production</title>
        <meta name="description" content={"We keep developing systems to automate simple and complicated industrial processes. Contact us to know more."} />
      </Head>
      <Heading> About Us</Heading>
      {`small family business`}
      <Heading> Why Us</Heading>
      <Text>
        {`With our experience making software we have to see it from the point of the investors, what do they want done what are the technologies resources needed , what are the better alternatives for functionality. and how can we build a team around the idea making it a cost effective product without overspending on overthinking and over engineering.

        Upgrading environments merging teams and organizing large technological issues is a nightmare and if you’re knowledge on technology is not that big that’s why we are here.`}
      </Text>
    </>
  );
}

export default IndexAbout;
