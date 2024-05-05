import { Injectable } from "@angular/core";
import { v4 as uuidv4} from 'uuid';

@Injectable()

export class UniqueIdService {
  private numberOfGenerateIds = 0;
  private validId = /^[A-Za-z]+[\w\-\:\.]*$/;

  public generateUniqueIdWithPrefix(prefix: string): string {
    if ( !prefix || !this.validId.test(prefix) ) {
      throw Error("Prefix can not be empty");
    }

    const uniqueId = this.generatedUniqueId();
    this.numberOfGenerateIds++;

    return `${prefix}-${uniqueId}`;
  }

  private generatedUniqueId(): string {
    return uuidv4();
  }

  public getNumberOfGeneratedUniqueIds(): number {
    return this.numberOfGenerateIds;
  }
}
