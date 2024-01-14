export const sections = [
  {
    // My Story
    heading: "My Story",
    content: `<p>
    Before Framer, we were using <a href="http://invision.com" target="_blank">Invision</a> for prototyping. At best, this experience
    felt clunky. I was taking static images, creating hot spots, and linking them together. If anything, it demonstrated how screens
    were linked together. But, during pitches, there was still a considerable amount of hand waving and, “Imagine this. The user will
    scroll down, and this will happen…”
  </p>
  <p>
    While this worked for some clients, others still had trouble making that leap, however big or small. There was even a fair amount
    of redesigning once developers got involved. “Oh, I didn't realize that's what you meant.”
  </p>`,
  },
  {
    // Priming
    heading: "Priming",
    content: `<div class="image-text-wrapper">
    <div class="image-text-wrapper__image">
      <img src="./images/design-details.jpeg" alt="Design Details" />
    </div>
    <div class="image-text-wrapper__content">
      <p>
        In November (2020), I started working with a new client, designing a native application. About the same time, I was listening
        to the
        <a href="https://designdetails.fm/episodes/h5VhO2W3" target="_blank"
          >Design Details Podcast, Episode 377: Future-Proof Designer</a
        >. One of the skills they talked about was prototyping.
        <strong>The best designers at prototyping are the best communicators.</strong>
      </p>
    </div>
  </div>
  <blockquote>The best designers at prototyping are the best communicators.</blockquote>
  <p>Noted.</p>
  <p>
    At that moment, I knew that the most effective way to get stakeholders on board was to create a prototype true to the app's
    experience.
  </p>
  <p>That's the key: <strong>an app is an experience.</strong></p>
  <p>
    When you're designing a native application, you're pushing pixels on a laptop or a desktop. The point is: it's a different medium;
    it's a different device than how the end-user will experience the final product.
  </p>
  <p>
    I wanted to create a prototype that felt real. They could pull it up on their mobile device and feel like they were using an
    application — no smoke and mirrors. No handwaving. No magic.
  </p>`,
  },
  {
    // Enter Framer
    heading: "Enter Framer",
    content: `<p>
    I've known about Framer for years but never explored it as an option. This project seemed like the perfect opportunity and the
    perfect fit.
  </p>
  <p>I've been blown away.</p>`,
  },
  {
    // For the no-coders. Framer is for you.
    heading: "For the no-coders. Framer is for you.",
    content: `<p>You can import your designs directly from Figma or Sketch or design directly within Framer.</p>
    <p>It has plenty of built-in, interactive components that you can use to build a prototype without writing a line of code.</p>
    <div class="image">
      <img src="./images/framer-insert-menu.png" alt="Framer Insert Menu" />
      <caption>
        Insert Menu within Framer
      </caption>
    </div>
    <p>There’s an entire library of third-party components, at your disposal.</p>
    <div class="image">
      <img src="./images/framer-community-plugins.gif" alt="Framer Community Plugins" />
      <caption>
        Framer Community Plugins
      </caption>
    </div>
    <p>
      With the release of
      <a href="https://www.framer.com/blog/posts/5-interactive-components-with-variants/" target="_blank">Variants</a> and
      <a href="https://www.framer.com/blog/posts/announcing-smart-components/" target="_blank">Smart Components</a>, the sky’s the
      limit.
    </p>
    <div class="image">
      <img src="./images/framer-smart-components.gif" alt="Framer Smart Components" />
    </div>`,
  },
  {
    // For the code-savvy. Framer is for you.
    heading: "For the code-savvy. Framer is for you.",
    content: `<p>In Framer, you can code custom React components(!!) and use them alongside designed components. This is mind-blowing to me.</p>
    <blockquote>I can play with interactions while building something real.</blockquote>
    <p>The sky truly is the limit.</p>`,
  },
  {
    // My Sweet Spot: How Our Team is Using Framer
    heading: "My Sweet Spot: How Our Team is Using Framer",
    content: `<p>
      I recognize that my skill set is different. I design and write code. Not all designers code, and not all developers design — and
      that’s perfectly fine. I’ve found Framer blends both worlds in a way that I’ve never seen in an application.
    </p>`,
  },
  {
    // Figma
    heading: "Figma",
    content: `<p>
    I’ve done all the initial design work within Figma. I have more experience there, and it’s allowed me to create multiple drafts
    and experiment in design without muddying my prototype in Framer.
  </p>
  <div class="image-text-wrapper">
    <div class="image-text-wrapper__image">
      <img src="./images/figma-sidebar.png" alt="Figma Sidebar" />
    </div>
    <div class="image-text-wrapper__content">
      <p>
        Once the design is cleaned up, I have a page in Figma that I use specifically for a hand-off. This keeps unwanted elements
        out of Framer
      </p>
    </div>
  </div>`,
  },
  {
    // Framer Desktop
    heading: "Framer Desktop",
    content: `<p>You can do everything within the browser, through Framer Web. In fact, Framer Web has more features than Framer Desktop.</p>
    <p>
      However, with Framer Desktop, I can directly access the code folder. Meaning, I can write custom ****React components within
      <strong>VS Code</strong>, my choice IDE.
    </p>
    <p>
      I also have access to the <strong>package.json</strong> file to install npm packages, like any other project. This only extends
      my toolset, giving me access to packages like <a href="https://styled-components.com/" target="_blank">Styled Components</a> and
      <a href="https://date-fns.org/" target="_blank">date-fns</a>.
    </p>
    <p>
      All code is committed to <strong>version control</strong>, either <a href="http://github.com/" target="_blank">GitHub</a> or
      <a href="https://bitbucket.org/" target="_blank">BitBucket</a>. This creates a better workflow for me, but also gives easy
      access to the engineers on the project.
    </p>
    <h4>JSON Data Files</h4>
    <p>I’ve created JSON files that outline the data. The state of the app and its design change based on the data passed in.</p>
    <p>
      What does it look like to have 1 notification vs. 12? What happens when the user has overdue payments? What does the app look
      like when the user is in Phase 1 vs. Phase 3 of the program? Instead of creating prototypes for each use case, I update the data
      passed in.
    </p>
    <p>
      We can always change the shape of the data in my JSON file, but it does have the potential to mirror a potential GraphQL query.
    </p>
    <h4>Sharing the Project</h4>
    <p>
      Once I have a working prototype, I’ll upload the project to <strong>Framer Web</strong>. This makes it easy to generate share
      links. Even better, if someone has the <a href="#" target="_blank">Framer Preview App</a> on their mobile device, I can generate
      a QR Code that allows them to interact with the prototype on their phone, just like the final native app.
    </p>
    <div class="image">
      <img src="./images/framer-qr-code.png" alt="Framer QR Code" />
      <caption>
        Generating a QR Code for Framer Preview App
      </caption>
    </div>`,
  },
  {
    // Tight Developer Schedule
    heading: "Tight Developer Schedule",
    content: `<p>
    As with most projects, this one has a tight developer schedule. One of the biggest perks that we’ve found is that Framer has
    gotten us to the end result faster. I’m able to hand over the React components I’ve created with minimal refactoring.
  </p>
  <p>
    While this process might sound more like <em>building</em> instead of <em>experimenting</em>, I didn’t list in detail all the
    “play” that is woven throughout the entire process.
  </p>
  <p>Framer is very much alive and well.</p>`,
  },
];
