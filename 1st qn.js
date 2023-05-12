function validatePrice() {
    const regex = /^\$\d+(,\d{3})*(\.\d{2})?$/;
    const priceInput = document.getElementById("price-input").value;
    if (regex.test(priceInput)) {
      alert("Valid price entered: " + priceInput);
      return true;
    } else {
      alert("Invalid price entered: " + priceInput);
      return false;
    }
  }