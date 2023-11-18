import './sass/main.scss';

document.querySelector('#app').innerHTML = /*html*/ `
<h1>Sass Course notes</h1>
<main class="highlighted">
	<h2>Section 1</h2>
	<p class="highlighted">test highlighted</p>
	<div class="highlightedBox">highlighted box</div>
	<p class="test001">This is saturated 0%.</p>
	<p class="test002">This is saturated 100%.</p>
	<p class="test003">This is darkened 10%.</p>
	<p class="test004">This is darkened 20%.</p>
	<p class="test005">This is darkened 30%.</p>
	<button class="btn-primary">Submit</button>
	<button class="btn-secondary">Print</button>
	<div class="infoBubble"></div>
	<div class="warnBubble"></div>
</main>
`;
