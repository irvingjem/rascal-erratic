import React, { useState, useEffect } from "react";
import Moment from "react-moment";
import { Container, Button, Card, CardColumns } from "react-bootstrap";
import { useMutation } from "@apollo/client";
import Auth from "../utils/auth";
import { SAVE_MINT } from "../utils/mutations";
// Function to pull Api data and display on page load
function SearchNFTS() {
  const [fetchedMints, setFetchedMints] = useState([]);
  // API call
  const [savedMint, { error }] = useMutation(SAVE_MINT);

  useEffect(() => {
    const fetchMints = async () => {
      const result = await fetch(
        `https://api-mainnet.magiceden.dev/v2/launchpad/collections?offset=0&limit=200`
      );
      // Returns list of 200 NFTs as JSON
      const data = await result.json();
      // console.log(data);
      // Function to check current month against NFT's drop date month
      const thisMonthsNfts = [];
      const startDate = new Date();
      const currentMonth = startDate.getMonth() + 1;
      data.forEach((Nft) => {
        let launchDate = Nft.launchDatetime.split("-")[1];
        if (parseInt(launchDate) === currentMonth) {
          thisMonthsNfts.push(Nft);
        } else {
        }
      });
      setFetchedMints(thisMonthsNfts);
    };
    fetchMints();
  }, []);
  // Save NFT button function
  const handleSaveMint = async (name) => {
    const mintToSave = fetchedMints.find((data) => data.name === name);
    // console.log("hello from handle save mint", mintToSave);
    //  token for login
    const token = Auth.loggedIn() ? Auth.getToken() : null;

    if (!token) {
      return false;
    }

    try {
      // console.log("hello from handle save try");
      const { data } = await savedMint({
        variables: { mintData: mintToSave },
      });

      // console.log(data);
      // if (!response.ok) {
      //   throw new Error('something went wrong!');
      // }

      // if book successfully saves to user's account, save book id to state
      // setFetchedMints([...saveMint, mintToSave.name]);
    } catch (err) {
      // console.error(err);
    }
  }; // Use effect array
  // Rendering component
  // console.log(fetchedMints);
  return (
    <>
      <Container>
        <CardColumns>
          {fetchedMints.map((mint) => (
            <Card key={mint.name} border="dark">
              {mint?.image ? (
                <Card.Img src={mint.image} alt={mint.name} variant="top" />
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
                    {fetchedMints?.some(
                      (saveMintUnit) => saveMintUnit.name === mint.name
                    )
                      ? "Save this NFT!"
                      : "This NFT has already been saved!"}
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
