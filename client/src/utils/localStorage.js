// export const getSavedMintIds = () => {
//   const savedMintIds = localStorage.getItem("saved_mint")
//     ? JSON.parse(localStorage.getItem("saved_mint"))
//     : [];

//   return savedMintIds;
// };

// export const saveMintIds = (mintIdArr) => {
//   if (mintIdArr.length) {
//     localStorage.setItem("saved_mint", JSON.stringify(mintIdArr));
//   } else {
//     localStorage.removeItem("saved_mint");
//   }
// };

// export const removeMintId = (mintId) => {
//   const savedMintIds = localStorage.getItem("saved_mint")
//     ? JSON.parse(localStorage.getItem("saved_mint"))
//     : null;

//   if (!savedMintIds) {
//     return false;
//   }

//   const updatedSavedMintIds = savedMintIds?.filter(
//     (savedMintId) => savedMintId !== mintId
//   );
//   localStorage.setItem("saved_mint", JSON.stringify(updatedSavedMintIds));

//   return true;
// };
