class Header extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = `
       
        <section class="dashboard-header">
        <div class="container-fluid">
            <div class="dashboard-header-m">
                <div class="col-sm-2">
                    <div class="dlogo">
                        <a href="home.html"><img src="image/dlogo.png"></a>
                    </div>
                </div>
                <div class="col-sm-10">
                    <div class="dh-right">
                        <ul>
                            <li><a href="#"><i class="fa-solid fa-bell samei"></i></a></li>
                            <li><a href="#"><i class="fa-solid fa-envelope samei"></i></a></li>
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
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </section>
    `;
  }
}

customElements.define('dashboard-header-component', Header);