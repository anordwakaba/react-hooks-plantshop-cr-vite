# Plantsy - Plant Store Admin Dashboard

> A React-based admin dashboard for managing a plant store inventory. Add plants, mark items as sold out, and search through the catalog.

## Features

- ✅ View all plants on page load with real-time data from backend
- ✅ Add new plants to inventory via form submission  
- ✅ Mark plants as sold out and toggle availability status
- ✅ Search plants by name with real-time filtering
- ✅ Responsive design with modern CSS styling
- ✅ Full test coverage with 10 passing tests

## Installation

```bash
npm install
```

## Usage

### Start the Backend Server
```bash
npm run server
```
Backend runs on port `6001`

### Start the Frontend Development Server
```bash
npm run dev
```
Frontend runs on port `5173`

### Run Tests
```bash
npm run test
```

### Verify Setup
Open [http://localhost:6001/plants](http://localhost:6001/plants) in your browser to verify backend is working

## Architecture

### Components

- **`App`** - Main application wrapper
- **`Header`** - Application header with title
- **`PlantPage`** - Main page managing state and data fetching
  - Fetches all plants on mount
  - Handles adding new plants
  - Handles marking plants as sold out
  - Manages search filter state
- **`PlantList`** - Renders list of plants
- **`PlantCard`** - Individual plant card with sold out toggle button
- **`NewPlantForm`** - Form to add new plants with validation
- **`Search`** - Search input for filtering plants

### State Management

State is managed at the `PlantPage` component level using React hooks:
- `plants` - Array of all plants from backend
- `searchQuery` - Current search filter text

### API Endpoints

Base URL: `http://localhost:6001`

#### GET /plants
Returns all plants in inventory

#### POST /plants  
Add a new plant
- Request body: `{ name, image, price }`
- Returns: Created plant object with id

#### PATCH /plants/{id}
Update plant (mark as sold out)
- Request body: Plant object with updated properties
- Returns: Updated plant object

## Implementation Details

### Data Fetching (PlantPage.jsx)
- Uses `useEffect` hook to fetch plants on component mount
- Handles errors gracefully with console logging
- Updates component state when data arrives

### Adding Plants (NewPlantForm.jsx)
- Form state for `name`, `image`, and `price` fields
- Input validation to ensure all fields are filled
- Calls parent handler to POST new plant to backend
- Form resets after successful submission

### Search Functionality (Search.jsx + PlantPage.jsx)
- Search component manages input value
- PlantPage filters plants using `includes()` method
- Case-insensitive search
- Shows all plants when search is cleared

### Sold Out Toggle (PlantCard.jsx + PlantPage.jsx)
- Button text changes based on `soldOut` property
- Clicking button sends PATCH request to backend
- Updates plant state on successful response
- Button styling changes between "In Stock" and "Out of Stock"

## Testing

All features have comprehensive test coverage:

```
✓ 1st Deliverable > displays all plants on startup
✓ 1st Deliverable > plants aren't hardcoded
✓ 2nd Deliverable > adds a new plant when the form is submitted
✓ 3rd Deliverable > marks a plant as sold out
✓ Search functionality works correctly
```

Tests use mocked fetch responses to verify component behavior without requiring backend connectivity.

## Technologies Used

- React 18+ with Hooks
- Vite (fast build tool)
- Vitest (testing framework)
- React Testing Library
- CSS (responsive styling)
- JSON Server (mock backend)

## API Response Format

### Plant Object
```json
{
  "id": 1,
  "name": "Aloe",
  "image": "./images/aloe.jpg",
  "price": 15.99,
  "soldOut": false
}
```

## Browser Support

Modern browsers with ES6 support:
- Chrome
- Firefox  
- Safari
- Edge

## Author

Developed as part of Phase 2 Code Challenge for React Hooks practice

## License

MIT

## Setup

1. Run `npm install` in your terminal.
2. Run `npm run server`. This will run your backend on port `6001`.
3. In a new terminal, run `npm run dev`.

Make sure to open [http://localhost:6001/plants](http://localhost:6001/plants)
in the browser to verify that your backend is working before you proceed!

## Endpoints

The base URL for your backend is: `http://localhost:6001`

## Deliverables

As a user:

1. When the app starts, I can see all plants.
2. I can add a new plant to the page by submitting the form.
3. I can mark a plant as "sold out".
4. I can search for plants by their name and see a filtered list of plants.

### Endpoints for Core Deliverables

#### GET /plants

Example Response:

```json
[
  {
    "id": 1,
    "name": "Aloe",
    "image": "./images/aloe.jpg",
    "price": 15.99
  },
  {
    "id": 2,
    "name": "ZZ Plant",
    "image": "./images/zz-plant.jpg",
    "price": 25.98
  }
]
```

#### POST `/plants`

Required Headers:

```js
{
  "Content-Type": "application/json"
}
```

Request Object:

```json
{
  "name": "string",
  "image": "string",
  "price": number
}
```

Example Response:

```json
{
  "id": 1,
  "name": "Aloe",
  "image": "./images/aloe.jpg",
  "price": 15.99
}
```
