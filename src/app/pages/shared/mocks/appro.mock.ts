import { ApproModel } from "../../../model/ApproModel";
import ARTICLE_MOCK from "./article.mock";

const APPRO_MOCK: ApproModel[] = [
  new ApproModel(1, 'APP001', new Date().toISOString().split('T')[0],'Fournisseur A', ARTICLE_MOCK[0], 30,'En attente', 135000,),
  new ApproModel(2, 'APP002', new Date().toISOString().split('T')[0],'Fournisseur B', ARTICLE_MOCK[1], 50,'En attente', 125000,),
  new ApproModel(3, 'APP003', new Date().toISOString().split('T')[0],'Fournisseur B', ARTICLE_MOCK[2], 10,'En attente', 120000,),
  new ApproModel(4, 'APP004', new Date().toISOString().split('T')[0],'Fournisseur B', ARTICLE_MOCK[3], 40,'En attente', 60000)
];

export default APPRO_MOCK;