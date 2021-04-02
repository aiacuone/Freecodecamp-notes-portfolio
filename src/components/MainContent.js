import React from 'react'
import Header from './Header'

export default function MainContent({ state, setState, projects }) {
	let topics = Object.keys(projects).map((item) => {
		return (
			<div
				class="topic"
				onClick={() => {
					setState.setDirectory([item])
				}}>
				{item}
			</div>
		)
	})

	function subTopics() {
		return Object.keys(projects[state.directory[0]].subTopics).map((item) => {
			return (
				<a
					target="_blank"
					href={projects[state.directory[0]].subTopics[item]}
					class="sub_topic">
					{item}
				</a>
			)
		})
	}

	let certificate
	if (state.directory[0] && projects[state.directory[0]].certificate) {
		certificate = projects[state.directory[0]].certificate
	}
	return (
		<div class="main_content">
			{/* <Header /> */}
			<div class="topics">{topics}</div>
			<div class="sub_topics">
				
				{state.directory[0] &&  subTopics() }
			{certificate && (
				<a class='topic_certificate' target="_blank" href={certificate}>
					CERTIFICATE
				</a>
					)}
					
				</div>
		</div>
	)
}
