// ##### TYPES #####
export type Menu = {
  id: number;
  title: string;
  category: string;
  price: number;
  img: string;
  desc: string;
};

// ##### INTERFACES #####
export interface BtnCategoryProps {
  event_func: React.MouseEventHandler<HTMLButtonElement>;
  category: string;
}

export interface ItemMenuProps {
  title: string;
  price: number;
  img: string;
  desc: string;
}
