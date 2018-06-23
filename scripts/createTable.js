const createTeamRow = (team) => {
  const teamName = team.country;
  const gamesPlayed = team.games_played;
  const wins = team.wins;
  const losses = team.losses;
  const GD = team.goal_differential;
  const points = team.points;

  const row = `
  <tr class="table-row">
      <td>${teamName}</td>
      <td>${gamesPlayed}</td>
      <td>${wins}</td>
      <td>${losses}</td>
      <td>${GD}</td>
      <td>${points}</td>
  </tr>
`
  return row;
}

const createTable = (group) => {
  const groupName = group.letter;
  const teams = group.teams;
  return `
    <div class="group-container">
        <h3>Group: ${groupName}</h3>
        <table class="group-table" CELLSPACING=0>
            ${groupTableHeader()}
            <tbody>
                ${(teams.map((team) => createTeamRow(team.team))).join('')}
            </tbody>
        </table>
    </div>
  `
}