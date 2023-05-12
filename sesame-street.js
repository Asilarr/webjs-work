document.addEventListener('DOMContentLoaded', () => {
    // (a) Apply style to #cookie-header
    const cookieHeader = document.querySelector('#cookie-header');
    cookieHeader.style.color = 'yellow';
    cookieHeader.style.fontWeight = 'bold';
    
    // (b) Count cookies and update #cookie-count
    const cookies = document.querySelectorAll('#cookie-jar li');
    const cookieCount = cookies.length;
    const cookieCountText = `There are ${cookieCount} cookie(s) in the cookie jar!`;
    const cookieCountElem = document.querySelector('#cookie-count');
    cookieCountElem.textContent = cookieCountText;
    cookieCountElem.style.color = '#f7f16d';
  
    // (c) Remove last cookie every 30 seconds
    setInterval(() => {
      if (cookies.length > 0) {
        const lastCookie = cookies[cookies.length - 1];
        lastCookie.parentNode.removeChild(lastCookie);
        const newCookieCount = cookies.length;
        const newCookieCountText = `There are ${newCookieCount} cookie(s) in the cookie jar!`;
        cookieCountElem.textContent = newCookieCountText;
      }
    }, 30000);
  });
  