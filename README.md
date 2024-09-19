# Menu React

## Getting Started

1. Clone the repository
2. Join to the correct path of the clone
3. Install node_modules with yarn install
4. Use yarn dev or start (depends package.json) to run the app page

## Description

I made a web application that allows you to see a food menu. This menu has different buttons and depending on which button we touch it will bring us that type of food. If we tap on All, it will bring up all the meals again.

## Technologies used

1. React JS
2. Typescript
3. CSS3
   
## Portfolio Link

[`https://www.diegolibonati.com.ar/#/project/Menu-React`](https://www.diegolibonati.com.ar/#/project/Menu-React)

## Video

https://user-images.githubusercontent.com/99032604/198900841-8d70a4c7-80fa-4a15-965f-30f6e4c765b5.mp4

## Documentation

In the file located in `helpers/data.ts` you will find all the information about the meals in the menu:

```
import { Menu } from "../entities/entities";

export const menu: Menu[] = [
  {
    id: 1,
    title: "buttermilk pancakes",
    category: "breakfast",
    price: 15.99,
    img: "./images/item-1.jpeg",
    desc: `I'm baby woke mlkshk wolf bitters live-edge blue bottle, hammock freegan copper mug whatever cold-pressed `,
  },
  {
    id: 2,
    title: "diner double",
    category: "lunch",
    price: 13.99,
    img: "./images/item-2.jpeg",
    desc: `vaporware iPhone mumblecore selvage raw denim slow-carb leggings gochujang helvetica man braid jianbing. Marfa thundercats `,
  },
  {
    id: 3,
    title: "godzilla milkshake",
    category: "shakes",
    price: 6.99,
    img: "./images/item-3.jpeg",
    desc: `ombucha chillwave fanny pack 3 wolf moon street art photo booth before they sold out organic viral.`,
  },
  {
    id: 4,
    title: "country delight",
    category: "breakfast",
    price: 20.99,
    img: "./images/item-4.jpeg",
    desc: `Shabby chic keffiyeh neutra snackwave pork belly shoreditch. Prism austin mlkshk truffaut, `,
  },
  {
    id: 5,
    title: "egg attack",
    category: "lunch",
    price: 22.99,
    img: "./images/item-5.jpeg",
    desc: `franzen vegan pabst bicycle rights kickstarter pinterest meditation farm-to-table 90's pop-up `,
  },
  {
    id: 6,
    title: "oreo dream",
    category: "shakes",
    price: 18.99,
    img: "./images/item-6.jpeg",
    desc: `Portland chicharrones ethical edison bulb, palo santo craft beer chia heirloom iPhone everyday`,
  },
  {
    id: 7,
    title: "bacon overflow",
    category: "breakfast",
    price: 8.99,
    img: "./images/item-7.jpeg",
    desc: `carry jianbing normcore freegan. Viral single-origin coffee live-edge, pork belly cloud bread iceland put a bird `,
  },
  {
    id: 8,
    title: "american classic",
    category: "lunch",
    price: 12.99,
    img: "./images/item-8.jpeg",
    desc: `on it tumblr kickstarter thundercats migas everyday carry squid palo santo leggings. Food truck truffaut  `,
  },
  {
    id: 9,
    title: "quarantine buddy",
    category: "shakes",
    price: 16.99,
    img: "./images/item-9.jpeg",
    desc: `skateboard fam synth authentic semiotics. Live-edge lyft af, edison bulb yuccie crucifix microdosing.`,
  },
];
```

In the `Main.tsx` component we will find the application logic. We will have a state called `àllCategories` in which we will load the meals of the category that we touch. If we touch the button ALL we will execute the function `handleCategoryAll()` it will load all the categories. On the other hand if we choose a button of a particular category it will execute the function of the chosen category. In this case we will use `handleCategoryLunch()` as the other functions will do a filter looking for the chosen category and will set only the meals of that category in the `allCategories` state:

```
const [allCategories, setCategories] = useState<Menu[]>(menu);

const handleCategoryAll: React.MouseEventHandler<HTMLButtonElement> = () => {
  setCategories(menu);
};

const handleCategoryBreakfast: React.MouseEventHandler<
  HTMLButtonElement
> = () => {
  const breakfastArray = menu.filter((x) => x.category === "breakfast");

  setCategories(breakfastArray);
};

const handleCategoryLunch: React.MouseEventHandler<
  HTMLButtonElement
> = () => {
  const breakfastArray = menu.filter((x) => x.category === "lunch");

  setCategories(breakfastArray);
};

const handleCategoryShakes: React.MouseEventHandler<
  HTMLButtonElement
> = () => {
  const breakfastArray = menu.filter((x) => x.category === "shakes");

  setCategories(breakfastArray);
};
```
