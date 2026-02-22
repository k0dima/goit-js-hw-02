function generateMessage(country, price) {
  return `Shipping to ${country} will cost ${price} credits`;
}

function getShippingCost(country) {
  switch (country) {
    case "Australia":
      return generateMessage(country, 170);
    case "China":
      return generateMessage(country, 100);
    case "Chile":
      return generateMessage(country, 250);
    case "Jamaica":
      return generateMessage(country, 120);
    default:
      return "Sorry, there is no delivery to your country";
  }
}

console.log(getShippingCost("Australia")); // "Shipping to Australia will cost 170 credits"
console.log(getShippingCost("Germany")); // "Sorry, there is no delivery to your country"
console.log(getShippingCost("China")); // "Shipping to China will cost 100 credits"
console.log(getShippingCost("Chile")); // "Shipping to Chile will cost 250 credits"
console.log(getShippingCost("Jamaica")); // "Shipping to Jamaica will cost 120 credits"
console.log(getShippingCost("Sweden")); // "Sorry, there is no delivery to your country"
