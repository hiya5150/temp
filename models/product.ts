export class Product {
  productId: number;
  productName: string;
  productBrand: string;
  productEvalStatus: boolean;
  productEvalDate: any;
  productNote: string;
  companyId: number;
  companyName: string;
  userId: number;
  facilityId: number;
  facilityName: string;
  plId: number;
  plName: string;
  success: boolean;

  constructor(args?) {
    if (args) {
      this.productId = args.product_id;
      this.productName = args.product_name;
      this.productBrand = args.product_brand;
      this.productEvalStatus = args.product_eval_status;
      this.productEvalDate = args.product_eval_date;
      this.productNote = args.product_note;
      this.companyId = args.company_id;
      this.companyName = args.company_name;
      this.userId = args.user_id;
      this.facilityId = args.facility_id;
      this.facilityName = args.facility_name;
      this.plId = args.pl_id;
      this.plName = args.pl_name;
      this.success = args.success;
    }
  }
}
