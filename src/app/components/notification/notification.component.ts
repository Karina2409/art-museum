import { Component, inject } from '@angular/core';
import { NotificationsService } from '@services/notifications';
import { NgClass, NgForOf } from '@angular/common';
import { Notification } from '@models/notification';

@Component({
  selector: 'app-notification-type',
  imports: [NgClass, NgForOf],
  templateUrl: './notification.component.html',
  standalone: true,
  styleUrl: './notification.component.scss',
})
export class NotificationComponent {
  protected notificationService = inject(NotificationsService);

  public remove(notification: Notification): void {
    this.notificationService.notifications = this.notificationService.notifications.filter(
      (notif) => notif !== notification,
    );
  }
}
