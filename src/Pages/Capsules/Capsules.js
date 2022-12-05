import { Box, Button, Flex, Image, SimpleGrid } from "@chakra-ui/react";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { Display } from "../../Components/Modal/Display";
import { getCapsulesData } from "../../Redux/DataReducer/action";

export const Capsules = () => {
  const data = useSelector((store) => store.DataReducer.data);
  const [isOpen, setIsOpen] = useState(false);
  const [value, setVlaue] = useState();
  const [page, setPage] = useState(1);
  const dispatch = useDispatch();
  console.log("page", page)
  useEffect(() => {
    dispatch(getCapsulesData(page));
  }, [dispatch, page]);

  console.log("data", data)
  return (
    <>
      <SimpleGrid
        position={"absolute"}
        top="90px"
        columns={{ base: 1, md: 2, lg: 3 }}
        spacing={6}
        m={0}
      >
        {data?.length > 0 &&
          data.map((e) => (
            <Box
              key={e.id}
              w="380px"
              h="400px"
              m={"auto"}
              borderRadius="10px"
              boxShadow="rgba(0, 0, 0, 0.35) 0px 5px 15px"
             
            >
            
              <Image
                w="100%"
                h="60%"
                src="https://cloudfront-us-east-2.images.arcpublishing.com/reuters/TXDGVXPBEVMY5PA2RHRF2EA25Y.jpg"
                alt="error_image"
              />
              <p>{e.capsule_id}</p>
              <p>{e.details}</p>
              <p>{e.status}</p>
              <Button
                onClick={() => {
                  setIsOpen(true);
                  setVlaue(e);
                }}
              >
                Details
              </Button>
              <Display
                data={value}
                open={isOpen}
                onClose={() => {
                  setIsOpen(false);
                }}
              />
            </Box>
          ))}
      </SimpleGrid>

      <Flex
        align="center"
        justify={{ base: "center", md: "space-around", xl: "space-between" }}
        direction={{ base: "column-reverse", md: "row" }}
        wrap="no-wrap"
        minH="70vh"
        px={8}
        position={"fixed"}
        mt={"60vh"}
      >
        <Button
          onClick={() => {
            setPage(page - 1);
          }}
        >
          prev
        </Button>

        <Button
          onClick={() => {
            setPage(page + 1);
          }}
        >
          Next
        </Button>
      </Flex>
    </>
  );
};
