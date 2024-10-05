export type Product = {
  id: string,
  imageSrc?: string;
  imageAlt?: string;
  name?: string;
  category?: string;
  color?: string;
  stockQnt?: number;
  cartQntd?: number;
  size: string;
};

export interface EquipamentosExitModel {
  Produtos: CategoriaEquipamentoExitModel[];
}

export interface CategoriaEquipamentoExitModel {
  Categoria: string;
  Produtos: ProdutosPorTamanhoExitModel[];
}

export interface ProdutosPorTamanhoExitModel {
  Size: string;
  Produtos: ProdutoExitModel[];
}

export interface ProdutoExitModel {
  id: string;
  name: string;
  category: string;
  stockQnt: number;
  size: string;
  imageSrc?: string;
  imageAlt?: string;
}
