import { Component, OnInit } from '@angular/core';
import { BlipService } from './services/blip.service';
import { LoadingService } from './services/loading.service';
import { IframeService } from './services/iframe.service';
import ResizeObserver from 'resize-observer-polyfill';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'blip-plugin-deployer';
  botId: any;
  accessKey: any;

  constructor(
    private blipService: BlipService,
    private loadingService: LoadingService,
    private iframeService: IframeService,
    ) {}

  ngOnInit() {
    this.resizeIframe();
    // this.getTemplates();
    this.getApplications();
    this.getAccount();
  }

  resizeIframe() {
    const rootDiv = document.getElementById('root');
    const documentObserver = new ResizeObserver(() => {
      this.iframeService.setHeight(rootDiv.scrollHeight);
    });
    documentObserver.observe(rootDiv);
  }

  async getAccount() {
    this.loadingService.showLoad();
    await this.blipService
      .getAccount()
      .then(
        res => {
          console.log(res);
        },
        error => {
          console.log(error);
        }
      )
      .finally(() => {
        this.loadingService.hiddeLoad();
      });
  }

  async getApplications() {
    this.loadingService.showLoad();
    await this.blipService
      .getApplication()
      .then(
        res => {
          alert(`${res.response.name}`);
          this.botId = res.response.shortName;
          this.accessKey = res.response.accessKey;
        },
        error => {
          console.log(error);
        }
      )
      .finally(() => {
        this.loadingService.hiddeLoad();
      });
  }
}
