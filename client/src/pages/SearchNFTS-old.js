import React, { useState, useEffect } from "react";
import {
  Jumbotron,
  Container,
  //   Col,
  //   Form,
  //   Button,
  Card,
  CardColumns,
} from "react-bootstrap";
// import { getMints } from "../utils/API";

// import Auth from "../utils/auth";
// import { useMutation } from "@apollo/client";
// import { SAVE_MINT } from "../utils/mutations";

// import { saveMintIds, getSavedMintIds } from "../utils/localStorage";

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

// Function to pull Api data and display
const GetMints = async () => {
  const [savedMint, setSavedMint] = useState([]);
  // useEffect( () => {dataGetter()},[])
  // const dataGetter = async () => {
  try {
    const response = await fetch(
      `https://api-mainnet.magiceden.dev/v2/launchpad/collections?offset=0&limit=20`
    );
    // .then((response) => response.json());
    if (!response.ok) {
      throw new Error("Something went wrong!");
    }

    const items = await response.json();
    // console.log(items);

    const mintData = items.map((mint) => ({
      description: mint.description,
      featured: mint.featured,
      image: mint.image,
      launchDatetime: mint.launchDatetime,
      name: mint.name,
      price: mint.price,
      size: mint.size,
      symbol: mint.symbol,
    }));
    console.log(savedMint);
    console.log(mintData);
    setSavedMint(mintData);
  } catch (err) {
    console.error(err);
  }

  // };

  return (
    <div>We're trying</div>
//     <>
//       <Jumbotron fluid className="text-light bg-dark"></Jumbotron>

//       <Container>
//         <CardColumns>
//           {savedMint.map((mint) => {
//             return (
//               <Card key={mint.name} border="dark">
//                 {mint.image ? (
//                   <Card.Img
//                     src={mint.image}
//                     alt={`The cover for ${mint.image}`}
//                     variant="top"
//                   />
//                 ) : null}
//                 <Card.Body>
//                   <Card.Title>{mint.title}</Card.Title>
//                   <p className="small">description {mint.price}</p>
//                   <Card.Text>{mint.description}</Card.Text>
//                   {Auth.loggedIn() && (
//                     <Button
//                       disabled={savedMintIds?.some((savedMintId) => savedMintId === mint.mintId)}
//                       className='btn-block btn-info'
//                       onClick={() => handleSaveMint(mint.mintId)}
//                       >
//                       {savedMintIds?.some((savedMintId) => savedMintId === mint.mintId)
//                         ? 'This NFT has already been saved!'
//                         : 'Save this NFT!'}
//                     </Button>
//                   )}
//                 </Card.Body>
//               </Card>
//             );
//           })}
//         </CardColumns>
//       </Container>
//     </>
  );
};

// ).then((response) => response.json());

// const GetLaunchpad = async () => {
//     const [savedMint, setSavedMints] = useState([]);
//     const response = await getMints();
//     console.log(response);

//   try {

//     if (!response.ok) {
//       throw new Error("Something went wrong!");
//     }

// setSavedMints(response);

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
//   } catch (err) {
//     console.error(err);
//   }
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

export default GetMints;
