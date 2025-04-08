import { Injectable } from '@angular/core';
import { Notification } from '@models/notification';
import { NotificationType } from '@models/notification-type';

@Injectable({
  providedIn: 'root',
})
export class NotificationsService {
  public notifications: Notification[] = [];

  public show(text: string, type: NotificationType): void {
    this.notifications.push({ text, type });
    setTimeout(() => this.notifications.shift(), 5000);
  }

  public clear(): void {
    this.notifications = [];
  }
}
