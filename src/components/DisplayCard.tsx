import { Box, Flex, Text, Heading, Grid } from "@chakra-ui/react";
import { Console } from "console";
import React, { useEffect } from "react";
import { useSelector, useStore } from "react-redux";

const DisplayCard = () => {
  const requistionDetails = useSelector(
    (state: any) => state.form.requistionForm
  );
  const jobDetails = useSelector((state: any) => state.form.jobDetails);
  const interviewDetails = useSelector(
    (state: any) => state.form.interviewSettings
  );

  return (
    <Box
      as="section"
      borderRadius="10px"
      bgColor="#FAFAFA"
      height="fit-content"
      mt="10rem"
      pb="1rem"
    >
      <Box as="div">
        <Flex justifyContent="space-between">
          <Text fontWeight="bold" fontStyle="italic" m="0.4rem 2rem">
            Draft
          </Text>
          <Box
            bgColor="#EE5353"
            color="white"
            p="0.4rem 2rem"
            borderTopRightRadius="10px"
          >
            <Text fontStyle="italic">Preview</Text>
          </Box>
        </Flex>
        <RequisiteDetails {...requistionDetails} />
        <Box height="30rem" overflowY="scroll">
          <InfoCard title="Requistion Details">
            <Grid templateColumns="auto auto auto">
              <CustomInfo title="Owner" info={requistionDetails.owner} />
              <CustomInfo title="Urgency" info={requistionDetails.urgency} />
              <CustomInfo
                title="Employment Type"
                info={requistionDetails.employmentType}
              />
              <CustomInfo
                title="Gender Preference"
                info={requistionDetails.prefferedGender}
              />
            </Grid>
          </InfoCard>
          <InfoCard title="Job Details">
            <Grid templateColumns="auto">
              <CustomInfo title="Job Title" info={jobDetails.jobTitle} />
              <CustomInfo title="Job Info" info={jobDetails.jobDetails} />
              <CustomInfo title="Job Location" info={jobDetails.jobLocation} />
            </Grid>
          </InfoCard>
          <InfoCard title="Interview Details">
            <Grid templateColumns="auto auto">
              <CustomInfo
                title="Interview Mode"
                info={interviewDetails.interviewMode}
              />
              <CustomInfo
                title="Interview Duration"
                info={interviewDetails.interviewDuration}
              />
              <CustomInfo
                title="Interview Language"
                info={interviewDetails.interviewLanguage}
              />
            </Grid>
          </InfoCard>
        </Box>
      </Box>
    </Box>
  );
};

export default DisplayCard;

function RequisiteDetails(props: any) {
  useEffect(() => {
    console.log(props);
  }, [props]);

  return (
    <Box
      width="90%"
      bgColor="#432B7D"
      color="white"
      display="block"
      m="2rem auto"
      p="1.2rem 1rem"
      borderRadius="10px"
    >
      <Flex
        fontFamily="Poppins"
        justifyContent="space-between"
        alignItems="center"
      >
        <Text fontSize="0.9rem" fontWeight="500">
          {props.requestTitle}
        </Text>
        <Flex justifyContent="space-around" alignItems="center">
          <Text fontSize="0.8rem" mr="0.4rem" fontWeight="200" as="p">
            OPENINGS
          </Text>
          <Text fontSize="1rem" fontWeight="bold" as="span">
            {props.noOfOpenings}
          </Text>
        </Flex>
      </Flex>
    </Box>
  );
}

interface IInfoProps {
  title: String;
  info: String;
}

interface ICardProps {
  title: String;
  children: React.ReactNode;
}

function CustomInfo({ title, info }: IInfoProps) {
  return (
    <Box mt="1rem">
      <Text fontSize="0.8rem" color="#808080" as="h6" fontWeight="300">
        {title}
      </Text>
      <Text
        fontSize="0.8rem"
        color="#383359"
        as="p"
        fontWeight="500"
        textTransform="capitalize"
      >
        {info}
      </Text>
    </Box>
  );
}

function InfoCard({ title, children }: ICardProps) {
  return (
    <Box
      bgColor="white"
      m="1rem"
      p="1rem"
      borderRadius="10px"
      border="1px solid #EDEDED"
    >
      <Heading
        fontFamily="Poppins"
        fontWeight="500"
        fontSize="1rem"
        textTransform="uppercase"
        as="h5"
      >
        {title}
      </Heading>
      {children}
    </Box>
  );
}
