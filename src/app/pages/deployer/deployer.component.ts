import { Component, OnInit } from '@angular/core';
import swal from 'sweetalert2';
import { SweetAlert2Module } from '@sweetalert2/ngx-sweetalert2';

@Component({
  selector: 'app-deployer',
  templateUrl: './deployer.component.html',
  styleUrls: ['./deployer.component.scss']
})
export class DeployerComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  loadProjectModal() {
    swal.fire({
      title: 'Carregar o JSON do projeto',
      html:
        `<div class="form-group">
          <textarea id="json" class="form-control mb-3" style="height: 400px; font-size: small"></textarea>
          <button (click)="loadJson()" class="btn btn-dark">Carregar</button>
          <button (click)="closeLoadModal()" class="btn btn-outline-danger">Cancelar</button>
        </div>`,
      width: 1000,
      showCancelButton: false,
      showConfirmButton: false,
      cancelButtonText: 'Cancelar',
      cancelButtonColor: '#d33',
      confirmButtonColor: '#343A40',
      showClass: {
        popup: 'animated fadeIn faster'
      },
      hideClass: {
        popup: 'animated fadeOut faster'
      },
      allowOutsideClick: false,
      showCloseButton: false
    });
  }

  closeLoadModal() {
    swal.close();
  }
}
