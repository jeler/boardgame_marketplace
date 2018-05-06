import { Component, OnInit, Input } from '@angular/core';
import { NgbModal, NgbActiveModal } from '@ng-bootstrap/ng-bootstrap'

@Component({
  selector: 'app-dynamic-modal',
  templateUrl: './dynamic-modal.component.html',
  styleUrls: ['./dynamic-modal.component.css']
})
export class DynamicModalComponent implements OnInit {

  constructor(
    private modalService: NgbModal
  ) { }

  ngOnInit() {
  }

  open()
  {
    const modalRef = this.modalService.open('DynamicModalContentComponent');
  }

}
