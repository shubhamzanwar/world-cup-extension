const generateMatchRow = (match) => {
  const startTime = new Date(match.datetime);
  if(match.status !== 'future'){
    return `
            <tr class="match-row">
                <td class="home">${match.home_team.country}</td>
                <td class="home">${match.home_team.goals}</td>
                <td>:</td>
                <td class="away">${match.away_team.goals}</td>
                <td class="away">${match.away_team.country}</td>
                <td>${match.time}</td>
            </tr>
        `;
  }
  return `
    <tr class="match-row">
        <td class="home">${match.home_team.country}</td>
        <td class="home"></td>
        <td>:</td>
        <td class="away"></td>
        <td class="away">${match.away_team.country}</td>
        <td>At: ${pad(startTime.getHours()) + ':' + pad(startTime.getMinutes())}</td>
    </tr>
    `;
}