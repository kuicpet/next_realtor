import { Flex, Box, Text, Button } from '@chakra-ui/react'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Banner = ({
  purpose,
  title1,
  title2,
  desc1,
  desc2,
  buttonText,
  imageUrl,
  linkName,
}) => {
  return (
    <Flex flexWrap='wrap' justifyContent='center' alignItems='center' m='10'>
      <Image src={imageUrl} alt='' height={300} width={500} />
      <Box p='5'>
        <Text color='gray.500' fontSize='sm' fontWeight='medium'>
          {purpose}
        </Text>
        <Text fontSize='3xl' fontWeight='bold'>
          {title1}
          <br />
          {title2}
        </Text>
        <Text color='gray.700' fontSize='lg' paddingTop='3' paddingBottom='3'>
          {desc1}
          <br />
          {desc2}
        </Text>
        <Button fontSize='xl'>
          <Link href={linkName}>
            <a>{buttonText}</a>
          </Link>
        </Button>
      </Box>
    </Flex>
  )
}

export default Banner
