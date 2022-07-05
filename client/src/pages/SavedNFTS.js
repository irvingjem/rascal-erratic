import React from "react";
// import { graphql } from "graphql";
import {
  Jumbotron,
  Container,
  CardColumns,
  Card,
  Button,
} from "react-bootstrap";
// import Auth from "../utils/auth";
// import { useMutation, useQuery } from "@apollo/client";
// import { GET_ME } from "../utils/queries";
// import { REMOVE_MINT } from "../utils/mutations";
// import { removeMintName } from "../utils/localStorage";

const SavedNFTS = () => {
  return (
    <>
      <Jumbotron fluid className="text-light text-center homebutton">
        <Container>
          <h1>Viewing saved NFTS!</h1>
        </Container>
      </Jumbotron>
      <Container>
      <h2></h2>
      <CardColumns>
              <Card>
                  <Card.Img
                  />
                <Card.Body>
                <Card.Title></Card.Title>
                  <Card.Text></Card.Text>
                  <Button>
                    Delete this NFT!
                  </Button>
                </Card.Body>
              </Card>
        </CardColumns>
      </Container>
    </>
  );
};

// const SavedNFTS = () => {
//   const { loading, data } = useQuery(GET_ME);
//   const userData = data?.me || [];
//   const [deleteMint, {error}] = useMutation(REMOVE_MINT);

//   const handleDeleteMint = async (mintName) => {
//     const token = Auth.loggedIn() ? Auth.getToken() : null;

//     if (!token) {
//       return false;
//     }

//     try {
//       const { data } = await deleteMint({ variables: { mintName } });

//       removeMintName(mintName);
//     } catch (err) {
//       console.error(err);
//     }
//   };

//   if (loading) {
//     return <h2>LOADING...</h2>;
//   }

//   return (
//     <>
//       <Jumbotron fluid className="text-light bg-dark">
//         <Container>
//           <h1>Viewing saved NFTS!</h1>
//         </Container>
//       </Jumbotron>
//       <Container>
//         <h2>
//           {userData.savedMint.length
//             ? `Viewing ${userData.savedMint.length} saved ${
//                 userData.savedMint.length === 1 ? "NFT" : "NTF's"
//               }:`
//             : "You have no saved NFT's!"}
//         </h2>
//         <CardColumns>
//           {userData.savedMint.map((mint) => {
//             return (
//               <Card key={mint.mintName} border="dark">
//                 {mint.image ? (
//                   <Card.Img
//                     src={mint.image}
//                     alt={`The cover for ${mint.name}`}
//                     variant="top"
//                   />
//                 ) : null}
//                 <Card.Body>
//                   <Card.Title>{mint.title}</Card.Title>
//                   <p className="small">Description: {mint.description}</p>
//                   <Card.Text>{mint.description}</Card.Text>
//                   <Button
//                     className="btn-block btn-danger"
//                     onClick={() => handleDeleteMint(mint.mintName)}
//                   >
//                     Delete this NFT!
//                   </Button>
//                 </Card.Body>
//               </Card>
//             );
//           })}
//         </CardColumns>
//       </Container>
//     </>
//   );
// }

export default SavedNFTS;
