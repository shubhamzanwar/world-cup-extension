const populate = (groups) => {
  for(let i = 0; i < groups.length; i++){
    group = groups[i].group;
    const tbody = document.getElementById(group.letter);
    teams = group.teams;

    for(let j = 0; j < teams.length; j++){
      team = teams[j];
      let tr = document.createElement('TR');
      tr.classList.add('table-row');
      tbody.appendChild(tr);
      const country = team.team;
  
      //country
      let td = document.createElement('TD')
      td.appendChild(document.createTextNode(country.country));
      tr.appendChild(td);
  
      // games played
      td = document.createElement('TD')
      td.appendChild(document.createTextNode(country.games_played));
      tr.appendChild(td);
  
  
      //wins
      td = document.createElement('TD')
      td.appendChild(document.createTextNode(country.wins));
      tr.appendChild(td);
  
      //losses
      td = document.createElement('TD')
      td.appendChild(document.createTextNode(country.losses));
      tr.appendChild(td);
  
      //goal_differential
      td = document.createElement('TD')
      td.appendChild(document.createTextNode(country.goal_differential));
      tr.appendChild(td);
  
      //points
      td = document.createElement('TD')
      td.appendChild(document.createTextNode(country.points));
      tr.appendChild(td);
    }
  }
}

