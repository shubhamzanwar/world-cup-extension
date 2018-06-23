const createCurrentMatchTeam = (teamDetails) => {
  return `
        <div id="${teamDetails.dest}-team" class="team">
            <div class="team-details">
                <h1>${teamDetails.country}</h1>
                <h2>${teamDetails.code}</h2>
            </div>
            <div class="score">
                <h2>${teamDetails.goals}</h2>
            </div>
        </div>
    `;
}

const createCurrentMatch = (currentMatch) => {
    return `
        ${createCurrentMatchTeam({ ...currentMatch.home_team, dest: 'home' })}
        <div class="dash"></div>
        ${createCurrentMatchTeam({ ...currentMatch.away_team, dest: 'away' })}
    `;
}
