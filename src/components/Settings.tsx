import React, { ReactElement } from "react";
import {
  Box,
  Button,
  Flex,
  flexbox,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Input,
} from "@chakra-ui/react";
import { useForm } from "react-hook-form";
import { ArrowBackIcon } from "@chakra-ui/icons";
import { Link, Redirect } from "react-router-dom";

interface Props {}

type FormInputs = {
  username: string;
};

export default function Settings({}: Props): ReactElement {
  const { register, handleSubmit, errors } = useForm<FormInputs>();

  const onSubmit = (data) => {
    localStorage.github_username = data.username;
    window.location.replace("/");
  };

  return (
    <>
      <Box>
        <form onSubmit={handleSubmit(onSubmit)}>
          <FormControl isInvalid={!!errors.username}>
            <FormLabel htmlFor="name"></FormLabel>
            <Input
              name="username"
              id="username"
              placeholder="username"
              defaultValue={localStorage.github_username}
              ref={register({
                required: {
                  value: true,
                  message: "You must enter a github username",
                },
              })}
            />
            <FormErrorMessage>
              {errors.username && errors.username.message}
            </FormErrorMessage>
          </FormControl>
          <Button w="100%" maxW="400px" mx="auto" mt="20px" type="submit">
            Save Settings
          </Button>
        </form>
      </Box>
    </>
  );
}
