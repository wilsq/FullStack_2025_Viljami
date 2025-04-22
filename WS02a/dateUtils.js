function currentDate() {
  return new Date();
}

function formatDate() {
  const date = new Date();
  return date.toLocaleDateString("fi-FI");
}

module.exports = { currentDate, formatDate };
