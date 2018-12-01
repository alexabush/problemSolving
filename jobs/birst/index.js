function appendRow() {
  var table = document.getElementById('tbl');
  var tableLength = table.getElementsByTagName('tr').length;
  var numCells = table.getElementsByTagName('tr')[tableLength - 1];
  var row = table.insertRow(tableLength - 1);
  for (let i = 0; i < numCells; i++) {
    row.insertCell(i);
  }
}

// Example case.
document.body.innerHTML = `
<table id="tbl" border="1">
  <tbody>
    <tr>
      <td></td>
      <td></td>
    </tr>
  </tbody>
</table>`;

appendRow();

console.log(document.body.innerHTML);
