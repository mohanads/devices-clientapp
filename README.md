# Demo
Click <a href="https://tender-mccarthy-a260d4.netlify.app" target="_blank">Here</a> for a demo without having to install.

# Installation
Paste the following in your command line:

	git clone https://github.com/mohanad-sheikha/devices-clientapp.git
	cd devices-clientapp
	npm i
	npm run start

Afterwards, click <a href="http://localhost:8080" target="_blank">Here</a> to view the App in your browser.

# Looking Forward
Things I would adjust with more time:
1. ### Rapid Click Prevention  
	Handling rapid clicking on actions such as “Add” in the “Add Device”. Currently, if you’re fast enough, you can probably double click “Add” to add the same product twice.
2. ### Error Handling
	I would add more error handling across the whole app. Especially during loading and action submission.   
    For example, error handling when a user “Adds” a Device. Currently, the modal is immediately closed and we attempt to add the product without any checks (except for standard HTML “required” attributes and such).
3. ### Remove Duplicate Code
	Extract duplicate code into components/functions. I duplicated some code to save some time.  
    Example: Sort and Filter components.
4. ### Dynamic Dropdowns
	No hard-coding dropdown options. Anything that should be dynamic, I would make dynamic.
5. ### z-index Handling
	Handling z-index elegantly. If this were a big app, I would make a script to generate z-index based on a “component hierarchy”. This is to prevent a modal/dialog from accidentally being masked by something that should have been “beneath” it.
6. ### Pretty Errors
	Error messages for input validation. For example, if the modal form is invalid, I’d like to display something simple for the user.
7. ### Pretty Success Toasts
	Success toasts for actions, such as the “Add” action.
8. ### Virtual Windows/Scrolling
	Virtualize large lists to improve performance as the app grows.
9. ### Lazy-Loading/Infinite-Loading
	Instead of loading ALL devices at once, I would render a fixed amount, and keep loading more when the user scrolls to the bottom.
10. ### Refine Animations
	Some animations need refinement.
	For example, when you apply a filter that filters all Devices and there is nothing left to display, the "No devices available." message gets jerked.