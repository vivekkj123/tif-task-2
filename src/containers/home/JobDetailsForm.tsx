import React, { ChangeEvent } from "react";
import {
  FormControl,
  Input,
  FormErrorMessage,
  Button,
  Flex,
} from "@chakra-ui/react";
import { FormElement, CustomFormLabel } from "../../components/library";

import { useFormik } from "formik";
import { useDispatch } from "react-redux";
import { addData } from "../../store/formSlice";
import * as Yup from "yup";

interface myFormValues {
  jobTitle: string;
  jobDetails: string;
  jobLocation: string;
}

const jobDetailsSchema = Yup.object().shape({
  jobTitle: Yup.string().required("This field is required"),
  jobDetails: Yup.string().required("This field is required"),
  jobLocation: Yup.string().required("This field is required"),
});

const JobDetails = () => {
  const dispatch = useDispatch();
  const { handleChange, handleReset, handleSubmit, errors, values } =
    useFormik<myFormValues>({
      initialValues: {
        jobTitle: "",
        jobDetails: "",
        jobLocation: "",
      },
      validationSchema: jobDetailsSchema,
      onSubmit(values) {
        console.log({ values });
      },
      validate: (values: any) => {
        dispatch(
          addData({
            type: "jobDetails",
            data: values,
          })
        );
      },
    });

  const updateReduxOnChange = (
    event: ChangeEvent<HTMLInputElement> | ChangeEvent<HTMLSelectElement>
  ) => {
    handleChange(event);
    console.log({ onChange: values });
  };

  return (
    <FormControl
      as="form"
      onSubmit={(e) => {
        e.preventDefault();
      }}
    >
      <FormElement isInvalid={errors.jobTitle}>
        <CustomFormLabel label="Job Title" />
        <Input
          onChange={updateReduxOnChange}
          name="jobTitle"
          id="jobTitle"
          type="text"
        />
      </FormElement>
      <FormElement isInvalid={errors.jobDetails}>
        <CustomFormLabel label="Job Details" />
        <Input
          onChange={updateReduxOnChange}
          name="jobDetails"
          id="jobDetails"
          type="text"
        />
      </FormElement>
      <FormElement isInvalid={errors.jobLocation}>
        <CustomFormLabel label="Job Location" />
        <Input
          onChange={updateReduxOnChange}
          name="jobLocation"
          id="jobLocation"
          type="text"
        />
      </FormElement>

      <Flex w="fit-content" m="0rem 0rem 0rem auto" mt="4rem">
        <Button
          color="white"
          bgColor="#AA85C5"
          mr="1rem"
          type="button"
          w="10rem"
          _hover={{
            bgColor: "#6B1AB4",
          }}
        >
          Previous
        </Button>
        <Button
          color="white"
          bgColor="#EA7A7A"
          type="submit"
          w="10rem"
          _hover={{
            bgColor: "#ED4646",
          }}
          disabled={Object.keys(errors).length === 0 ? false : true}
        >
          Next
        </Button>
      </Flex>
    </FormControl>
  );
};

export default JobDetails;
