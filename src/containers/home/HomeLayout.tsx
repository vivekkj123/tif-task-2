import {
  Container,
  Tabs,
  TabList,
  Tab,
  TabPanels,
  TabPanel,
  Heading,
  TabProps,
  Box,
  Grid,
} from "@chakra-ui/react";
import React, { useState } from "react";
import InterviewSettingsForm from "./InterviewSettingsForm";
import JobDetailsForm from "./JobDetailsForm";
import RequisitionForm from "./RequisitionDetailsForm";
import DisplayCard from "./PreviewCard";
import { PageNumbers } from "../../interface/home";
import {
  IInterViewSettings,
  IJobDetails,
  IRequisitionDetails,
} from "@src/interface/forms";

const CustomTab: React.FC<TabProps> = ({ children, ...props }) => {
  return (
    <Tab p="1rem" fontFamily="Poppins" {...props}>
      {children}
    </Tab>
  );
};

const HomeLayout = () => {
  const [page, setPage] = useState<PageNumbers>(0);
  const [RequisitionDetails, setRequisitionDetails] =
    useState<IRequisitionDetails>({
      gender: "",
      noOfOpenings: 0,
      requisitionTitle: "",
      urgency: "",
    });
  const [JobDetails, setJobDetails] = useState<IJobDetails>({
    jobDetails: "",
    jobLocation: "",
    jobTitle: "",
  });
  const [InterviewDetails, setInterviewDetails] = useState<IInterViewSettings>({
    interviewDuration: "",
    interviewLanguage: "",
    interviewMode: "",
  });
  const handlePage = (pageNumber: PageNumbers) => {
    setPage(pageNumber);
  };

  return (
    <Box w="100%">
      <Container maxW="1200px">
        <Heading fontFamily="Poppins" fontSize="1.5rem" my="2rem">
          Create Candidate Requisition
        </Heading>
        <Tabs index={page} isLazy lazyBehavior="keepMounted">
          <TabList>
            <CustomTab>Requistion Details</CustomTab>
            <CustomTab>Job Details</CustomTab>
            <CustomTab>Interview Settings</CustomTab>
          </TabList>
          <Grid display="grid" gridTemplateColumns="3fr 2fr" gap="24px">
            <TabPanels>
              <TabPanel>
                <RequisitionForm
                  handleTab={handlePage}
                  setRequestitionDetails={setRequisitionDetails}
                />
              </TabPanel>
              <TabPanel>
                <JobDetailsForm
                  handleTab={handlePage}
                  setJobDetails={setJobDetails}
                />
              </TabPanel>
              <TabPanel>
                <InterviewSettingsForm
                  handleTab={handlePage}
                  setInterviewDetails={setInterviewDetails}
                />
              </TabPanel>
            </TabPanels>
            <DisplayCard
              requisitionDetails={RequisitionDetails}
              jobDetails={JobDetails}
              interviewSettings={InterviewDetails}
            />
          </Grid>
        </Tabs>
      </Container>
    </Box>
  );
};

export default HomeLayout;
