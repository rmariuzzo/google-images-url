# Google Images URL
🔗 URL generator for Google images

## Installation

```shell
npm install google-images-url
# or
yarn add google-images-url
```

### Usage

```js
import GoogleImagesUrl from 'GoogleImagesUrl'

GoogleImagesUrl.create('cute cats', { size: 'large' })
// > https://www.google.com/search?q=cute%20cats&tbs=isz:l,qdr:a&tbm=isch
```

### API

```js
GoogleImagesUrl(query, options)
```

 - `query` - The term used for the search.
 - `options` - An object containing options to customize the Google Images URL.

#### `query`

The query is the term used for the search. It should be a string.

#### `options`

The options parameter is an object containing different values:

 - **`size`** – `{String|Object}` The size of the images. If a string is provided then it should be one of the following values: `icon`, `medium` or `large`. If an object is provided it should contains `width` and `height` properties.

 - **`color`** - `{String}` The color of the images. The string should be one of the following values: `orange`, `yellow`, `green`, `teal`, `blue`, `purple`, `pink`, `white`, `gray`, `black` or `brown`.

 - **`types`** - `{String}` The type of images. The string should be one of the following values: `face`, `photo`, `clipart`, `lineart` or `animated`.

 - **`showSizes`** - `{Boolean}` Show images sizes in results. If `true` show images sizes in results, otherwise no.

 - **`time`** - `{String|Object}` The time range of the images. If a string is provided it should be one of the following values: `anytime`, `second`, `minute`, `hour`, `day`, `week`, `month` or `year`. If an object is provided it should contains `from` and `to` properties. The values for these properties should be a string value representing a date in the format: `mm/dd/yyyy`.

 - **`sortBy`** - `{String}` The sorting algorithm. The string should be one of the following values: `date` or `relevance`.

## Tests

```shell
npm test
# or
yarn test
```

#### Appreciations

Thanks to Theodor Stenevang Klemming for [his article](https://stenevang.wordpress.com/2013/02/22/google-advanced-power-search-url-request-parameters/).
