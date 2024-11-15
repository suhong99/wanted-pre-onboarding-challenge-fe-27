import { Priority, PriorityLabel } from './type';

export const PRIORITY_OPTIONS: PriorityLabel[] = ['상', '중', '하'];

export const PRIORITY_MAP: Record<PriorityLabel, Priority> = {
  상: 'urgent',
  중: 'normal',
  하: 'low',
  '': '',
};
