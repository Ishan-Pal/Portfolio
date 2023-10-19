# Personal Portfolio

This is a personal portfolio website showcasing my projects, skills, and experiences. It is hosted on Netlify and can be accessed at [Portfolio Website](https://shivaay-portfolio.netlify.app/).

## Table of Contents

- [Files](#files)
- [License](#license)
- [Usage](#usage)
- [JavaScript Functions](#javascript-functions)
  - [index.js](#indexjs)
    - [scrollActive()](#scrollactive)
    - [scrollHeader()](#scrollheader)
    - [scrollTop()](#scrolltop)
    - [Dark/Light Theme](#darklight-theme)
  - [main.js](#mainjs)
    - [Menu Show and Hide](#menu-show-and-hide)
    - [Link Action](#link-action)
    - [Accordion Skills](#accordion-skills)
    - [Qualification Tabs](#qualification-tabs)
    - [Services Modal](#services-modal)
- [Contributing](#contributing)
- [Contact](#contact)

## Files

The project consists of the following files:

- `index.html`: The main HTML file that defines the structure and content of the website.
- `styles.css`: The CSS file that provides the styles and layout for the website.
- `main.js`: A JavaScript file containing the main functionality and logic for the website.
- `index.js`: A JavaScript file that handles specific functionality or interactions on the index page.

## License

This project is licensed under the Apache License, Version 2.0. The full text of the license can be found in the [LICENSE](LICENSE) file.

## Usage

To use or modify this portfolio website, follow these steps:

1. Clone the repository:

   ```
   git clone https://github.com/your-username/your-repo.git
   ```

2. Navigate to the project directory:

   ```
   cd your-repo
   ```

3. Open the files in your preferred text editor or IDE.

4. Make any desired changes to the HTML, CSS, or JavaScript files to customize the website according to your needs.

5. Preview the changes locally by opening `index.html` in a web browser.

6. Deploy the website to your preferred hosting platform. You can use services like Netlify, GitHub Pages, or any other hosting provider of your choice.

7. Update the necessary links and references within the website to reflect your deployed URL.

## JavaScript Functions

### index.js

#### scrollActive()

This function is responsible for adding the `active-link` class to the navigation menu links based on the currently active section in the viewport. It is triggered by the `scroll` event.

#### scrollHeader()

This function adds or removes the `scroll-header` class to the header element based on the scroll position. If the scroll position is greater than or equal to 80 pixels, it adds the class; otherwise, it removes the class. It is triggered by the `scroll` event.

#### scrollTop()

This function shows or hides the scroll-to-top button based on the scroll position. If the scroll position is higher than 560 pixels, it adds the `show-scroll` class to the scroll-to-top button element; otherwise, it removes the class. It is triggered by the `scroll` event.

#### Dark/Light Theme

This section of the code handles the dark/light theme functionality. It allows the user to toggle between dark and light themes by clicking on the theme button. The current theme and icon selected by the user are stored in the local storage to maintain the selected theme across page reloads.

### main.js

#### Menu Show and Hide

This section of the code

 handles the functionality to show and hide the navigation menu on small screens. It adds the `show-menu` class to the `navMenu` element when the `navToggle` element (hamburger icon) is clicked, and removes the class when the `navClose` element (close icon) is clicked.

#### Link Action

This function is responsible for removing the `show-menu` class from the navigation menu when a menu item is clicked. It is used as an event listener for each menu item in the `navLink` array.

#### Accordion Skills

This section of the code handles the functionality to toggle the visibility of skills content when a skills header is clicked. It adds the `skills__open` class to the parent container of the clicked header to expand the content, and removes the class from other skills content containers to collapse them.

#### Qualification Tabs

This section of the code handles the functionality to switch between different qualification tabs. When a tab is clicked, it adds the `qualification__active` class to the corresponding content container and the clicked tab, and removes the class from other content containers and tabs.

#### Services Modal

This section of the code handles the functionality to show and hide service modals. When a modal button is clicked, it adds the `active-modal` class to the corresponding modal view, and when a modal close button is clicked, it removes the class from all modal views to close them.

## Contributing

Contributions to this project are welcome. If you find any issues or have suggestions for improvements, please open an issue or submit a pull request.

## Contact

If you have any questions or need further assistance, feel free to contact me at [Shivansh Yadav](mailto:shivanshyadav50@gmail.com).

Thank you for visiting my personal portfolio!
