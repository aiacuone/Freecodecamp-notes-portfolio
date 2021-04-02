import React from 'react'
import logo from '../images/freecodecampLogo.svg'

export default function Intro({ state, setState }) {
	return (
		<div class="intro">
			<img class="intro_logo" src={logo} />
			<p class="intro_paragraph">
				Welcome to my Freecodecamp Notes! <br />
				<br />
				The purpose of this app is not to wow you with creativity, but to give
				you an idea of the work that ive done to progress to where I am today.
				<br />
				<br />I have kept all my notes, feel free to explore and view how I
				approached certain problems by clicking Continue!
			</p>
			<p class="intro_continue" onClick={() => setState.setDirectory([])}>
				Continue
			</p>
		</div>
	)
}
