function App() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">
          Navbar
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ms-auto mb-5 mb-lg-0">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="#">
                Home
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Link
              </a>

              <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                <li>
                  <a className="dropdown-item" href="#">
                    Action
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Another action
                  </a>
                </li>
                <li>
                  <hr className="dropdown-divider" />
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Something else here
                  </a>
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default App;

//aprendendo sobre grid css
//ml espacamento

// <div className="container">
// <div class="row">
//   <div class="col-12 col-sm-12 col-md-6 col-xl-6">
//     <h1>Titulo 1</h1>
//     <div>
//       Use our powerful mobile-first flexbox grid to build layouts of all
//       shapes and sizes thanks to a twelve column system, six default
//       responsive tiers, Sass variables and mixins, and dozens of
//       predefined classes.
//     </div>
//   </div>
//   <div class="col-12 col-sm-12 col-md-6 col-xl-6">
//     <h1>Titulo 2</h1>
//     <div>
//       Use our powerful mobile-first flexbox grid to build layouts of all
//       shapes and sizes thanks to a twelve column system, six default
//       responsive tiers, Sass variables and mixins, and dozens of
//       predefined classes.
//     </div>
//     <div class="row">
//       <div class="col-6">
//         <h3>titulo dentro</h3>
//         <div>
//           Use our powerful mobile-first flexbox grid to build layouts of
//           all shapes and sizes thanks to a twelve column system, six
//           default
//         </div>
//       </div>
//       <div class="col-6">
//         <h3>titulo dentro</h3>
//         <div>
//           Use our powerful mobile-first flexbox grid to build layouts of
//           all shapes and sizes thanks to a twelve column system, six
//           default
//         </div>
//       </div>
//     </div>
//   </div>
//   <div class="col-12 col-sm-12  col-md-6 col-xl-6">
//     <h1>Titulo 3</h1>
//     <div>
//       Use our powerful mobile-first flexbox grid to build layouts of all
//       shapes and sizes thanks to a twelve column system, six default
//       responsive tiers, Sass variables and mixins, and dozens of
//       predefined classes.
//     </div>
//   </div>
//   <div class="col-12  col-sm-12  col-md-6  col-xl-6">
//     <h1>Titulo 3</h1>
//     <div>
//       Use our powerful mobile-first flexbox grid to build layouts of all
//       shapes and sizes thanks to a twelve column system, six default
//       responsive tiers, Sass variables and mixins, and dozens of
//       predefined classes.
//     </div>
//   </div>
// </div>
// </div>
