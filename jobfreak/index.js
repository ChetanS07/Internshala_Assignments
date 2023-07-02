function showContent(contentId, event) {
  // Hide all content sections
  var contentSections = document.querySelectorAll("#content > div");
  contentSections.forEach(function (section) {
    section.style.display = "none";
  });

  // Show the selected content section
  var selectedSection = document.getElementById(contentId);
  selectedSection.style.display = "block";

  // remove 'active' class to the selected item in the left panel
  var menuItems = document.querySelectorAll("#left-panel li");
  menuItems.forEach(function (item) {
    item.classList.remove("active");
  });

  // Ad  Active class to the clicked li
  event.classList.add("active");
}
