import { gql } from "@apollo/client";
import React, { useState, useEffect } from "react";
import {
  Jumbotron,
  Container,
  Col,
  Form,
  Button,
  Card,
  CardColumns,
} from "react-bootstrap";
import { getMints } from "../utils/API";

import Auth from "../utils/auth";
import { useMutation } from "@apollo/client";
import { SAVE_MINT } from "../utils/mutations";
import { saveBookIds, getSavedBookIds } from "../utils/localStorage";
// const getLaunchpad = () => {
//     try { const response = await getMints();
//         if (!response.ok) {
//             throw new Error("Something went wrong!");
//           }
//     }
//     return(
//         <div>Someshit</div>
//     )
// }
const getLaunchpad = async () => {
  try {
    const response = await getMints();
    console.log(response);
    if (!response.ok) {
      throw new Error("Something went wrong!");
    }

    const { items } = await response.json();

    // const bookData = items.map((book) => ({
    //   mintId: book.id,
    //   authors: book.volumeInfo.authors || ["No author to display"],
    //   title: book.volumeInfo.title,
    //   description: book.volumeInfo.description,
    //   image: book.volumeInfo.imageLinks?.thumbnail || "",
    // }));

    //     symbol
    //     name
    //     description
    //     featured
    //     edition
    //     image
    //     price
    //     size
    //     launchDatetime

    // getLaunchpad();
  } catch (err) {
    console.error(err);
  }
  //   const saveMint = async (mintId) => {
  //     // find the book in `searchedBooks` state by the matching id
  //     // const mintToSave = searchedMint.find((mint) => mint.mintId === mintId);

  //     // get token of logged in user
  //     const token = Auth.loggedIn() ? Auth.getToken() : null;

  //     if (!token) {
  //       return false;
  //     }

  //     try {
  //       const { data } = await saveMint({ variables: { mintData: mintToSave } });

  //       // if (!response.ok) {
  //       //   throw new Error("something went wrong!");
  //       // }

  //       // if book successfully saves to user's account, save book id to state
  //       //   setSavedBookIds([...savedMintIds, MintToSave.mintId]);
  //     } catch (err) {
  //       console.error(err);
  //     }
  //   };
  return <div className = "container-fluid"> 
    <Jumbotron/>
    <Container/>
    <Col/>
    <Form/>
    <Button/>
    <Card/>
    <CardColumns/>
  </div>;
};

export default getLaunchpad;
