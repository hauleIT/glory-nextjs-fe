import {
  Box,
  Button,
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
  Spinner,
  Stack,
  styled,
  Text,
  useBreakpointValue,
  useDisclosure,
  useToast,
} from "@chakra-ui/react";
// import LogoDark from "../../logo-dark.svg";
import Logo from "../../../components/logo";
import SocialLogin from "../../../components/socialLogin";
// import { registerWithEmailAndPassword } from "firebases";
import { useFormik } from "formik";
import React from "react";
import { HiEye, HiEyeOff } from "react-icons/hi";
// import { useNavigate } from "react-router-dom";
import * as Yup from "yup";
import LogoDark from "../../../assets/logo-dark.svg";
import Link from "next/link";
import userApi from "../../../api/userApi";
import { useRouter } from "next/router";
import { DisableBackground } from "../../../components/disableBackground/disableBg";

export interface RegisterProps {}

type RegisterFormValues = {
  firstName: string;
  lastName: string;
  username: string;
  password: string;
  retypePassword: string;
};

const initialValues: RegisterFormValues = {
  firstName: "",
  lastName: "",
  username: "",
  password: "",
  retypePassword: "",
};

const RegisterFormValidation = Yup.object({
  firstName: Yup.string().required("Please enter First Name"),
  lastName: Yup.string().required("Please enter Last Name"),
  username: Yup.string().required("Please provide an email address."),
  password: Yup.string()
    .required("Please enter a password.")
    .min(8, "Please enter at least 8 characters"),
  retypePassword: Yup.string()
    .required("Please enter a password.")
    .oneOf([Yup.ref("password")], "Password does not match"),
});

