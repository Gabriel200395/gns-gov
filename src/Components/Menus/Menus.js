import React from "react";

function Menus() {
  return (
    <section>
      <div class="container content-border-menu">
        <nav
          class="mt-3 "
          // style="--bs-breadcrumb-divider: '>';"
          aria-label="breadcrumb"
        >
          <ol class="breadcrumb">
            <li class="breadcrumb-item " aria-current="page">
              <i class="fas fa-home" id="home"></i>
            </li>
            <li class="breadcrumb-item " aria-current="page">
              Nome da plataforma
            </li>
            <li class="breadcrumb-item ">Nova edição</li>
          </ol>
        </nav>
      </div>
    </section>
  );
}

export default Menus;
