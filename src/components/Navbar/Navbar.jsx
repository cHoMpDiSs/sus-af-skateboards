import React from 'react';
import {
Nav,
NavLink,
Bars,
NavMenu,
NavBtn,
NavBtnLink,
} from './NavbarElements';

const Navbar = () => {
return (
	
	<Nav>
		<Bars />

		<NavMenu>
		<NavLink to='/skateboards' activeStyle>
			Skateboards
		</NavLink>
		<NavLink to='/pants' activeStyle>
			Pants
		</NavLink>
		<NavLink to='/shirts' activeStyle>
			Shirts
		</NavLink>
		{/* Second Nav */}
		{/* <NavBtnLink to='/sign-in'>Sign In</NavBtnLink> */}
		</NavMenu>
		<NavBtn>
		<NavBtnLink to='/cart'>Cart</NavBtnLink>
		</NavBtn>
	</Nav>
	
);
};

export default Navbar;
