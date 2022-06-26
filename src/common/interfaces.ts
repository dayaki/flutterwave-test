export interface ProductProps {
  name: string;
  price: number;
  stock: number;
  slug?: string;
  desc: string;
}

export interface UserProps {
  email: string;
}

export interface AppStateProps {
  products: ProductProps[];
  user: UserProps | undefined;
}

export interface ContextModelProps {
  state: { user: UserProps | undefined; products: ProductProps[] };
  dispatch: React.Dispatch<ContextActionProps>;
}

export type ContextActionProps =
  | { type: 'hydrate'; payload: AppStateProps }
  | { type: 'save_user'; payload: UserProps }
  | { type: 'add_product'; payload: ProductProps }
  | { type: 'update_product'; payload: ProductProps }
  | { type: 'delete_product'; payload: ProductProps }
  | { type: 'logout' };
