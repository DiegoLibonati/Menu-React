import { BtnCategory } from "./BtnCategory";
import { menu } from "../helpers/data";
import { useState } from "react";
import { ItemMenu } from "./ItemMenu";
import { Menu } from "../entities/entities";

export const Main = (): JSX.Element => {
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

  return (
    <main className="main_container">
      <section className="title_container">
        <article className="title_container_center">
          <h1>Our Menu</h1>
          <div></div>
        </article>
      </section>

      <section className="btns_container">
        <article className="btns_container_center">
          <BtnCategory
            category="All"
            event_func={handleCategoryAll}
          ></BtnCategory>
          <BtnCategory
            category="Breakfast"
            event_func={handleCategoryBreakfast}
          ></BtnCategory>
          <BtnCategory
            category="Lunch"
            event_func={handleCategoryLunch}
          ></BtnCategory>
          <BtnCategory
            category="Shakes"
            event_func={handleCategoryShakes}
          ></BtnCategory>
        </article>
      </section>

      <section className="items_container">
        {allCategories.map((category) => {
          return <ItemMenu key={category.id} {...category}></ItemMenu>;
        })}
      </section>
    </main>
  );
};
