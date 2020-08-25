import Listr from 'listr';
import { TagInterface } from './tag.interface';

export interface TrickInterface<StateType> {
  getMachineName(): string;
  getDisplayName(): string;
  canBeConcurrent(): boolean;
  conserve(
    subListr: Listr,
    dryRun: boolean,
    tags: Array<TagInterface>,
  ): Promise<StateType>;
  restore(subListr: Listr, dryRun: boolean, state: StateType): Promise<void>;
}
