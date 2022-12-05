import { Box, Button, Image, SimpleGrid, Text } from "@chakra-ui/react";
import "./land.css";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { getRocketData } from "../../Redux/DataReducer/action";

export const Landpage = () => {
  const data = useSelector((store) => store.DataReducer.data);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getRocketData());
  }, []);
  return (
    <SimpleGrid column={1} w="100%" h="100vh">
      {data.map((e, index) => (
        <Box key={index} h={{ sm: "250px", md: "350px", lg: "100vh" }}>
          <Image
            w="100%"
            h={{ sm: "320px", md: "400px", lg: "100vh" }}
            margin={0}
            padding={0}
            src={e.flickr_images[1]}
            alt="image_error"
          />
          <Box
            position="relative"
            left={{ sm: "120px", md: "200px", lg: "170px" }}
            top={{ sm: "-250px", md: "-290px", lg: "-335px" }}
            border={{ sm: "2px solid red", md: "2px solid red", lg: "0" }}
            borderRadius={{ sm: "10px", md: "20px", lg: "0" }}
            h={{ sm: "65%", md: "60%", lg: "40%" }}
            w={{ sm: "55%", md: "50%", lg: "30%" }}
            align={{ sm: "center", md: "center", lg: "left" }}
            justifyContent={{ sm: "center", md: "center", lg: "left" }}
          >
            <Text
              color={"red"}
              fontSize={{ sm: "20px", md: "25px", lg: "50px" }}
            >
              {e.company}
            </Text>
            <Text
              fontSize={{ sm: "20px", md: "25px", lg: "30px" }}
              color="white"
            >
              {e.country}
            </Text>
            <Text
              fontSize={{ sm: "15px", md: "19px", lg: "20px" }}
              color="white"
            >
              {e.rocket_name}
            </Text>
            <Button
              h={{ sm: "45px", md: "60px", lg: "70px" }}
              w={{ sm: "150px", md: "200px ", lg: "350px" }}
              fontSize={{ sm: "16px", md: "20px", lg: "25px" }}
              className="btn"
            >
              {" "}
              <Link to={e.wikipedia}>More Details</Link>
            </Button>
          </Box>
        </Box>
      ))}
    </SimpleGrid>
  );
};
