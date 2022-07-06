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
import { useMutation } from "@apollo/client";
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
  const [savedMint, {error}] = useMutation(SAVE_MINT);

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
        // console.log(fullDate);
        if (fullDate == currentMonth) {
          thisMonthsNfts.push(Nft);
        } else {
          // console.log(fullDate + " is not the same month as " + currentMonth);
        }
      });
      // console.log(thisMonthsNfts);
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
  // Something isn't working here!
  // Takes in all the data to save to push to GraphQL error here
  const handleSaveMint = async (name) => {
    // console.log(name);
    const mintToSave = saveMint.find((data) => data.name === name);
    // console.log(mintToSave);
    //  token for login
    const token = Auth.loggedIn() ? Auth.getToken() : null;
    
    if (!token) {
      return false;
    }

    try {
      const { data } = await savedMint({
        variables: {mintData: mintToSave}
      });

      console.log(data);
      // if (!response.ok) {
      //   throw new Error('something went wrong!');
      // }

      // if book successfully saves to user's account, save book id to state
      setSaveMint([...saveMint, mintToSave.name]);
    } catch (err) {
      console.error(err);
    }
  }; // Use effect array
console.log(saveMint)
  // Rendering componant
  return (
    <>
      {/* <Jumbotron fluid className="header"></Jumbotron> */}
      <Container>
        <CardColumns>
          {saveMint?.map((mint) => (
            <Card key={mint?.name} border="dark">
              {mint?.image ? (
                <Card.Img
                  src={mint.image}
                  alt={mint.name}
                  variant="top"
                />
              ) : null}
              <Card.Body>
                <Card.Title>{mint?.name}</Card.Title>
                <p className="small">Price {mint?.price} SOL</p>
                <Card.Text>{mint?.description}</Card.Text>
                <Card.Subtitle>
                  <Moment fromNow>{mint?.launchDatetime}</Moment>
                </Card.Subtitle>
                {Auth.loggedIn() && (
                  <Button
                    // disabled={saveMint?.some(
                    //   (saveMintUnit) => saveMintUnit.name === mint.name
                    // )}
                    className="btn-block btn-info"
                    onClick={() => handleSaveMint(mint.name)}
                  >
                    {saveMint?.some((saveMintUnit) => saveMintUnit.name === mint.name)
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
