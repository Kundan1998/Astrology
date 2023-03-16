class Header extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = `<header class="header1">
  <div class="container">
    <div class="col-sm-3 head1">
      <a href=""><img src="image/logo.png"></a>
    </div>
    <div class="col-sm-6 head2">
      <ul>
        <li><a href="">Home</a></li>
        <li><a href="">About Us</a> </li>
        <li><a href="">Explore Walkers</a></li>
        <li><a href="">Training</a></li>
      </ul> 
      <div class="menu-wrap">
                 <nav class="menu">
                    <div class="icon-list">
                        <a href="#"><span>Home</span></a>
                          <a href="#"><span>About Us</span></a>
                          <a href="#"><span>Explore Walkers</span></a>
                          <a href="#"><span>Training</span></a>
                        </div>
                        <button class="close-button" id="close-button">X</button>
                  </nav>
            </div>
            <button class="menu-button fa fa-bars" id="open-button">
             </button>


    </div>
    <div class="col-sm-3 head3">

      <button class="hdbtn1">Become A Walker</button>
      <div class="dropdown">
          <button class="btn dropdown-toggle hdbtn2" type="button" id="dropdownMenuButton" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          <i class="fa-solid fa-user"></i>Account
        </button>
            <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
              <a class="dropdown-item" href="#">a</a>
              <a class="dropdown-item" href="#">b</a>
              <a class="dropdown-item" href="#">c</a>
          </div>
        </div>
    </div>
  </div>
</header>`;
  }
}

customElements.define('header-component', Header);