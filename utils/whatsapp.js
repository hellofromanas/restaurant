export function generateWhatsAppLink(cart, customer) {
  const phone = "923001234567"; // YOUR NUMBER

  let message = `New Order:%0A`;
  message += `Name: ${customer.name}%0A`;
  message += `Address: ${customer.address}%0A`;
  message += `Phone: ${customer.phone}%0A`;
  message += `--------------------%0A`;

  cart.forEach(item => {
    message += `${item.name} x${item.quantity} - Rs ${item.price * item.quantity}%0A`;
  });

  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
  message += `--------------------%0A`;
  message += `Total: Rs ${total}`;

  return `https://wa.me/${phone}?text=${message}`;
}