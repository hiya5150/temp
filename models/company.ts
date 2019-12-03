export class Company {
  companyId: number;
  companyName: string;
  companyCode: string;
  companyAddress1: string;
  companyAddress2: string;
  companyCity: string;
  companyProvince: string;
  companyPostalCode: string;
  companyCountry: string;
  companyPhone: string;
  companyFax: string;
  companyEmail: string;
  companyWebsite: string;
  companyNote: string;

  constructor(args?) {
    if (args) {
      this.companyId = args.company_id;
      this.companyName = args.company_name;
      this.companyCode = args.company_code;
      this.companyAddress1 = args.company_address1;
      this.companyAddress2 = args.company_address2;
      this.companyCity = args.company_city;
      this.companyProvince = args.company_province;
      this.companyPostalCode = args.company_postal_code;
      this.companyCountry = args.company_country;
      this.companyPhone = args.company_phone;
      this.companyFax = args.company_fax;
      this.companyEmail = args.company_email;
      this.companyWebsite = args.company_website;
      this.companyNote = args.company_note;
    }
  }
}
