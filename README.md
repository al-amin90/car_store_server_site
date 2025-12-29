# 🚗 Car Store Server

A robust RESTful API built with Express, TypeScript, and MongoDB for managing a car store with comprehensive inventory and order management capabilities.

## 📋 Overview

Car Store Server provides a complete backend solution for car dealerships, enabling CRUD operations for car inventory, order processing with automatic inventory management, and revenue tracking through aggregation pipelines.

## 🛠️ Tech Stack

- **Runtime**: Node.js
- **Framework**: Express.js
- **Language**: TypeScript
- **Database**: MongoDB
- **ODM**: Mongoose

## 📦 Installation

### Setup

1. Clone the repository:

```bash
git clone https://github.com/yourusername/car-store-server-site.git
cd car-store-server-site
```

2. Install dependencies:

```bash
npm install
```

3. Create a `.env` file in the root directory:

```env
PORT=5000
DATABASE_URL=mongodb://localhost:27017/car-store
NODE_ENV=development
```

4. Build the project:

```bash
npm run build
```

## 🚀 Usage

### Development Mode

```bash
npm run start:dev
```

### Production Mode

```bash
npm run start:prod
```

### Linting

```bash
npm run lint        # Check for linting errors
npm run lint:fix    # Fix linting errors automatically
```

### Formatting

```bash
npm run prettier      # Check formatting
npm run prettier:fix  # Fix formatting issues
```

## 📡 API Endpoints

### Cars

#### Get All Cars

```http
GET /api/cars
```

#### Get Single Car

```http
GET /api/cars/:id
```

#### Create Car

```http
POST /api/cars
Content-Type: application/json

{
  "brand": "Toyota",
  "model": "Camry",
  "year": 2024,
  "price": 30000,
  "category": "Sedan",
  "description": "A reliable sedan",
  "quantity": 10,
  "inStock": true
}
```

#### Update Car

```http
PUT /api/cars/:id
Content-Type: application/json

{
  "price": 28000,
  "quantity": 8
}
```

#### Delete Car

```http
DELETE /api/cars/:id
```

### Orders

#### Place an Order

```http
POST /api/orders
Content-Type: application/json

{
  "email": "customer@example.com",
  "car": "car_id_here",
  "quantity": 2,
  "totalPrice": 60000
}
```

**Inventory Management Logic:**

- Automatically reduces car quantity when order is placed
- Sets `inStock` to `false` when quantity reaches zero
- Returns error if insufficient stock available

#### Calculate Total Revenue

```http
GET /api/orders/revenue
```

**Response:**

```json
{
  "message": "Revenue calculated successfully",
  "status": true,
  "data": {
    "totalRevenue": 150000
  }
}
```

## 📂 Project Structure

```
car-store-server-site/
├── src/
│   ├── app/
│   │   ├── modules/
│   │   │   ├── car/
│   │   │   │   ├── car.controller.ts
│   │   │   │   ├── car.service.ts
│   │   │   │   ├── car.model.ts
│   │   │   │   ├── car.interface.ts
│   │   │   │   └── car.route.ts
│   │   │   └── order/
│   │   │       ├── order.controller.ts
│   │   │       ├── order.service.ts
│   │   │       ├── order.model.ts
│   │   │       ├── order.interface.ts
│   │   │       └── order.route.ts
│   │   ├── config/
│   │   └── app.ts
│   └── server.ts
├── dist/
├── .env
├── .gitignore
├── package.json
├── tsconfig.json
└── README.md
```

## 🔧 Configuration

### TypeScript Configuration

The project uses `commonjs` module system. Configuration is defined in `tsconfig.json`.

### Environment Variables

- `PORT`: Server port (default: 5000)
- `DATABASE_URL`: MongoDB connection string
- `NODE_ENV`: Environment mode (development/production)

## 🤝 Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

Please ensure your code follows the project's linting and formatting standards.

## 📝 License

This project is licensed under the ISC License.

## 🐛 Known Issues

- Test suite not yet implemented

## 📞 Contact

ijesun30@gmail.com
For questions or support, please open an issue in the GitHub repository.

## 🙏 Acknowledgments

- Express.js team for the excellent web framework
- MongoDB team for the powerful database
- TypeScript team for type safety

---

**Made with ❤️ for car dealerships worldwide**
