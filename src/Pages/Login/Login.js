import { Box, Button, Flex, FormLabel, Input, Text } from "@chakra-ui/react";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { loginApi } from "../../Redux/Auth/action";
import { USER_LOGIN_SUCCESS } from "../../Redux/Auth/action.type";
export const Login = () => {
  const token = useSelector((store) => store.token);
  console.log("token", token);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [inputData, setInputData] = useState({
    email: "",
    password: "",
  });
  const handleInput = (e) => {
    const { name, value } = e.target;
    setInputData({
      ...inputData,
      [name]: value,
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    const payload = {
      email: inputData.email,
      password: inputData.password,
    };
    console.log("inputsDatadsgsdgsd", inputData.email);
    dispatch(loginApi(payload)).then((res) => {
      console.log("login payload", res.user_id);

      if (res === USER_LOGIN_SUCCESS) {
        console.log("res", res);
        localStorage.setItem("loginUser", JSON.stringify(token));
        alert("Login successful");
        navigate("/");
      } else {
        alert("Login failed");
        navigate("/register");
      }
    });
  };
  return (
    <Box justifyContent="center" textAlign={"center"}>
      <Flex
        position={"absolute"}
        top="140px"
        justify="center"
        align="center"
        direction="column"
        textAlign="center"
        w={{sm:"80%", md:"50%" , lg:"32%"}}

        z-index={2}
        m={"auto"}
        padding="13px 20px"
        h="350px"
        boxShadow="rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 2px 6px 2px"
      >
        <form>
          <Text fontSize={"30px"} color="gray.900" m="0">
            Login
          </Text>
          <FormLabel m="15px 0 0 50px" htmlFor="text">
            Email Id
          </FormLabel>
          <Input
            h="50px"
            w="300px"
            type="email"
            name="email"
            placeholder="Enter Your Email"
            value={inputData.email}
            onChange={(e) => handleInput(e)}
          />
          <FormLabel m="15px 0 0 50px" htmlFor="text">
            Password
          </FormLabel>
          <Input
            h="50px"
            w="300px"
            type="password"
            name="password"
            placeholder="Enter Your 8 digit password"
            value={inputData.password}
            onChange={(e) => handleInput(e)}
          />
          <Button
            mt="20px"
            w="300px"
            borderColor="#ccd0d5"
            colorScheme="RGBA(0, 0, 0, 0.92)"
            _focus={{
              boxShadow:
                "0 0 1px 2px rgba(88, 144, 255, .75), 0 1px 1px rgba(0, 0, 0, .15)",
            }}
            transform="scale(0.98)"
            background="#000000"
            width="300px"
            _hover={{
              bg: "#f5f6f7",
              background: "gray.600",
              transform: "scale(0.98)",
              color: "white",
            }}
            onClick={handleSubmit}
          >
            Login
          </Button>
        </form>
      </Flex>
    </Box>
  );
};
