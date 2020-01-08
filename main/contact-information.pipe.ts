import { Pipe, PipeTransform } from '@angular/core';
import {RegisterComponent} from "./views/main/register/register/register.component";
import {CountryCode, parsePhoneNumber} from 'libphonenumber-js/min';

@Pipe({
  name: 'contactInformation'
})
export class ContactInformationPipe implements PipeTransform {

  transform(phoneValue: number| string, country: string): any {


  try {
    const phoneNumber = parsePhoneNumber(phoneValue + '', country as CountryCode)
    return phoneNumber.formatNational();
  } catch (error) {
    return phoneValue;

  }
  }

}
