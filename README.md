Here we had to build a dynamic table of contents--i.e. when a heading appears on the page, a list item corresponding to the header is highlighted. As you scroll, and as a new header enters the bounds of a defined box, the next list item is highlighted accordingly.

This works with the `IntersectionObserver` API. Which was new to me (though I have seen the user-facing functionality before).

In this instance, rather than smashing my head against a wall, I Googled an indirect solution and found one on FreeCodeCamp. I made the code found in the FCC article work with the code in the challenge.

I further improved the challenge by moving the relevant parts of the code to a data structure. A series of IIFEs then render the page, and enable the required functionality.
