export class Ingredient {
  ingredientId: number;
  ingredientName: string;
  ingredientEvalStatus: any;
  ingredientEvalDate: any;
  ingredientNote: string;
  vendorName: string;
  userId: number;
  companyId: number;
  companyName: string;
  success: boolean;

  constructor(args?) {
    if (args) {
      this.ingredientId = args.ingredient_id;
      this.ingredientName = args.ingredient_name;
      this.ingredientEvalStatus = args.ingredient_eval_status;
      this.ingredientEvalDate = args.ingredient_eval_date;
      this.ingredientNote = args.ingredient_note;
      this.vendorName = args.vendor_name;
      this.userId = args.user_id;
      this.companyId = args.company_id;
      this.companyName = args.company_name;
      this.success = args.success;
    }
  }
}
