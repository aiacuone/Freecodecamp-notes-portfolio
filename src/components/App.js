import React, { useState } from 'react'
import '../styles/App.css'

import Intro from './Intro'
import Header from './Header'
import Footer from './Footer'
import MainContent from './MainContent'

function App() {
	let [directory, setDirectory] = useState(null)
	let state = { directory }
	let setState = { setDirectory }

	let projects = {
		'Responsive Web Design Certification': {
			subTopics: {
				// 'Basic HTML and HTML5': '',
				'Basic CSS': 'https://basic-css-html-freecodecamp.netlify.app/',
				'Applied Visual Design':
					'https://applied-visual-design-html-freecodecamp.netlify.app/',
				'Applied Accessibility':
					'https://applied-accessibility-html-freecodecamp.netlify.app/',
				'Responsive Web Design Principles':
					'https://responsive-web-design-principles-freecodecamp.netlify.app/',
				'CSS Flexbox': 'https://css-flexbox-freecodecamp.netlify.app/',
				'CSS Grid':
					'https://cssgrid-responsive-web-design-freecodecamp.netlify.app/',
				// 'Responsive Web Design Projects': '',}
			},
		},
		'Javascript Algorithms and Data Structures': {
			certificate: 'https://ibb.co/vVpgJz9',
			subTopics: {
				'Basic Javascript':
					'https://basics-javascript-freecodecamp.netlify.app/',
				ES6: 'https://learning-es6-javascript-freecodecamp.netlify.app/',
				'Regular Expressions':
					'https://regex-javascript-freecodecamp.netlify.app/',
				Debugging: 'https://debugging-javascript-freecodecamp.netlify.app/',
				'Basic Data Structures':
					'https://basic-data-structures-javascript-freecodecamp.netlify.app/',
				'Basic Algorithm Scripting':
					'https://basic-algorithm-scripting-javascript-freecodecamp.netlify.app/',
				'Object Orientated Programming':
					'https://object-orientated-programming-javascript.netlify.app/',
				'Function Programming':
					'https://functional-programming-javascript-freecodecamp.netlify.app/',
				'Intermediate Algorithm Scripting':
					'https://intermediate-algorithm-scripting-javascript-freecodecamp.netlify.app/',
				'Javascript Algorithms and Data Structures Projects':
					'https://javascript-algorithms-and-data-structures-projects-freecodecamp.netlify.app/',
			},
		},
		'Front End Development Libraries': {
			subTopics: {
				jQuery: 'https://jquery-front-end-development.netlify.app/',
				SASS: 'https://sass-front-end-development.netlify.app/',
				React: 'https://react-frontend-frameworks-freecodecamp.netlify.app/',
				Redux: 'https://redux-frontend-frameworks-freecodecamp.netlify.app/',
			},
		},
	}

	return (
		<div class="app">
			{directory !== null && <Header state={state} setState={setState} projects={projects}/>}
			<div class="main_section">
				{directory == null && (
					<Intro state={state} setState={setState} projects={projects} />
				)}
				{directory !== null && (
					<MainContent state={state} setState={setState} projects={projects} />
				)}
			</div>
			<Footer state={state} setState={setState} />
		</div>
	)
}

export default App
