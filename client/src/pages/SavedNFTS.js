import React from "react";
import {
  Jumbotron,
  Container,
  CardColumns,
  Card,
  Button,
} from "react-bootstrap";
import Auth from "../utils/auth";
import { useMutation, useQuery } from "@apollo/client";
import { GET_ME } from "../utils/queries";
// import { GET_ME } from "../utils/queries";
import { REMOVE_MINT } from "../utils/mutations";
import { removeMintName } from "../utils/localStorage";

const SavedNFTS = () => {
  const { loading, data } = useQuery(GET_ME);
  const userData = data?.me || [];
  console.log(data);
  const [deleteMint, { error }] = useMutation(REMOVE_MINT);


  const handleDeleteMint = async (name) => {
    const token = Auth.loggedIn() ? Auth.getToken() : null;


    if (!token) {
      return false;
    }

    try {
      const { data } = await deleteMint({
        variables: { mintData: "something" },
      });

      removeMintName(name);
    } catch (err) {
      console.error(err);
    }
  };

  if (loading) {
    return <h2>LOADING...</h2>;
  }
  return (
    <>
      <Jumbotron fluid className="text-light text-center homebutton">
        <Container>
          <h1>Viewing saved NFTS!</h1>
        </Container>
      </Jumbotron>
      <Container>
        <h2>
          {userData.savedMint.length
          ?`Viewing ${userData.savedMint.length} saved ${userData.savedMint.length === 1 ? 'Mint' : "Mints"}:`
          : 'You have no saved books!'}
        </h2>
        <CardColumns>
        {userData.savedMint.map((mint) => {
          return (
          <Card key={mint.name} border='dark'>
            {mint.image ? <Card.Img src={mint.image} alt={`The NFT image for ${mint.name}`} variant='top'  /> : null }
            <Card.Body>
              <Card.Title>{mint.name}</Card.Title>
              <Card.Text>{mint.description}</Card.Text>
              <Button className='btn-block btn-danger' onClick={() => handleDeleteMint(mint.name)}>Delete this NFT!</Button>
            </Card.Body>
          </Card>
          );
        })}
        </CardColumns>
      </Container>
    </>
  );
};

export default SavedNFTS;
