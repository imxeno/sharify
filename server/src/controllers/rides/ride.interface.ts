import { Document } from 'mongoose';
import { Place } from '../places/place.class';
import { User } from '../users/user.class';

export interface RideInterface extends Document {
  readonly ride_id: number;
  readonly from: Place;
  readonly to: Place;
  readonly exhibitor: User;
  readonly passengers: Array<User>;
  readonly duration: number;
  readonly cost: number;
  readonly currency: string;
  readonly addedOn: number;
  readonly when: Date;
}