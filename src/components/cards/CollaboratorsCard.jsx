import { Flex, Box, Heading, Text, Image, Link } from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";

export const CollaboratorsCard = ({ data, i }) => {
  const { image, name, role, story, interests, linkedin, alt } = data;
  const card = {
    maxWidth: "650px",
    flexDir: "column",
    alignItems: "center",
    justifyContent: "center",
    textAling: "center",
    gap: "20px",
  };
  const nameHeading = {
    color: "#fff",
    fontSize: { base: "1.6rem", md: "1.8rem" },
    borderBottom: "2px solid",
    borderColor: "secondary",
  };
  const roleHeading = {
    color: "#fff",
    fontFamily: "heading",
    fontWeight: "normal",
    fontSize: { base: "1.2rem", md: "1.4rem" },

    padding: "5px 0",
  };
  const imageContainer = {
    width: { base: "200px", md: "250px" },
    h: { base: "200px", md: "250px" },
    borderRadius: "50%",
    overflow: "hidden",
    border: "5px solid #fff",
  };
  const profilePicture = {
    width: "100%",
    height: "100%",
  };

  const text = {
    color: "#fff",
    textAlign: "center",

    fontSize: { base: "0.9rem", md: "1rem" },
    fontFamily: "body",
  };

  const socialLink = {
    fontSize: "45px",
    color: "secondary",
    ":hover": {
      color: "blue.300",
    },
  };
  return (
    <Flex sx={card}>
      <Box sx={imageContainer}>
        <Image sx={profilePicture} src={image} alt={alt} />
      </Box>
      <Heading sx={nameHeading}>{name}</Heading>
      <Heading sx={roleHeading}>{role}</Heading>
      <Text sx={text}>{story}</Text>
      <Text sx={text}>{interests}</Text>
      <Flex>
        <Link href={linkedin} sx={socialLink} target="_blank">
          <FontAwesomeIcon icon={faLinkedin} />
        </Link>
      </Flex>
    </Flex>
  );
};
