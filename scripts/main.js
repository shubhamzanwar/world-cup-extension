const populate = (groups) => {
  const first4 = groups.slice(0, 4)
  const last4 = groups.slice(4)
  const row1 = document.getElementById('row1');
  const row2 = document.getElementById('row2');

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

  row1.innerHTML = row1Content;
  row2.innerHTML = row2Content;
}

