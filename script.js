function toggleSidebar(id) {
  const sidebar = document.getElementById("sidebar");
  if (id === "open") {
    sidebar.style.display = "flex";
  } else {
    sidebar.style.display = "none";
  }
}
