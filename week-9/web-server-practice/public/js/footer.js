const footer = document.querySelector('footer');

const year = new Date().getFullYear();

footer.innerHTML = `
<p class="footer__text">&copy; ${year} Simon Hardacre</p>
<nav class="footer__nav">
  <ul class="footer__nav-list">
	  <li class="footer__nav-item">
  		<a href="#" class="footer__nav-link">Privacy Policy</a>
		</li>
		<li class="footer__nav-item">
  		<a href="#" class="footer__nav-link">Terms & Conditions</a>
		</li>
	</ul>
</nav>
`;
