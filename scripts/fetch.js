
fetch(groupTable)
  .then((response) => response.json())
  .then(populate);