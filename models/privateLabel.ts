export class PrivateLabel {
  plId: number;
  plName: string;
  plAddress1: string;
  plAddress2: string;
  plCity: string;
  plProvince: string;
  plPostalCode: string;
  plCountry: string;
  plPhone: string;
  plFax: string;
  plEmail: string;
  plWebsite: string;
  plBrand: string;
  companyId: number;
  companyName: string;

  constructor(args?) {
    if (args) {
      this.plId = args.pl_id;
      this.plName = args.pl_name;
      this.plAddress1 = args.pl_address1;
      this.plAddress2 = args.pl_address2;
      this.plCity = args.pl_city;
      this.plProvince = args.pl_province;
      this.plPostalCode = args.pl_postal_code;
      this.plCountry = args.pl_country;
      this.plPhone = args.pl_phone;
      this.plFax = args.pl_fax;
      this.plEmail = args.pl_email;
      this.plWebsite = args.pl_website;
      this.plBrand = args.pl_brand;
      this.companyId = args.company_id;
      this.companyName = args.company_name;
    }
  }
}
