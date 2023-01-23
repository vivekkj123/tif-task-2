import React, { ChangeEvent } from "react";
import {
  FormControl,
  Input,
  Button,
  Flex,
  useDisclosure,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
} from "@chakra-ui/react";
import { FormElement, CustomFormLabel } from "../../components/library";
import { useFormik } from "formik";
import { useDispatch } from "react-redux";
import { addData } from "../../store/formSlice";
import * as Yup from "yup";

interface InterViewSettingsValues {
  interviewMode: string;
  interviewDuration: string;
  interviewLanguage: string;
}

const interviewValidationSchema = Yup.object().shape({
  interviewMode: Yup.string().required("This field is required"),
  interviewDuration: Yup.string().required("This field is required"),
  interviewLanguage: Yup.string().required("This field is required"),
});

const InterviewSettings = () => {
  const dispatch = useDispatch();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { handleChange, handleSubmit, errors } =
    useFormik<InterViewSettingsValues>({
      initialValues: {
        interviewMode: "",
        interviewDuration: "",
        interviewLanguage: "",
      },
      validationSchema: interviewValidationSchema,
      onSubmit(values, formikHelpers) {
        // console.log(values);
        // dispatch(
        //   addData({
        //     type: "interviewSettings",
        //     data: values,
        //   })
        // );
      },
    });

  const updateReduxOnChange = (
    event: ChangeEvent<HTMLInputElement> | ChangeEvent<HTMLSelectElement>
  ) => {
    handleChange(event);
  };

  return (
    <>
      <FormControl
        as="form"
        onSubmit={(e) => {
          e.preventDefault();
          handleSubmit();
        }}
      >
        <FormElement isInvalid={errors.interviewMode}>
          <CustomFormLabel label="Interview Mode" />
          <Input
            name="interviewMode"
            id="interviewMode"
            onChange={updateReduxOnChange}
            type="text"
          />
        </FormElement>
        <FormElement isInvalid={errors.interviewDuration}>
          <CustomFormLabel label="Interview Duration" />
          <Input
            name="interviewDuration"
            id="interviewDuration"
            onChange={updateReduxOnChange}
            type="text"
          />
        </FormElement>
        <FormElement isInvalid={errors.interviewLanguage}>
          <CustomFormLabel label="Interview Language" />
          <Input
            name="interviewLanguage"
            id="interviewLanguage"
            onChange={updateReduxOnChange}
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
            onClick={onOpen}
            _hover={{
              bgColor: "#ED4646",
            }}
            disabled={Object.keys(errors).length === 0 ? false : true}
          >
            Submit
          </Button>
        </Flex>
      </FormControl>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Thank You! 😊</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            Your Job Application was submitted successfully 🎉.
            <br />
            Candidates will be able to apply for your open jobs now. Happy
            Hiring! 🎉
          </ModalBody>
          <ModalFooter>
            <Button colorScheme="blue" mr={3} onClick={onClose}>
              Close
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

export default InterviewSettings;
