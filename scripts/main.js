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

const makeTodaysMatches = (todaysMatches) => {
  if(todaysMatches.length > 0){
    const matches = `
    <div class="matches-today">
      <h1 class="matches-today-heading">Matches today</h1>
      <table class="matches-table">
        ${(todaysMatches.map((match) => generateMatchRow(match)).join(''))}
      </table>
    </div>
    `;
    return matches;
  }
  return '';
}

Promise.all([
  fetchUrl(groupTable),
  fetchUrl(currentMatch),
  fetchUrl(todaysMatches)
])
  .then(([groupDetails, currentMatchDetails, todaysMatches]) => {
    const content = appHeader + makeCurrentMatch(currentMatchDetails) + populate(groupDetails) + makeTodaysMatches(todaysMatches);
    const app = document.getElementById('app');
    app.innerHTML = content;
  })