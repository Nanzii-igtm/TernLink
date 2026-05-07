# TernLink

#### By Nanu Kagezi

## Description
TernLink is a web application that lets creatives and clients post, view, and manage freelance gigs. Users fill in gig details like title, description, location, and budget. The app then displays the gig on the page instantly without reloading.

All data is saved in the browser using localStorage, so gigs stay there even after refreshing. This project uses HTML, CSS, and JavaScript to implement form validation and DOM manipulation.

## Setup/Installation Requirements
* Clone this repository to your desktop: https://github.com/Nanzii-igtm/TernLink
* Navigate to the top of the directory: cd ternlink
* Open index.html in your browser or use Live Server in VS Code
* No additional dependencies or servers required

## Live Site
View here: https://nanzii-igtm.github.io/TernLink/

## Bugs/errors
There are no bugs recorded in the system

## Behavior Driven Development (BDD)
| Behavior | Input Example | Output Example |
| --- | --- | --- |
| The user enters valid gig details and clicks Add Gig | Title: "Wedding Photographer", Location: "Nairobi", Budget: "KES 30,000" | Gig card appears on page with all details shown |
| The user submits the form with empty fields | Title: "", Budget: "" | Alert: "Please fill in all fields" |
| The user refreshes the page after adding gigs | Page reloads | Previously added gigs are still displayed from localStorage |
| The user clicks Clear All Gigs and confirms | Click OK on confirm popup | All gig cards removed from page and localStorage is cleared |
| The user clicks Clear All Gigs and cancels | Click Cancel on confirm popup | No gigs are deleted, page stays the same |

## Technologies Used
* *HTML* - Page structure and form elements
* *CSS* - Styling, layout, and responsive design
* *JavaScript* - Form validation, localStorage, DOM manipulation
* *Git* - Version control
* *GitHub Pages* - Deployment

## Support and Contact Details
If you run into any issues or have questions, ideas or concerns, please contact me at gezniwasu354@gmail.com

## License
MIT License

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files, to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.