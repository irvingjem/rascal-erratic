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

import Auth from "../utils/auth";
// import { useQuery } from "@apollo/client";
// import { GET_ME } from '../utils/queries'
// import { SAVE_MINT } from "../utils/mutations";
// import { SAVE_MINT } from "../utils/mutations";

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
// const {loading, data} = useQuery(GET_ME)
  // {GET_ME} // Using the mint.name query
  useEffect(() => {
    const fetchMints = async () => {
      const result = await fetch(
        `https://api-mainnet.magiceden.dev/v2/launchpad/collections?offset=0&limit=20`
      );
      
      const data = await result.json();
      console.log(data);
      setSaveMint(data);
    };

    fetchMints();
  }, []); // Use effect array


  // Rendering componant 
  return (
    <>
      <Jumbotron fluid className="text-light bg-dark"></Jumbotron>
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
                {/* {Auth.loggedIn() && (
                  <Button
                    disabled={savedMintIds?.some(
                      (savedMintName) => savedMintName === mint.mintName
                    )}
                    className="btn-block btn-info"
                    onClick={() => handleSaveMint(mint.mintName)}
                  >
                    {savedMintNames?.some(
                      (savedMintName) => savedMintName === mint.mintName
                    )
                      ? "This NFT has already been saved!"
                      : "Save this NFT!"}
                  </Button>
                )} */}
              </Card.Body>
            </Card>
          ))}
        </CardColumns>
      </Container>
    </>
  );
}

export default SearchNFTS;
