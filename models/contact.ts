export class Contact {
  contactId: number;
  firstName: string;
  lastName: string;
  username: string;
  title: string;
  phone: string;
  email: string;
  password: string;
  companyId: number;
  companyName: string;
  success: boolean;

  constructor(args?) {
    if (args) {
      this.contactId = args.contact_id;
      this.firstName = args.contact_first_name;
      this.lastName = args.contact_last_name;
      this.username = args.contact_username;
      this.title = args.contact_title;
      this.phone = args.contact_phone;
      this.email = args.contact_email;
      this.password = args.contact_password;
      this.companyId = args.company_id;
      this.companyName = args.company_name;
      this.success = args.success;
    }
  }
}
