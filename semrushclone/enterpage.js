document.addEventListener('DOMContentLoaded', function() {
    console.log('DOM content loaded');
    
    var logoutButton = document.getElementById('logoutBtn');

    if (logoutButton) {
        console.log('Logout button found');
        
        logoutButton.addEventListener('click', function() {
            console.log('Logout button clicked');
            
            sessionStorage.removeItem('userToken');
            console.log('userToken removed from sessionStorage');
            
            window.location.href('./semrush.html');
            console.log('Redirecting to semrush.html');
        });
    } else {
        console.log('Logout button not found');
    }
});



