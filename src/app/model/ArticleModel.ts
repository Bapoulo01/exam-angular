
export class ArticleModel {
  constructor(
    public id: number,
    public libelle: string,
    public prixUnitaire: number,
    public stock: number
  ) {}
}
export type ArticleList = ArticleModel[];