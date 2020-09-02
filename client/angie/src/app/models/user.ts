import { Deserializable } from './deserializable';

export class User implements Deserializable {
    id?: number;
    email?: string;
    name?: string;
    nickname?: string;
    password?: string;
    image?: string;


    deserialize(input: any) {
      Object.assign(this, input);
      return this;
    }
  }