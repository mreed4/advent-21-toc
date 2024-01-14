const headings = document.querySelectorAll("h3");
const asideUL = document.querySelector("aside ul");

[...headings].forEach((heading) => {
  addIdToHeading(heading);
  buildListItem(heading);
  asideUL.appendChild(buildListItem(heading));
});

function addIdToHeading(heading) {
  const allNonLetters = /[^a-zA-Z]/g;
  const punctuation = /[,.;:]/g;
  const headingId = heading.innerText.toLowerCase().replace(punctuation, "").replace(allNonLetters, "-");
  heading.id = headingId;

  return headingId;
}

function buildListItem(heading) {
  const listItem = document.createElement("li");
  const anchor = document.createElement("a");
  anchor.href = `#${addIdToHeading(heading)}`;
  anchor.innerText = heading.innerText;
  listItem.appendChild(anchor);

  return listItem;
}
