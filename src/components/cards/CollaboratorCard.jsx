import { Flex, Box, Heading, Text, Image, Link } from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";

export const CollaboratorCard = ({ data }) => {
  const { image, name, role, story, interests, linkedin } = data;
  const card = {
    maxWidth: "650px",
    flexDir: "column",
    alignItems: "center",
    justifyContent: "center",
    textAling: "center",
    gap: "20px",
  };
  const nameHeading = {
    color: "orange",
    fontSize: "1.8rem",
  };
  const roleHeading = {
    color: "#fff",
    fontSize: "1.4rem",
    borderBottom: "2px solid",
    padding: "5px 0",
    borderColor: "orange.400",
  };
  const imageContainer = {
    width: "250px",
    h: "250px",
    borderRadius: "50%",
    overflow: "hidden",
    border: "5px solid #fff",
  };
  const profilePicture = {};

  const text = {
    color: "#fff",
    textAlign : "center"
  };

  const socialLink = {
    fontSize : "45px",
    color : "#fff",
    ":hover" : {
        color : "orange.300"
    }
  }

  return (
    <Flex sx={card}>
      <Box sx={imageContainer}>
        <Image sx={profilePicture} src={image}></Image>
      </Box>
      <Heading sx={nameHeading}>{name}</Heading>
      <Heading sx={roleHeading}>{role}</Heading>
      <Text sx={text}>{story}</Text>
      <Text sx={text}>{interests}</Text>
      <Flex>
        <Link href={linkedin} sx={socialLink}>
          <FontAwesomeIcon icon={faLinkedin} />
        </Link>
      </Flex>
    </Flex>
  );
};
