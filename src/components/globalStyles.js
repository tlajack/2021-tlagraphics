import { createGlobalStyle } from "styled-components";

import "@fontsource/open-sans";
import "@fontsource/montserrat/600.css";

const GlobalStyles = createGlobalStyle`
	:root{
		--primary:#00a19b;
		--primary-light:#56d3cc;
		--primary-dark:#00726d;
		--secondary:#ffeb3b;
		--secondary-light:#ffff72;
		--secondary-dark:#c8b900;
		--red: #ff3535;
		--black: #3E3D3D;
		--yellow: #ffC500;
		--grey: #efefef;
		--barColor: #333333;
		--titleFont: 'Montserrat',sans-serif;
		--bodyFont: 'Open Sans', sans-serif;
	}

	#___gatsby{
		height:100%;
	}
	#gatsby-focus-wrapper{
		height:100%;

	}
	body{
		height:100%;

	}

	html{
		font-size:16px;
		font-family: 'Open Sans', sans-serif;
		font-weight:400;
		font-style:normal;
		line-height:1.6rem !important;
		height:100%;

	}
	img{
		max-width:100%;
	}
	h1,h2, h3,h4{
		font-family: 'Montserrat',sans-serif;
		margin-botton:.5em !important;
	}
	
	ul, li, p {
		font-family: 'Open Sans', sans-serif;
	}
	ul{
		margin-top:.5em !important;
	}

	a{
		color: var(--primary);
		text-decoration:none;
	}

	a:hover{
		color: var(--primary-dark);
	}
`;
export default GlobalStyles;
