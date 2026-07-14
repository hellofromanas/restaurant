# Restaurant Ordering System 🍕

A **modern Next.js restaurant ordering platform** with WhatsApp integration, real-time order tracking, and dynamic menu management.

## Features

✅ **WhatsApp Integration** - One-click ordering sends directly to WhatsApp  
✅ **Order History** - Customers can view their previous orders  
✅ **Dynamic Menu** - Real-time menu with pricing and descriptions  
✅ **Real-time Cart** - Add/remove items with instant updates  
✅ **Customer Testimonials** - Display reviews from satisfied customers  
✅ **Special Offers** - Highlight deals and promotions  
✅ **Contact Information** - Embedded location, hours, and social links  
✅ **Responsive Design** - Works perfectly on mobile and desktop  
✅ **Modern UI** - Built with Tailwind CSS for beautiful styling  
✅ **Local Storage** - Order history persists in browser  

## Tech Stack

- **Frontend:** Next.js 14, React 18, Tailwind CSS
- **Backend:** Next.js API routes
- **State Management:** React Hooks (useState)
- **Storage:** Browser LocalStorage
- **Deployment:** Vercel (Recommended) or GitHub Pages

## Project Structure

```
restaurant-site/
├── app/
│   ├── page.js                 # Home page with menu & cart
│   ├── menu.js                 # Menu page
│   └── layout.js               # Root layout
├── components/
│   ├── Navbar.js               # Navigation bar
│   ├── MenuItem.js             # Individual menu item
│   ├── Cart.js                 # Shopping cart (with WhatsApp)
│   ├── OrderHistory.js         # Previous orders display
│   ├── Testimonials.js         # Customer reviews
│   ├── SpecialOffers.js        # Promotions & deals
│   ├── AboutUs.js              # Restaurant info
│   └── ContactInfo.js          # Contact details & hours
├── data/
│   └── menu.js                 # Menu items data
├── utils/
│   └── whatsapp.js             # WhatsApp integration
├── styles/
│   └── globals.css             # Global styles
├── tailwind.config.js          # Tailwind configuration
├── package.json                # Dependencies
├── .gitignore                  # Git ignore rules
└── README.md                   # This file
```

## Installation

### Prerequisites
- Node.js 18+
- npm or yarn

### Setup

1. **Clone the repository:**
```bash
git clone https://github.com/hellofromanas/restaurant.git
cd restaurant-site
```

2. **Install dependencies:**
```bash
npm install
```

3. **Set up environment variables** (optional):
```bash
cp .env.example .env.local
```

4. **Run development server:**
```bash
npm run dev
```

5. **Open in browser:**
Visit `http://localhost:3000`

## Usage

### Adding Menu Items

Edit `data/menu.js`:

```javascript
export const menu = [
  { id: 1, name: "Zinger Burger", price: 500 },
  { id: 2, name: "Pizza", price: 1200 },
  // Add more items
];
```

### Customizing WhatsApp Number

Edit `utils/whatsapp.js`:

```javascript
const phone = "923001234567"; // Update with your WhatsApp number
```

### Updating Restaurant Info

Edit all component files and replace:
- Phone: `+92 323 5560802`
- Location: `Near Fahad CNG, Sultanpur, Havelian`
- Hours: `11:00 AM - 2:00 AM`

## Features Explained

### WhatsApp Ordering
- User adds items to cart
- Enters name and phone number
- Clicks "Order via WhatsApp"
- WhatsApp opens with formatted order message
- Message sent directly to restaurant

### Order History
- All orders stored in browser's LocalStorage
- Shows customer name, items, and total
- Persists even after browser closes
- Easy to review previous orders

### Real-time Cart
- Add/remove items instantly
- Quantity management
- Running total calculation
- One-click WhatsApp send

### Responsive Design
- Mobile-first approach
- Works on all screen sizes
- Touch-friendly buttons
- Fast loading times

## Deployment

### Option 1: Vercel (Recommended for Next.js)

1. Push code to GitHub
2. Visit https://vercel.com
3. Connect GitHub repository
4. Deploy automatically

**Live URL:** Your domain on Vercel

### Option 2: GitHub Pages

1. Build the project:
```bash
npm run build
```

2. Deploy built files to GitHub Pages

### Option 3: Self-Hosting

```bash
npm run build
npm start
```

Then deploy the `.next` folder to your server.

## Environment Variables

Create `.env.local`:

```
NEXT_PUBLIC_WHATSAPP_NUMBER=923001234567
NEXT_PUBLIC_RESTAURANT_NAME=Restaurant
NEXT_PUBLIC_RESTAURANT_PHONE=+92-300-1234567
NEXT_PUBLIC_RESTAURANT_LOCATION=Your Location
```

## Performance Optimization

- ✅ Image optimization with Next.js
- ✅ Code splitting and lazy loading
- ✅ Optimized CSS with Tailwind
- ✅ Fast page load times
- ✅ Mobile-optimized

## Browser Support

- Chrome/Chromium 90+
- Firefox 88+
- Safari 14+
- Edge 90+
- Mobile browsers (iOS Safari, Chrome Mobile)

## Scripts

```bash
npm run dev      # Start development server
npm run build    # Build for production
npm start        # Start production server
npm run lint     # Run linting
```

## Troubleshooting

### WhatsApp not opening?
- Check if WhatsApp number is correct in `utils/whatsapp.js`
- Verify number format: `country-code + number` (e.g., `923001234567`)

### Orders not saving?
- Enable LocalStorage in browser
- Check browser console for errors
- Clear cache and try again

### Menu not displaying?
- Verify `data/menu.js` has items
- Check component imports
- Restart development server

## Contributing

1. Fork the repository
2. Create feature branch (`git checkout -b feature/amazing-feature`)
3. Commit changes (`git commit -m 'Add amazing feature'`)
4. Push to branch (`git push origin feature/amazing-feature`)
5. Open Pull Request

## License

© 2026 Restaurant. All rights reserved.

## Contact & Support

- **Developer:** Khawaja Anas Javed
- **GitHub:** [@hellofromanas](https://github.com/hellofromanas)
- **Email:** [Contact info]

## Roadmap

- [ ] User authentication
- [ ] Payment gateway integration
- [ ] Admin dashboard
- [ ] Real-time order tracking
- [ ] Loyalty points system
- [ ] Multi-language support
- [ ] Push notifications
- [ ] Analytics dashboard

## Support

If you encounter any issues or have suggestions:
1. Check existing GitHub issues
2. Create a new issue with details
3. Include error messages and screenshots

---

**Made with ❤️ by Khawaja Anas Javed**
