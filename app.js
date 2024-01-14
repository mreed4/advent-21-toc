import { sections } from "./data.js";

const asideUL = document.querySelector("aside ul");
const meat = document.querySelector(".meat-of-article");

// First add the sections, then build the ToC, then add observers

(function addSections() {
  sections.forEach((section) => {
    const sectionWrapper = document.createElement("section");
    const heading = document.createElement("h3");
    const content = document.createElement("div");

    heading.innerText = section.heading;
    content.innerHTML = section.content;

    sectionWrapper.appendChild(heading);
    sectionWrapper.appendChild(content);

    meat.appendChild(sectionWrapper);
  });
})();

// headings can't be declared until after the addSections function is called

const headings = document.querySelectorAll("h3");

(function buildToC() {
  [...headings].forEach((heading) => {
    addIdToHeading(heading);
    buildListItem(heading);
    asideUL.appendChild(buildListItem(heading));
  });
})();

// tocListItems can't be declared until after the buildToC function is called

const tocListItems = asideUL.querySelectorAll("li");

(function addObservers() {
  const options = {
    rootMargin: "-15% 0px -15%",
    threshold: 1,
  };

  const observer = new IntersectionObserver(observeHeadings, options);

  headings.forEach((heading) => {
    observer.observe(heading);
  });
})();

// Smooth scroll to heading when clicking on ToC item -- eh, why not?

(function addSoothScroll() {
  [...tocListItems].forEach((anchor) => {
    anchor.addEventListener("click", (event) => {
      event.preventDefault();
      const heading = document.querySelector(event.target.hash);
      heading.scrollIntoView({ behavior: "smooth" });
    });
  });
})();

// Functions below are used in the IIFEs above

function observeHeadings(items) {
  /* */
  // https:www.freecodecamp.org/news/how-to-make-a-dynamic-table-of-contents-in-javascript/
  /* */
  items.forEach((item) => {
    if (item.isIntersecting) {
      const index = [...headings].indexOf(item.target);
      tocListItems.forEach((anchor) => {
        anchor.classList.remove("selected");
      });
      tocListItems[index].classList.add("selected");
      tocListItems[index].scrollIntoView({ behavior: "smooth", block: "nearest" });
    }
  });
}

function addIdToHeading(heading) {
  /* */
  const allNonLetters = /[^a-zA-Z]/g;
  const punctuation = /[,.;:]/g;

  // Slugify the heading text
  const headingId = heading.innerText.toLowerCase().replace(punctuation, "").replace(allNonLetters, "-");
  heading.id = headingId;

  // Returned id is used in the buildListItem function
  return headingId;
}

function buildListItem(heading) {
  /* */
  const listItem = document.createElement("li");
  const anchor = document.createElement("a");

  anchor.href = `#${addIdToHeading(heading)}`;
  anchor.innerText = heading.innerText;

  listItem.appendChild(anchor);

  // Returned item is used in the buildToC function
  return listItem;
}
