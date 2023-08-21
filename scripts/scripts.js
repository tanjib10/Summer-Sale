function addToCart(productName,priceAmount) {
   const cartDiv = document.getElementById('add-cart');
   const p = document.createElement('p');
   const count = cartDiv.childElementCount;
   p.innerHTML = `${count + 1}. ${productName}`
   p.className = 'p-1 ml-10 text-left'
   cartDiv.appendChild(p);
   const firstProductPrice = parseFloat(priceAmount); 
   const totalPrice = document.getElementById('total-price');
   const totalPriceString = totalPrice.innerText;
   const totalPriceAmount = parseFloat(totalPriceString);
   const sum = totalPriceAmount + firstProductPrice;
   totalPrice.innerText = sum;
   totalPrice.textContent = sum.toFixed(2);
    if (sum > 0) {
      document.getElementById('btn-purchase').removeAttribute('disabled');
   }
   if (sum > 200) {
      document.getElementById('btn-apply').removeAttribute('disabled')
   }
   document.getElementById('btn-apply').addEventListener('click',function applyCoupon(){
   const coupon = document.getElementById('coupon');
   const couponValue = coupon.value;
   if (couponValue === 'SELL200') {
   const discount = document.getElementById('discount');
   const discountString = discount.innerText;
   const discountValue = parseFloat(discountString);
   const discountTk = sum * 20 / 100;
   discount.innerText = discountTk.toFixed(2);  
   const total = document.getElementById('total');
   const totalString = total.innerText;
   const totalValue = parseFloat(totalString);
   const totalAmount = sum - discountTk;
   total.textContent = totalAmount.toFixed(2)    
   }
   })
}

