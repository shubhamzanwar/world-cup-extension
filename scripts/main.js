
const makeKnocks = (knocks) => {
  const roundOf16 = knocks.slice(0, 8);
  const quarts = knocks.slice(8, 12);
  const semis = knocks.slice(12, 14);
  const thirdPlace = [knocks[14]];
  const finals = [knocks[15]];
  return `
    <div class="knocks-container">
      <h2 class="knock-heading odd">Round of 16</h2>
      ${(roundOf16.map(makeKnocksRow)).join('')}
      <h2 class="knock-heading even">Quarter Finals</h2>
      ${(quarts.map(makeKnocksRow)).join('')}
      <h2 class="knock-heading odd">Semi finals</h2>
      ${(semis.map(makeKnocksRow)).join('')}
      <h2 class="knock-heading even">Third place</h2>
      ${(thirdPlace.map(makeKnocksRow)).join('')}
      <h2 class="knock-heading odd">Finals</h2>
      ${(finals.map(makeKnocksRow)).join('')}
    </div>
  `
}

const populate = (groups, matches) => {
  const first4 = groups.slice(0, 4)
  const last4 = groups.slice(4)

  let row1Content = '';
  let row2Content = '';

  for(let i = 0; i < first4.length; i++){
    row1Content += createTable(first4[i]);
    row2Content += createTable(last4[i]);
  }
  
  return `
    <div class="results-container">
    ${matches ? makeKnocks(matches.slice(0, 16).reverse()) : ''}
      <div class="table-container">
        ${row1Content}
        ${row2Content}
      </div>
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
  fetchUrl(allMatches),
  fetchUrl(todaysMatches)
])
  .then(([groupDetails, currentMatchDetails, allMatches, todaysMatches]) => {
    const content = appHeader + makeCurrentMatch(currentMatchDetails) + populate(groupDetails, allMatches) + makeTodaysMatches(todaysMatches);
    const app = document.getElementById('app');
    app.innerHTML = content;
  })