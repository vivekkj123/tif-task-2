import {
  FormControl,
  Input,
  Select,
  Button,
  Flex,
  FormErrorMessage,
  FormErrorIcon,
} from "@chakra-ui/react";
import React, { ChangeEvent } from "react";

import { FormElement, CustomFormLabel } from "../../components/library";
import { useFormik, FormikProps } from "formik";
import { useDispatch } from "react-redux";
import { addData } from "../../store/formSlice";
import * as Yup from "yup";

interface myFormValues {
  requestTitle: string;
  owner: string;
  hiringManager: string;
  noOfOpenings: string;
  urgency: string;
  employmentType: string;
  prefferedGender: string;
  status: string;
}

const requisitionSchema = Yup.object().shape({
  requestTitle: Yup.string().required("This field is required"),
  owner: Yup.string().required("This field is required"),
  hiringManager: Yup.string().required("This field is required"),
  noOfOpenings: Yup.string().required("This field is required"),
  urgency: Yup.string().required("This field is required"),
  employmentType: Yup.string().required("This field is required"),
  prefferedGender: Yup.string().required("This field is required"),
  status: Yup.string().required("This field is required"),
});

export default function RequistionForm() {
  const dispatch = useDispatch();
  const { handleChange, errors, touched }: FormikProps<myFormValues> =
    useFormik<myFormValues>({
      initialValues: {
        requestTitle: "",
        owner: "",
        hiringManager: "",
        noOfOpenings: "",
        urgency: "",
        employmentType: "",
        prefferedGender: "",
        status: "",
      },
      validationSchema: requisitionSchema,
      onSubmit(values) {
        console.log({ values });
      },
      validate(values) {
        dispatch(
          addData({
            type: "requistionForm",
            data: values,
          })
        );
      },
    });

  const updateReduxOnChange = (
    event: ChangeEvent<HTMLInputElement> | ChangeEvent<HTMLSelectElement>
  ) => {
    handleChange(event);
  };

  return (
    <FormControl
      as="form"
      onSubmit={(e) => {
        e.preventDefault();
      }}
    >
      <FormElement isInvalid={errors.requestTitle}>
        <CustomFormLabel label="Request Title" />
        <Input
          type="text"
          name="requestTitle"
          id="requestTitle"
          onChange={updateReduxOnChange}
        />
        {errors.requestTitle && touched.requestTitle && (
          <FormErrorMessage>
            <FormErrorIcon /> {errors.requestTitle}
          </FormErrorMessage>
        )}
      </FormElement>
      <FormElement isInvalid={errors.owner}>
        <CustomFormLabel label="Owner" />
        <Input
          type="text"
          name="owner"
          id="owner"
          onChange={updateReduxOnChange}
        />
        {errors.owner && touched.owner && (
          <FormErrorMessage>
            <FormErrorIcon /> {errors.owner}
          </FormErrorMessage>
        )}
      </FormElement>
      <FormElement isInvalid={errors.hiringManager}>
        <CustomFormLabel label="Hiring Manager" />
        <Input
          type="text"
          name="hiringManager"
          id="hiringManager"
          onChange={updateReduxOnChange}
        />
        {errors.hiringManager && touched.hiringManager && (
          <FormErrorMessage>
            <FormErrorIcon /> {errors.hiringManager}
          </FormErrorMessage>
        )}
      </FormElement>
      <FormElement isInvalid={errors.noOfOpenings}>
        <CustomFormLabel label="Number of Openings" />
        <Input
          type="text"
          name="noOfOpenings"
          id="noOfOpenings"
          onChange={updateReduxOnChange}
        />
        {errors.hiringManager && touched.hiringManager && (
          <FormErrorMessage>
            <FormErrorIcon /> {errors.hiringManager}
          </FormErrorMessage>
        )}
      </FormElement>
      <FormElement isInvalid={errors.urgency}>
        <CustomFormLabel label="Urgency" />
        <Select
          title="urgent"
          name="urgency"
          id="urgency"
          onChange={updateReduxOnChange}
        >
          <option value="" selected disabled>
            Select an option
          </option>
          <option value="low">Low</option>
          <option value="high">High</option>
        </Select>
        {errors.urgency && touched.urgency && (
          <FormErrorMessage>
            <FormErrorIcon /> {errors.urgency}
          </FormErrorMessage>
        )}
      </FormElement>
      <FormElement isInvalid={errors.employmentType}>
        <CustomFormLabel label="Employment Type" />
        <Select
          title="employmenttype"
          name="employmentType"
          id="employmentType"
          onChange={updateReduxOnChange}
        >
          <option value="" selected disabled>
            Select an option
          </option>
          <option value="permanent">Permanent</option>
          <option value="temporary">Temporary</option>
          <option value="internship">Internship</option>
          <option value="part-time">Part-time</option>
        </Select>
        {errors.employmentType && touched.employmentType && (
          <FormErrorMessage>
            <FormErrorIcon /> {errors.employmentType}
          </FormErrorMessage>
        )}
      </FormElement>
      <FormElement isInvalid={errors.prefferedGender}>
        <CustomFormLabel label="Preffered Gender" />
        <Select
          title="gender"
          name="prefferedGender"
          id="prefferedGender"
          onChange={updateReduxOnChange}
        >
          <option value="" selected disabled>
            Select an option
          </option>
          <option value="all">All</option>
          <option value="male">Male</option>
          <option value="female">Female</option>
        </Select>
        {errors.prefferedGender && touched.prefferedGender && (
          <FormErrorMessage>
            <FormErrorIcon /> {errors.prefferedGender}
          </FormErrorMessage>
        )}
      </FormElement>
      <FormElement isInvalid={errors.status}>
        <CustomFormLabel label="Status" />
        <Select
          title="status"
          name="status"
          id="status"
          onChange={updateReduxOnChange}
        >
          <option value="" selected disabled>
            Select an option
          </option>
          <option value="active">Active</option>
          <option value="inactive">Inactive</option>
        </Select>
        {errors.status && touched.status && (
          <FormErrorMessage>
            <FormErrorIcon /> {errors.status}
          </FormErrorMessage>
        )}
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
          disabled
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
}
