class footer extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = `<footer class="footer1">
  <div class="container">
    <div class="foot1">
      <span class="foot1a">
        <img src="image/logo1.png">
      </span>
      <span class="foot1b">
        <ul>
          <li><a href="scro1">About Us <span>|</span></a></li>
          <li><a href="" >Contact Us <span>|</span></a></li>
          <li><a href=""> FAQs <span>|</span></a></li>
          <li><a href="">Testimonials <span>|</span></a></li>
          <li><a href="">Cookies Policy <span>|</span></a></li>
          <li><a href="">Privacy Policy <span>|</span></a></li>
          <li><a href="">Terms of Use</a></li>
        </ul>
      </span>
      <span class="foot1c">
        <a href=""><i class="facebook fa-brands fa-facebook-f"></i></a><a href=""><i class="youtube fa-brands fa-youtube"></i></a><a href=""><i class="insta fa-brands fa-instagram"></i></a>
      </span>
      <span class="foot1d">© 2021 Canine Calm. All Rights Reserved.</span>
    </div>
  </div>
</footer>`;
  }
}

customElements.define('footer-component', footer);

