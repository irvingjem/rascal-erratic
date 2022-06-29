export const getSavedBookIds = () => {
  const savedMintIds = localStorage.getItem("saved_books")
    ? JSON.parse(localStorage.getItem("saved_books"))
    : [];

  return savedMintIds;
};

export const saveMintIds = (bookIdArr) => {
  if (bookIdArr.length) {
    localStorage.setItem("saved_mint", JSON.stringify(bookIdArr));
  } else {
    localStorage.removeItem("saved_mint");
  }
};

export const removeBookId = (mintId) => {
  const savedMintIds = localStorage.getItem("saved_mint")
    ? JSON.parse(localStorage.getItem("saved_mint"))
    : null;

  if (!savedMintIds) {
    return false;
  }

  const updatedSavedMintIds = savedMintIds?.filter(
    (savedMintId) => savedMintId !== mintId
  );
  localStorage.setItem("saved_mint", JSON.stringify(updatedSavedMintIds));

  return true;
};