export default function Register(props: RegisterProps) {
  const [showPassword, setShowPassword] = React.useState(false);
  const toast = useToast();
  const [isLoading, setIsLoading] = React.useState(false);
  const [isLoadingPage, setIsLoadingPage] = React.useState(false);
  const router = useRouter();

  const onClickShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const [showRetypePassword, setShowRetypePassword] = React.useState(false);

  const onClickShowRetypePassword = () => {
    setShowRetypePassword(!showRetypePassword);
  };

  const formHandlers = useFormik<RegisterFormValues>({
    initialValues: initialValues,
    validationSchema: RegisterFormValidation,
    onSubmit: async (data) => {
      setIsLoading(true);

      setTimeout(async () => {
        await userApi
          .register(data)
          .then((res: any) => {
            toast({
              position: "top-right",
              title: "Register Successfully !!!",
              description: "You will be redirected to the login page",
              status: "success",
              isClosable: true,
              duration: 3000,
            });
            setIsLoadingPage(true);
            setTimeout(() => {
              router.push("/auth/login");
              setIsLoadingPage(false);
            }, 2000);
            // return res.user;
          })
          .catch((error: any) => {
            console.error(error);

            toast({
              position: "top-right",
              title: "Register Failed!!!",
              // description: error.response.data.message,
              status: "error",
              isClosable: true,
              duration: 3000,
            });
          });
        setIsLoading(false);
      }, 2000);
    },
  });

  return (
    <Box>
      {isLoadingPage && (
        <Box>
          <Spinner
            className="absolute inset-x-0 m-auto top-[45%] z-30"
            thickness="5px"
            speed="2s"
            emptyColor="gray.200"
            color="blue.600"
            size="xl"
          />
        </Box>
      )}
      <Stack spacing="6">
        <Stack spacing="6">
          <Stack alignItems="center">
            <Logo logo={LogoDark} />
          </Stack>
          <Stack spacing={{ base: "3", md: "3" }} textAlign="center">
            <Heading size={useBreakpointValue({ base: "md", md: "lg" })}>
              Create an account
            </Heading>
            <HStack spacing="1" justify="center">
              <Text color="muted">Already have an account?</Text>
              <p className="text-sky-700 text-md font-bold ">
                <Link href={"/auth/login"}>Login</Link>
              </p>
            </HStack>
          </Stack>
        </Stack>
        <form onSubmit={formHandlers.handleSubmit}>
          <Stack spacing="5">
            <HStack spacing="10" justifyContent="space-between">
              <FormControl
                isInvalid={
                  formHandlers.errors.firstName
                    ? formHandlers.touched.firstName
                    : false
                }
              >
                <FormLabel htmlFor="firstName">First Name</FormLabel>
                <Input
                  id="firstName"
                  type="text"
                  onChange={formHandlers.handleChange}
                  onBlur={formHandlers.handleBlur}
                  value={formHandlers.values.firstName}
                />
                {formHandlers.touched.firstName &&
                  formHandlers.errors.firstName && (
                    <FormErrorMessage>
                      {formHandlers.errors.firstName}
                    </FormErrorMessage>
                  )}
              </FormControl>
              <FormControl
                isInvalid={
                  formHandlers.errors.lastName
                    ? formHandlers.touched.lastName
                    : false
                }
              >
                <FormLabel htmlFor="lastName">Last Name</FormLabel>
                <Input
                  id="lastName"
                  type="text"
                  onChange={formHandlers.handleChange}
                  onBlur={formHandlers.handleBlur}
                  value={formHandlers.values.lastName}
                />
                {formHandlers.touched.lastName &&
                  formHandlers.errors.lastName && (
                    <FormErrorMessage>
                      {formHandlers.errors.lastName}
                    </FormErrorMessage>
                  )}
              </FormControl>
            </HStack>
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
              />
              {formHandlers.touched.username &&
                formHandlers.errors.username && (
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
                    aria-label={
                      showPassword ? "Mask password" : "Reveal password"
                    }
                    icon={
                      showPassword ? (
                        <HiEyeOff onClick={onClickShowPassword} />
                      ) : (
                        <HiEye onClick={onClickShowPassword} />
                      )
                    }
                  />
                </InputRightElement>
                <Input
                  id="password"
                  name="password"
                  type={showPassword ? "text" : "password"}
                  autoComplete="current-password"
                  onChange={formHandlers.handleChange}
                  onBlur={formHandlers.handleBlur}
                  value={formHandlers.values.password}
                  {...props}
                />
              </InputGroup>
              {formHandlers.touched.password &&
                formHandlers.errors.password && (
                  <FormErrorMessage>
                    {formHandlers.errors.password}
                  </FormErrorMessage>
                )}
            </FormControl>
            <FormControl
              isInvalid={
                formHandlers.errors.retypePassword
                  ? formHandlers.touched.retypePassword
                  : false
              }
            >
              <FormLabel htmlFor="retypePassword">Retype Password</FormLabel>
              <InputGroup>
                <InputRightElement>
                  <IconButton
                    variant="link"
                    aria-label={
                      showRetypePassword ? "Mask password" : "Reveal password"
                    }
                    icon={
                      showRetypePassword ? (
                        <HiEyeOff onClick={onClickShowRetypePassword} />
                      ) : (
                        <HiEye onClick={onClickShowRetypePassword} />
                      )
                    }
                  />
                </InputRightElement>

                <Input
                  id="retypePassword"
                  name="retypePassword"
                  type={showRetypePassword ? "text" : "password"}
                  autoComplete="current-retypePassword"
                  onChange={formHandlers.handleChange}
                  onBlur={formHandlers.handleBlur}
                  value={formHandlers.values.retypePassword}
                  {...props}
                />
              </InputGroup>
              {formHandlers.touched.retypePassword &&
                formHandlers.errors.retypePassword && (
                  <FormErrorMessage>
                    {formHandlers.errors.retypePassword}
                  </FormErrorMessage>
                )}
            </FormControl>

            {isLoading ? (
              <Button
                isLoading
                type="submit"
                loadingText="Creating an account ..."
                colorScheme="blue"
                variant="outline"
              ></Button>
            ) : (
              <Button type="submit" colorScheme="blue" variant="outline">
                Create an account
              </Button>
            )}
          </Stack>
        </form>

        <Stack spacing="6">
          <HStack>
            <Divider />
            <Text fontSize="md" whiteSpace="nowrap" color="muted">
              or register with
            </Text>
            <Divider />
          </HStack>
          <SocialLogin />
        </Stack>
      </Stack>
    </Box>
  );
}
