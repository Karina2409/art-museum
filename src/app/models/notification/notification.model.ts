import { NotificationType } from '@models/notification-type';

export type Notification = {
  text: string;
  type: NotificationType;
};
