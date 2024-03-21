document.addEventListener("DOMContentLoaded", function () {
  const searchInput = document.querySelector("#search-container input[type='text']");
  const searchButton = document.querySelector("#search-button");
  const linksContainer = document.querySelector("#links-container");
  
  const services = {
      images: "https://www.google.com/images",
      gmail: "https://mail.google.com/",
      store: "https://store.google.com/",
      about: "https://about.google/",
  };

  // Handle search button click
  searchButton.addEventListener("click", function () {
      const searchQuery = searchInput.value.trim();
      if (searchQuery !== "") {
          const searchUrl = `https://www.google.com/search?q=${encodeURIComponent(searchQuery)}`;
          window.location.href = searchUrl;
      }
  });

  // Handle button clicks to redirect to respective sites
  linksContainer.addEventListener("click", function (e) {
      e.preventDefault(); // Prevent default behavior of anchor tags
      if (e.target.tagName === "A") {
          const serviceName = e.target.textContent.toLowerCase(); // Convert service name to lowercase
          const serviceUrl = services[serviceName];
          if (serviceUrl) {
              window.location.href = serviceUrl;
          }
      }
  });
});
