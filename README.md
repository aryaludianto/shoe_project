# Golden Shoe – Full-stack commerce sandbox

Golden Shoe is a retail e-commerce playground I built to demonstrate how I’d architect a storefront + admin stack using the MERN ecosystem (TypeScript on both sides). It ships with a real Express/Mongo API, a React storefront, Redux-powered cart state, and styled components for brand-level polish.

---

## Highlights

- **Bifurcated app**: Express + MongoDB backend for products/inventory + React frontend (CRA + TypeScript) served through the same Node process in production.
- **Products API**: Mongoose models for brands, colors, sizes, stock counts, and image galleries; sample seed script to load catalog data.
- **Activity logging**: Winston logger + middleware logging every request (method/path, latency) for easy debugging.
- **Modern client UX**: Home page with hero carousel, product cards, filters (category, gender, type), search, wishlist state, and responsive design.
- **Dev ergonomics**: Concurrent dev server (`yarn shoe`) that runs backend + CRA front-end, hot reload enabled on both sides.

---

## Quick start

```bash
# install backend deps
cd shoe_project
yarn install

# install client deps
cd client
yarn install

# create a .env in the project root
cat <<'ENV' > .env
APP_NAME="Golden Shoe"
NODE_ENV=development
SERVER_PORT=5000
MONGGO_DB_URI=mongodb://localhost:27017/golden-shoe
ENV

# run backend + frontend together (from repo root)
yarn shoe
```

- Backend: `http://localhost:5000`
- Frontend: proxied via CRA dev server at `http://localhost:3000`

> To connect to Atlas or another Mongo instance, replace `MONGGO_DB_URI`; connection options live in `src/index.ts`.

---

## API reference (Express + MongoDB)

Base URL: `http://localhost:5000/product`

| Method | Route | Description |
| --- | --- | --- |
| GET | `/` | Fetch every product document. Supports front-end filtering by brand/gender/type. |
| POST | `/addProduct` | Insert a new product (requires JSON body matching `src/models/product.ts`). |

Sample POST:

```bash
curl -X POST http://localhost:5000/product/addProduct \
  -H "Content-Type: application/json" \
  -d '{
    "brand": "Golden",
    "name": "Trail Runner 2",
    "category": "running",
    "gender": "men",
    "type": "shoe",
    "price": 129,
    "stock": [
      { "color": "midnight", "size": [ { "number": 42, "amount": 8 } ], "imageUrl": ["https://example.com/runner-2.jpg"] }
    ]
  }'
```

---

## Front-end architecture

- CRA + TypeScript + Styled Components for UI primitives.
- Redux Toolkit store for cart/wishlist state; selectors keep UI components lean.
- Components organized by feature (`component/Card`, `component/ProductPage`, etc.).
- Global theming + layout wrappers (`Header`, `Body`, `Footer`) mimic a production storefront.
- Unit tests available under `client/src/App.test.js` and `component/*` specs (Jest + React Testing Library).

```
client/src
├── component
│   ├── Header / Footer / Body
│   ├── ProductPage (gallery, specs, add-to-cart)
│   └── SortedPage (filter view)
├── redux (reducers, actions)
└── store (Redux configuration, middleware)
```

---

## Production build

```bash
# compile TypeScript backend + copy views/assets
yarn build

# build client app (handled automatically on Heroku deploy via heroku-postbuild)
cd client
yarn build

# start production server (serves /client/build)
NODE_ENV=production MONGGO_DB_URI="..." yarn start
```

The Express server automatically serves the compiled React build when `NODE_ENV=production`, so deployment is a single Node process.

---

## Tooling & scripts

| Script | Description |
| --- | --- |
| `yarn dev` | Runs TypeScript build + auto restart (backend only). |
| `yarn client` | CRA dev server. |
| `yarn shoe` | Runs `yarn dev` and `yarn client` concurrently. |
| `yarn build` | Cleans, lints, compiles TypeScript, copies assets to `dist/`. |
| `yarn heroku-postbuild` | Installs+builds the client—useful for Heroku/Render deployments. |

---

## Future improvements

- [ ] Seed scripts + fixtures for multiple collections (brands, users, orders).
- [ ] Payment mock (Stripe test mode) and order workflow.
- [ ] Cypress tests covering cart/checkout flows.
- [ ] Docker Compose setup for local Mongo + Node containers.

---

👟 Built by [Arya Ludianto](mailto:arya.ludianto@gmail.com). Ping me if you want a walkthrough or to see how I’d extend it for a real-world merchant.
