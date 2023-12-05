import { ChangeDetectionStrategy, Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { NotificationService } from 'src/app/services/notification/notification.service';
import { DataModal } from './model/dataModal';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ModalComponent implements OnInit {

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: DataModal,
    private _notificationService: NotificationService,
    private _dialogRef: MatDialogRef<ModalComponent>,
  ) { }


  ngOnInit(): void { }

  closeModal(): void {
    this._dialogRef.close();
  }

  eventEmmisionReceiver(shouldCloseModal: boolean): void {
    if (shouldCloseModal) {
      this.closeModal();
    }
  }


}
