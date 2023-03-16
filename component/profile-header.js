class ProfileHeader extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = `
       
        <section class="profile-header">
        <div class="container">
            <div class="profile-header-m">
                <div class="col-sm-2">
                    <div class="dlogo">
                        <a href="home.html"><img src="image/logo.png"></a>
                    </div>
                </div>
                <div class="col-sm-5 ph-middle-col">
                    <div class="ph-middle">
                        <ul>
                            <li><a href="#">Home</a></li>
                            <li><a href="#">About Us</a></li>
                            <li><a href="#">Explore Walkers</a></li>
                            <li><a href="#">Training</a></li>
                        </ul>
                    </div>
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
                <div class="col-sm-5 ph-right-col">
                    <div class="ph-right">
                        <ul><li><button class="p-bcw">Become A Walker</button></li>
                            <li class="notifi-li-m">
                            <div class="dropdown">
                            <a class="btn btn-secondary dropdown-toggle" href="#" role="button" id="dropdownMenuLink" data-bs-toggle="dropdown" aria-expanded="false">
                                <i class="fa-solid fa-bell samei"></i>
                              </a>

                              <ul class="dropdown-menu not-drop" aria-labelledby="dropdownMenuLink">
                                <i class="fa-solid fa-triangle drop-tri1"></i>
                                <li>
                                    <div class="not-drop-11">
                                        <p><i class="fa-solid fa-circle-small"></i> <span>Amanda has accepted your booking request</span></p>
                                        <h6>10:12 am</h6>
                                    </div>
                                    <div class="not-drop-11">
                                        <p><i class="fa-solid fa-circle-small"></i> <span>Amanda has accepted your booking request</span></p>
                                        <h6>10:12 am</h6>
                                    </div>
                                    <div class="not-drop-11">
                                        <p><i class="fa-solid fa-circle-small"></i> <span>Amanda has accepted your booking request</span></p>
                                        <h6>10:12 am</h6>
                                    </div>
                                    <div class="not-drop-11">
                                        <p><i class="fa-solid fa-circle-small"></i> <span>Amanda has accepted your booking request</span></p>
                                        <h6>10:12 am</h6>
                                    </div>
                                </li>
                                <li class="view-all"><a class="dropdown-item" href="#">View All</a></li>
                              </ul>
                            </div>
                            </li>

                            <li class="notifi-li">

                            <div class="dropdown">
                                <a class="btn btn-secondary dropdown-toggle" href="#" role="button" id="dropdownMenuLink" data-bs-toggle="dropdown" aria-expanded="false">
                                    <i class="fa-solid fa-envelope samei"></i>
                                </a>

                                <ul class="dropdown-menu not-drop" aria-labelledby="dropdownMenuLink">
                                    <i class="fa-solid fa-triangle drop-tri"></i>
                                    <li>
                                        <div class="not-drop-1">
                                            <div class="col-sm-2">
                                                <img src="image/notimg.png">
                                            </div>
                                            <div class="col-sm-10">
                                                <p><h6>Nickolas</h6><span>10:12 am</span></p>
                                                <h5>Lorem ipsum dolor sit amet..</h5>
                                            </div>
                                        </div>
                                        <div class="not-drop-1">
                                            <div class="col-sm-2">
                                                <img src="image/notimg.png">
                                            </div>
                                            <div class="col-sm-10">
                                                <p><h6>Nickolas</h6><span>10:12 am</span></p>
                                                <h5>Lorem ipsum dolor sit amet..</h5>
                                            </div>
                                        </div>
                                        <div class="not-drop-1">
                                            <div class="col-sm-2">
                                                <img src="image/notimg.png">
                                            </div>
                                            <div class="col-sm-10">
                                                <p><h6>Nickolas</h6><span>10:12 am</span></p>
                                                <h5>Lorem ipsum dolor sit amet..</h5>
                                            </div>
                                        </div>
                                        <div class="not-drop-1">
                                            <div class="col-sm-2">
                                                <img src="image/notimg.png">
                                            </div>
                                            <div class="col-sm-10">
                                                <p><h6>Nickolas</h6><span>10:12 am</span></p>
                                                <h5>Lorem ipsum dolor sit amet..</h5>
                                            </div>
                                        </div>
                                    </li>
                                    <li class="view-all"><a class="dropdown-item" href="#">View All</a></li>
                                </ul>
                            </div>


                            </li>
                            <li>
                                <div class="dropdown ddropdown">
                                  <button class="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    <span><img src="image/duser.png"></span>Jannie
                                  </button>
                                  <ul class="dropdown-menu">
                                    <li><a class="dropdown-item" href="#">Action</a></li>
                                    <li><a class="dropdown-item" href="#">Another action</a></li>
                                    <li><a class="dropdown-item" href="#">Something else here</a></li>
                                  </ul>
                                </div></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </section>
    `;
  }
}

customElements.define('profile-header-component', ProfileHeader);