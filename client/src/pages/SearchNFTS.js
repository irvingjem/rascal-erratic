import React, { useState, useEffect } from "react";
import {
  Jumbotron,
  Container,
    // Col,
    // Form,
    Button,
  Card,
  CardColumns,
} from "react-bootstrap";
// import { getMints } from "../utils/API";
import { useMutation } from '@apollo/client';
import Auth from "../utils/auth";
// import { useQuery } from "@apollo/client";
// import { GET_ME } from '../utils/queries'
import { SAVE_MINT } from "../utils/mutations";
// import { REMOVE_MINT } from '../utils/mutations';

// import { saveMintNames, getSavedMintNames } from "../utils/localStorage";

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
function SearchNFTS() {
  const [saveMint, setSaveMint] = useState([]);
// API call
  const [saveUserMint] = useMutation(SAVE_MINT);


  useEffect(() => {
    const fetchMints = async () => {
      const result = await fetch(
        `https://api-mainnet.magiceden.dev/v2/launchpad/collections?offset=0&limit=50`
      );
      
      const data = await result.json();
      console.log(data);
      setSaveMint(data);
      
     };

    fetchMints();
  }, []); 
  
  const handleSaveMint = async (name) => {
    const mintToSave = saveMint.find((data) => data.name === name )
    console.log(mintToSave)
    const token = Auth.loggedIn() ? Auth.getToken() : null;
    if (!token) {
      return false;
    }
  
    try {
      const {data} = await saveUserMint({variables:{mintData:mintToSave}});
  
      // if (!response.ok) {
      //   throw new Error('something went wrong!');
      // }
  
      // if book successfully saves to user's account, save book id to state
      setSaveMint([...saveMint, mintToSave.mintNames]);
    } catch (err) {
      console.error(err);
    }
  }// Use effect array


  // Rendering componant 
  return (
    <>
      {/* <Jumbotron fluid className="header"></Jumbotron> */}
      <Container>
        <CardColumns>
        
          {saveMint.map((mint) => (
            <Card key={mint.name} border="dark">
              {mint.image ? (
                <Card.Img
                  src={mint.image}
                  alt={`The cover for ${mint.image}`}
                  variant="top"
                />
              ) : null}
              <Card.Body>
                <Card.Title>{mint.name}</Card.Title>
                <p className="small">Price {mint.price} SOL</p>
                <Card.Text>{mint.description}</Card.Text>
                {Auth.loggedIn() && (
                  <Button
                    disabled={saveMint?.some(
                      (saveMint) => saveMint === mint.name
                    )}
                    className="btn-block btn-info"
                    onClick={() => handleSaveMint(mint.name)}
                  >
                    {saveMint?.some(
                      (saveMint) => saveMint === mint.name
                    )
                      ? "This NFT has already been saved!"
                      : "Save this NFT!"}
                  </Button>
                )}
              </Card.Body>
            </Card>
          ))}
        </CardColumns>
      </Container>
    </>
  );
}

export default SearchNFTS;
