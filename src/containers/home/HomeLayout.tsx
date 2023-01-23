import {
  Container,
  Tabs,
  TabList,
  Tab,
  TabPanels,
  TabPanel,
  Heading,
  TabProps,
} from "@chakra-ui/react";
import React, { useState } from "react";
import InterviewSettings from "./InterviewSettingsForm";
import JobDetails from "./JobDetailsForm";
import RequistionForm from "./RequistionDetailsForm";
import DisplayCard from "../../components/DisplayCard";

const CustomTab: React.FC<TabProps> = ({ children, ...props }) => {
  return (
    <Tab p="1rem" fontFamily="Poppins" {...props}>
      {children}
    </Tab>
  );
};

const HomeLayout = () => {
  type PageNumbers = 0 | 1 | 2;

  const [page, setPage] = useState<PageNumbers>(0);

  const handlePage = (pageNumber: PageNumbers) => {
    setPage(pageNumber);
  };

  return (
    <Container
      display="grid"
      maxW={{ base: "80vw" }}
      gridTemplateColumns="1fr 0.7fr"
      gap={10}
    >
      <Tabs index={page}>
        <Heading fontFamily="Poppins" fontSize="1.5rem" mt="2rem" mb="1rem">
          Create Candidate Requisition
        </Heading>
        <TabList>
          <CustomTab>Requistion Details</CustomTab>
          <CustomTab>Job Details</CustomTab>
          <CustomTab>Interview Settings</CustomTab>
        </TabList>
        <TabPanels>
          <TabPanel>
            <RequistionForm />
          </TabPanel>
          <TabPanel>
            <JobDetails />
          </TabPanel>
          <TabPanel>
            <InterviewSettings />
          </TabPanel>
        </TabPanels>
      </Tabs>
      <DisplayCard />
    </Container>
  );
};

export default HomeLayout;
