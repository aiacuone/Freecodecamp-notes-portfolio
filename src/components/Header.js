import React from 'react'
import headerLogo from '../images/freecodecampLogo.svg'

export default function Header() {
	return (
		<div class="header">
			<img class="header_logo" src={headerLogo} />
	
			{/* <div class="nav">
				<p class="nav_button back">BACK</p>
				<p class="nav_button home">HOME</p>
			</div> */}
		</div>
	)
}
