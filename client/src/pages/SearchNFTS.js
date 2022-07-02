import React, { useState, useEffect } from "react";
import Moment from "react-moment";
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
<<<<<<< HEAD
import { useMutation } from "@apollo/client";
=======
import { useMutation } from '@apollo/client';
>>>>>>> 2263dd62dc2e61c0b5cc084ad3d1562b3b57a911
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
  const [saveMints, setSaveMint] = useState([]);
  // API call
  const [saveUserMint] = useMutation(SAVE_MINT);

  useEffect(() => {
    const fetchMints = async () => {
      const result = await fetch(
        `https://api-mainnet.magiceden.dev/v2/launchpad/collections?offset=0&limit=200`
      );
      const thisMonthsNfts = [];
      const startDate = new Date();
      const currentMonth = startDate.getMonth() + 1;
      console.log(currentMonth);
      const data = await result.json();
      console.log(data);
      data.map((Nft) => {
        let fullDate = Nft.launchDatetime.split("-")[1];
        console.log(fullDate);
        if (fullDate == currentMonth) {
          thisMonthsNfts.push(Nft);
        } else {
          console.log(fullDate + " is not the same month as " + currentMonth);
        }
      });
      console.log(thisMonthsNfts);
      // const resultFilterMints = data.filter(function (dropDate) {
      //   let date = new Date(dropDate.launchDatetime);
      //   let monthMint = date.getMonth() + 1;
      //   console.log(monthMint);
      //   //  for (i = 0; i < data.length; i++) {

      //   //  }
      //   return date >= startDate;
      // });
      // console.log(resultFilterMints);
      setSaveMint(thisMonthsNfts);
    };
    fetchMints();
  }, []);

  const handleSaveMint = async (name) => {
    const mintToSave = saveMints.find((data) => data.name === name);
    console.log(mintToSave);
    const token = Auth.loggedIn() ? Auth.getToken() : null;
    if (!token) {
      return false;
    }

    try {
      const { data } = await saveUserMint({
        variables: { mintData: mintToSave },
      });

      // if (!response.ok) {
      //   throw new Error('something went wrong!');
      // }

      // if book successfully saves to user's account, save book id to state
      setSaveMint([...saveMints, mintToSave.mintNames]);
    } catch (err) {
      console.error(err);
    }
  }; // Use effect array

<<<<<<< HEAD
  // Rendering componant
=======
  // Rendering componant 
>>>>>>> 2263dd62dc2e61c0b5cc084ad3d1562b3b57a911
  return (
    <>
      <Jumbotron fluid className="header"></Jumbotron>
      <Container>
        <CardColumns>
          {saveMints.map((mint) => (
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
                <Card.Subtitle>
                  <Moment fromNow>{mint.launchDatetime}</Moment>
                </Card.Subtitle>
                {Auth.loggedIn() && (
                  <Button
                    disabled={saveMints?.some(
                      (saveMints) => saveMints === mint.name
                    )}
                    className="btn-block btn-info"
                    onClick={() => handleSaveMint(mint.name)}
                  >
                    {saveMints?.some((saveMints) => saveMints === mint.name)
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
