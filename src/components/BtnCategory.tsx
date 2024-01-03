import { BtnCategoryProps } from "../entities/entities";

export const BtnCategory = ({
  event_func,
  category,
}: BtnCategoryProps): JSX.Element => {
  return (
    <button onClick={event_func} type="button">
      {category}
    </button>
  );
};
