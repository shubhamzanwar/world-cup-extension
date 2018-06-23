const populate = (groups) => {
  const first4 = groups.slice(0, 4)
  const last4 = groups.slice(4)

  let row1Content = '';
  let row2Content = '';

  for(let i = 0; i < first4.length; i++){
    const group = first4[i].group;
    row1Content += createTable(group);
  }
  for(let i = 0; i < last4.length; i++){
    const group = last4[i].group;
    row2Content += createTable(group);
  }
  return `
    <div class="table-container">
      ${row1Content}
    </div>
    <div class="table-container">
      ${row2Content}
    </div>
  `
}

const makeCurrentMatch = (currentMatchDetails) => {
  if (currentMatchDetails.length > 0) {
    const currentMatch = currentMatchDetails[0];
    const matchContent = `
      <div id="current" class="current-match">
        ${createCurrentMatch(currentMatch)}
      </div>
    `;
    return matchContent;
  }
  return '';
}

Promise.all([
  fetchUrl(groupTable),
  fetchUrl(currentMatch)
])
  .then(([groupDetails, currentMatchDetails]) => {
    const content = appHeader + makeCurrentMatch(currentMatchDetails) + populate(groupDetails);
    const app = document.getElementById('app');
    app.innerHTML = content;
  })