const makeKnocksRow = (knock) => {
  const time = new Date(knock.datetime);
  return `
        <div class="knock">
            <h3>(${knock.home_team.code}) ${knock.home_team.country} : ${knock.away_team.country} (${knock.away_team.code})</h3>
            <h3>Venue: ${knock.location}, ${knock.venue}</h3>
            <h3>(${dayHash[time.getDay()]}) ${time.getDate()}/${time.getMonth()+1}/${time.getFullYear()} at ${pad(time.getHours())}:${pad(time.getMinutes())}</h3>
        </div>
    `
}