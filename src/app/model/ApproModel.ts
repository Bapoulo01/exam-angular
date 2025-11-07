import { ArticleModel } from "./ArticleModel";

export type StatutAppro = 'En attente' | 'Recu';
export class ApproModel {
  constructor(
    public id: number,
    public numero: string,
    public date: string,
    public fournisseur: string,
    public article: ArticleModel,
    public quantite: number,
    public status: StatutAppro,
    public montant: number
  ) {}
}

export type ApproList = ApproModel[];