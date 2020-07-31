# photo-gallery

## Related Projects

- https://github.com/PetToyCo/mainTitle_price
- https://github.com/PetToyCo/reviews
- https://github.com/PetToyCo/photo-gallery
- https://github.com/PetToyCo/kate-proxy-server
- https://github.com/PetToyCo/mainTitle_price

## Table of Contents
  1. Usage
  2. Endpoints
  3. Proxy Integration

## Usage

Please Note: This service is currently in Production mode. if you need to return it to development mode, follow these steps:

This service is meant to be used with a proxy server. If that is your intended use:
- run npm install inside the photo-gallery directory to install dependencies
- make an API account with Unsplash https://unsplash.com/documentation#creating-a-developer-account
- to access the Unsplash API, you'll need a personal access token. Make a copy of config.example.js and rename it to config.js, then add your personal access token. This service is currently set up for the production mode, if you need to use it in the development mode, comment the aws configuration, and uncomment the local one.
- run `npm run seed` (to seed the database)
- run `npm test` (to test seeding script, api endpoints and react components)
- start your application with two commands, `npm run client` and `npm start`, in two separate terminal tabs

If you need to use this service as standalone:

- follow all steps above
- visit http://127.0.0.1:3003/ in a browser
- add a query string parameter `itemID` to your url. Pick itemID within the range 100 - 199.
Example: `http://127.0.0.1:3003/?itemID=103`

Endpoints:

This service has two endpoints. First one retrieves all images associated with the item. Each item image is returned in 3 sizes (54px, 400px, 1000px). To retrieve data for a specific item, navigate to:

localhost:3003/itemImages/:itemID

JSON response format:

```
{"itemId":"104","itemImages":[{"_id":"5eeff4c2c079480dcd629f1d","small":"https://images.unsplash.com/photo-1529954382468-c3b5e8371e10?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=54&fit=max&ixid=eyJhcHBfaWQiOjE0MjE3OH0","medium":"https://images.unsplash.com/photo-1529954382468-c3b5e8371e10?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjE0MjE3OH0","large":"https://images.unsplash.com/photo-1529954382468-c3b5e8371e10?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1000&fit=max&ixid=eyJhcHBfaWQiOjE0MjE3OH0"},{"_id":"5eeff4c2c079480dcd629f1e","small":"https://images.unsplash.com/photo-1437957146754-f6377debe171?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=54&fit=max&ixid=eyJhcHBfaWQiOjE0MjE3OH0","medium":"https://images.unsplash.com/photo-1437957146754-f6377debe171?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjE0MjE3OH0","large":"https://images.unsplash.com/photo-1437957146754-f6377debe171?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1000&fit=max&ixid=eyJhcHBfaWQiOjE0MjE3OH0"}]}

```

localhost:3003/itemImages/:itemID/mainImage/

JSON response format:

```
{"image":"https://images.unsplash.com/photo-1529954382468-c3b5e8371e10?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=54&fit=max&ixid=eyJhcHBfaWQiOjE0MjE3OH0"}

```

## Proxy server integration:

Production mode:
To use this service with a proxy server, please add <div id="gallery"></div> in index.html of your proxy server, and please add <script type="text/javascript" src="http://18.224.229.28:3003/bundle.js"></script> near the bottom of the same file. Also you will need to place <link rel="stylesheet" href="http://18.224.229.28:3003/style.css"></link> file in the head of your html file.

To use this service with a proxy server, please add <div id="gallery"></div> in index.html of your proxy server, and please add <script type="text/javascript" src="http://localhost:3003/bundle.js"></script> near the bottom of the same file. Also you will need to place <link rel="stylesheet" href="http://localhost:3003/style.css"></link> file in the head of your html file.
