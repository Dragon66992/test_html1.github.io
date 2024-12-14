// Load header from header.html
fetch('../components/header.html')
    .then(response => response.text())  // Get Data from header.html and store in (data) 
    .then(data => document.getElementById('header').innerHTML = data)
    .catch(error => console.error('Error loading header:', error));


// Load footer from footer.html
fetch('../components/footer.html')
    .then(response => response.text())
    .then(data => document.getElementById('footer').innerHTML = data)
    .catch(error => console.error('Error loading header:', error))