import {Asset} from './org.hyperledger.composer.system';
import {Participant} from './org.hyperledger.composer.system';
import {Transaction} from './org.hyperledger.composer.system';
import {Event} from './org.hyperledger.composer.system';
// export namespace org.acme.pii{
   export class IdProof {
      passport: string;
      driverLicense: string;
   }
   export class IdentityOwner extends Participant {
      email: string;
      firstName: string;
      lastName: string;
      dob: string;
      id: IdProof;
      authorized: string[];
   }
   export class Booking extends Asset {
      unit: string;
      inUse: string;
      owner: IdentityOwner;
      provider: ServiceProvider;
   }
   export class ServiceProvider extends Participant {
      businessName: string;
   }
   export class MakeBooking extends Transaction {
      unit: string;
      owner: IdentityOwner;
      provider: ServiceProvider;
   }
   export abstract class MemberTransaction extends Transaction {
      memberId: string;
   }
   export class AuthorizeAccess extends MemberTransaction {
   }
   export class RevokeAccess extends MemberTransaction {
   }
   export class MemberEvent extends Event {
      memberTransaction: MemberTransaction;
   }
// }
