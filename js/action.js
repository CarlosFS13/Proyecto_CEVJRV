function toggleMobileMenu() {
    var x = document.getElementById("myLinks");
    var y = document.getElementById("settings");

    if (x.style.display === "block") {
      x.style.display = "none";
      if (y.style.display === "flex") {
        y.style.display = "none";
      }
    } else {
      x.style.display = "block";
    }
  }

  function toggleFilterMenu() {
    var x = document.getElementById("filter_options");
    if (x.style.display === "block") {
      x.style.display = "none";
    } else {
      x.style.display = "block";
    }
  }

  function toggleFilterOrder() {
    var x = document.getElementById("order");
    if (x.classList.contains("fa-arrow-up")) {
        x.classList.remove("fa-arrow-up");
        x.classList.add("fa-arrow-down");
    } else {
      x.classList.remove("fa-arrow-down");
        x.classList.add("fa-arrow-up");
    }
  }

  function toggleSettings() {
    var x = document.getElementById("settings");
    if (x.style.display === "flex") {
      x.style.display = "none";
    } else {
      x.style.display = "flex";
    }
  }