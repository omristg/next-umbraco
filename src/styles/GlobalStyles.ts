import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
:root {
	--layout-padding: 2rem;
}

html {
    font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
    font-size: 16px;
    line-height: 1.5;
}

body {
	margin: 0;
}

*,
*::before,
*::after {
	box-sizing: border-box;
}

html,
body,
div,
span,
applet,
object,
iframe,
h1,
h2,
h3,
h4,
h5,
h6,
p,
blockquote,
pre,
a,
abbr,
acronym,
address,
big,
cite,
code,
del,
dfn,
em,
img,
ins,
kbd,
q,
s,
samp,
small,
strike,
strong,
sub,
sup,
tt,
var,
b,
u,
i,
center,
dl,
dt,
dd,
ol,
ul,
li,
table,
caption,
tbody,
tfoot,
thead,
tr,
th,
td,
article,
aside,
canvas,
details,
embed,
figure,
figcaption,
footer,
header,
hgroup,
menu,
nav,
output,
ruby,
section,
summary,
time,
mark,
audio,
video {
	margin: 0;
	padding: 0;
}

/* HTML5 display-role reset for older browsers */
article,
aside,
details,
figcaption,
figure,
footer,
header,
hgroup,
menu,
nav,
section {
	display: block;
}

ol,
ul {
	list-style: none;
}

blockquote,
q {
	quotes: none;
}

blockquote:before,
blockquote:after,
q:before,
q:after {
	content: "";
	content: none;
}

table {
	border-collapse: collapse;
	border-spacing: 0;
}

input,
button,
textarea,
select {
	font: inherit;
	margin: 0;
}

button {
	background: none;
	border: none;
	cursor: pointer;
}

a {
	text-decoration: none;
	color: inherit;
}

*:focus {
	outline: none;
}

/* Custom Scrollbar for WebKit browsers (Chrome, Safari) */
::-webkit-scrollbar {
	width: 12px; /* Width of the scrollbar */
	height: 12px; /* Height of the scrollbar for horizontal scrollbars */
}

::-webkit-scrollbar-track {
	background: #f1f1f1; /* Background color of the scrollbar track */
	border-radius: 6px; /* Rounded corners for the track */
}

::-webkit-scrollbar-thumb {
	background: #888; /* Color of the scrollbar thumb */
	border-radius: 6px; /* Rounded corners for the thumb */
}

::-webkit-scrollbar-thumb:hover {
	background: #555; /* Color of the thumb when hovered */
}

/* Custom Scrollbar for Firefox */
* {
	scrollbar-width: thin; /* Thin scrollbar width */
	scrollbar-color: #888 #f1f1f1; /* Color of the thumb and track */
}

`;
