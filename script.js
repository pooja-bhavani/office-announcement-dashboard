function addAnnouncement() {
  const title = document.getElementById('title').value;
  const startDate = document.getElementById('startDate').value;
  const endDate = document.getElementById('endDate').value;
  const status = document.getElementById('status').value;

  if (!title || !startDate || !status) {
    alert('Please fill in all required fields.');
    return;
  }

  const tableBody = document.getElementById('announcementBody');
  const newRow = document.createElement('tr');

  newRow.innerHTML = `
    <td><input type="checkbox" /></td>
    <td><a href="#">${title}</a></td>
    <td>${new Date(startDate).toLocaleString()}</td>
    <td>${endDate ? new Date(endDate).toLocaleString() : '-'}</td>
    <td>${status}</td>
  `;

  tableBody.appendChild(newRow);
  document.getElementById('alertBox').style.display = 'block';

  setTimeout(() => {
    document.getElementById('alertBox').style.display = 'none';
  }, 3000);

  // Clear fields
  document.getElementById('title').value = '';
  document.getElementById('startDate').value = '';
  document.getElementById('endDate').value = '';
  document.getElementById('status').value = 'Scheduled';
}
