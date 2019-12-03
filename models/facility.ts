export class Facility {
  facilityId: number;
  facilityName: string;
  facilityAddress1: string;
  facilityAddress2: string;
  facilityCity: string;
  facilityProvince: string;
  facilityPostalCode: string;
  facilityCountry: string;
  facilityPhone: string;
  companyId: number;
  companyName: string;
  success: boolean;

  constructor(args?) {
    if (args) {
      this.facilityId = args.facility_id;
      this.facilityName = args.facility_name;
      this.facilityAddress1 = args.facility_address1;
      this.facilityAddress2 = args.facility_address2;
      this.facilityCity = args.facility_city;
      this.facilityProvince = args.facility_province;
      this.facilityPostalCode = args.facility_postal_code;
      this.facilityCountry = args.facility_country;
      this.facilityPhone = args.facility_phone;
      this.companyId = args.company_id;
      this.companyName = args.company_name;
      this.success = args.success;
    }
  }

}
