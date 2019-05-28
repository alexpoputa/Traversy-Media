const search = document.getElementById("search");
const matchList = document.getElementById("match-list");

// Search states.json and filter it
const searchStates = async searchText => {
  const res = await fetch("../data/states.json");
  const states = await res.json();

  // Get matches to current text input
  let matches = states.filter(state => {
    // match characters from search text with the response
    const regex = new RegExp(`^${searchText}`, "gi");
    return state.name.match(regex) || state.abbr.match(regex);
  });

  if (searchText.length === 0) {
    matches = [];
    matchList.innerHTML = "";
  }

  outputHtml(matches);
};
const outputHtml = matches => {
  if (matches.length > 0) {
    const html = matches
      .map(
        match => `
            <div>
                <h4>${match.name} (${match.abbr})</h4>
                <small>lat: ${match.lag} / long:${match.long}</small>
            </div>
        `
      )
      .join("");

    matchList.innerHTML = html;
  }
};

search.addEventListener("input", () => searchStates(search.value));
