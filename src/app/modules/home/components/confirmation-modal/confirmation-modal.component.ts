import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-confirmation-modal',
  templateUrl: './confirmation-modal.component.html',
  styleUrls: ['./confirmation-modal.component.scss']
})
export class ConfirmationModalComponent {
  @Input() showModal: boolean;
  @Output() onCancel = new EventEmitter();
  @Output() onConfirm = new EventEmitter();

  cancel(): void {
    this.onCancel.emit();
  }

  confirm(): void {
    this.onConfirm.emit();
  }

  constructor() {
    this.showModal = false;
  }

  ngOnit(): void {

  }
}
