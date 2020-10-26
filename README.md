# Test Project for DWP

![](https://img.shields.io/github/license/legendarydrew/dwp-test)
![](https://img.shields.io/github/downloads/legendarydrew/dwp-test/total)
![](https://img.shields.io/github/repo-size/legendarydrew/dwp-test)

This was a project created as part of an application test for a role with the Department of Work and Pensions (**DWP**).

The parameters were as follows:

	We would like you to build a webpage with a form, which asks for Name, E-mail, DOB and Phone number.

	When the form is submitted, display the data below the form on the same page.

	Each new submission should be appended to the existing data and it should be possible to remove it. 

	Rules:

	1. Use vanilla JavaScript (ES6+) or TypeScript
	2. Write test coverage
	3. Write your own CSS and HTML
	4. Think about accessibility, progressive enhancement, standards, performance, compatibility, multiple devices and platforms, validation, security considerations, error handling, extensibility, testing
	5. Make sure it works in the browsers listed on this page: https://www.gov.uk/service-manual/technology/designing-for-different-browsers-and-devices
	
The original version of this test was created in less than 24 hours, and was submitted on the 6th October 2020.

Unfortunately it was rejected, and in return received some scathing and rather unhelpful feedback.

Comments and thoughts about professionalism aside: eventually I decided to turn things around by making this test public. Not only so others can learn from my mistakes, but that I can as well.

I'm going to be making some improvements to the code in the near future, to demonstrate that I'm not as bad at my job as some might think.

## Installation

Extract the contents of this project into a folder, and within this folder:

```bash
npm install
```

Build the scripts and stylesheet:

```bash
webpack
```

Open `dist/index.html` in your browser to view the project.

## Testing

```bash
npm test
```

## License
I'm releasing my code under the [MIT](https://choosealicense.com/licenses/mit/) licence. Play around with it, and show me how you'd approach this task.

created in 2020 by Drew Maughan (Perfect Zero Labs ltd.)
