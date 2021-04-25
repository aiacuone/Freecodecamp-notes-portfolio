import React from 'react'
import logo from '../images/freecodecampLogo.svg'

export default function Intro({ state, setState }) {
	return (
		<div class="intro">
			<img class="intro_logo" src={logo} />
			<p class="intro_paragraph">
				Welcome to my Freecodecamp Online Course Notes. <br />
				<br />Feel free to explore and view how I
				approached certain problems by clicking Continue!
			</p>
			<p class="intro_continue" onClick={() => setState.setDirectory([])}>
				Continue
			</p>
		</div>
	)
}
