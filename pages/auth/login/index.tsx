import {
  Button,
  Checkbox,
  Divider,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Heading,
  HStack,
  IconButton,
  Input,
  InputGroup,
  InputRightElement,
  Stack,
  Text,
  useBreakpointValue,
  useDisclosure,
  useToast,
} from "@chakra-ui/react";
import Logo from "../../../components/logo";
import SocialLogin from "../../../components/socialLogin";
// import { logInWithEmailAndPassword } from "firebases";
import { useFormik } from "formik";
import React from "react";
import { HiEye, HiEyeOff } from "react-icons/hi";
import LogoDark from "../../../assets/logo-dark.svg";
// import { useNavigate } from "react-router-dom";
import * as Yup from "yup";
import Link from "next/link";
import userApi from "../../../api/userApi";
import { useRouter } from "next/router";
import { useDispatch } from "react-redux";
import { UserLogin } from "../../../redux/auth/authSlice";
import { useAppDispatch } from "../../../hooks/hooks";
import { unwrapResult } from "@reduxjs/toolkit";

export interface LoginProps {}

type LoginFormValues = {
  username: string;
  password: string;
};

const initialValues: LoginFormValues = {
  username: "",
  password: "",
};

const LoginFormValidation = Yup.object({
  username: Yup.string().required("Please provide username."),
  password: Yup.string()
    .required("Please enter a password.")
    .min(8, "Please enter at least 8 characters"),
});

export default function Login(props: LoginProps) {
  const { isOpen, onToggle } = useDisclosure();
  const toast = useToast();
  const router = useRouter();
  const [isLoading, setIsLoading] = React.useState(false);
  const dispatch = useAppDispatch();

  const onClickReveal = () => {
    onToggle();
  };

  const formHandlers = useFormik<LoginFormValues>({
    initialValues: initialValues,
    validationSchema: LoginFormValidation,

    onSubmit: async (data) => {
      setIsLoading(true);
      setTimeout(async () => {
        try {
          const user = unwrapResult(await dispatch(UserLogin(data)));

          if (user) {
            toast({
              position: "top-right",
              title: "Login Successfully !!!",
              description: user.msg,
              status: "success",
              isClosable: true,
              duration: 3000,
            });
            setTimeout(() => {
              router.push("/home");
            });
          }
        } catch (error) {
          console.error(error);
          toast({
            position: "top-right",
            title: "Login Failed!!!",
            description: "We cannot find an account with that username",
            status: "error",
            isClosable: true,
            duration: 3000,
          });
        }
        setIsLoading(false);
      }, 2000);
    },
  });

  return (
    <Stack spacing="6">
      <Stack spacing="6">
        <Stack alignItems="center">
          <Logo logo={LogoDark} />
        </Stack>
        <Stack spacing={{ base: "3", md: "3" }} textAlign="center">
          <Heading size={useBreakpointValue({ base: "md", md: "lg" })}>
            Log in to your account
          </Heading>
          <HStack spacing="1" justify="center">
            <Text color="muted">Don&apos;t have an account?</Text>
            <p className="text-sky-700 text-md font-bold ">
              <Link href={"/auth/register"}>Register</Link>
            </p>
          </HStack>
        </Stack>
      </Stack>
      <form onSubmit={formHandlers.handleSubmit}>
        <Stack spacing="5">
          <FormControl
            isInvalid={
              formHandlers.errors.username
                ? formHandlers.touched.username
                : false
            }
          >
            <FormLabel htmlFor="username">Username</FormLabel>
            <Input
              id="username"
              type="username"
              onChange={formHandlers.handleChange}
              onBlur={formHandlers.handleBlur}
              value={formHandlers.values.username}
              {...props}
            />
            {formHandlers.touched.username && formHandlers.errors.username && (
              <FormErrorMessage>
                {formHandlers.errors.username}
              </FormErrorMessage>
            )}
          </FormControl>
          <FormControl
            isInvalid={
              formHandlers.errors.password
                ? formHandlers.touched.password
                : false
            }
          >
            <FormLabel htmlFor="password">Password</FormLabel>
            <InputGroup>
              <InputRightElement>
                <IconButton
                  variant="link"
                  aria-label={isOpen ? "Mask password" : "Reveal password"}
                  icon={isOpen ? <HiEyeOff /> : <HiEye />}
                  onClick={onClickReveal}
                />
              </InputRightElement>
              <Input
                id="password"
                name="password"
                type={isOpen ? "text" : "password"}
                autoComplete="current-password"
                onChange={formHandlers.handleChange}
                onBlur={formHandlers.handleBlur}
                value={formHandlers.values.password}
                {...props}
              />
            </InputGroup>
            {formHandlers.touched.password && formHandlers.errors.password && (
              <FormErrorMessage>
                {formHandlers.errors.password}
              </FormErrorMessage>
            )}
          </FormControl>
          <HStack justify="space-between">
            <Checkbox defaultChecked>Remember me</Checkbox>
            <Button variant="link" colorScheme="blue" size="sm">
              Forgot password?
            </Button>
          </HStack>
          {isLoading ? (
            <Button
              isLoading
              loadingText="Signing in"
              colorScheme="blue"
              variant="outline"
            ></Button>
          ) : (
            <Button type="submit" colorScheme="blue" variant="outline">
              Sign in
            </Button>
          )}
        </Stack>
      </form>

      <Stack spacing="6">
        <HStack>
          <Divider />
          <Text fontSize="md" whiteSpace="nowrap" color="muted">
            or continue with
          </Text>
          <Divider />
        </HStack>
        <SocialLogin />
      </Stack>
    </Stack>
  );
}
