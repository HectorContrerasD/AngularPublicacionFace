import { Component } from '@angular/core';
import { FacebookService,InitParams } from 'ngx-facebook';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  constructor(private fb:FacebookService){
    let InitParams: InitParams={
      appId: '1028291708628292',
      xfbml:true,
      version: 'v20.0'
    };
    fb.init(InitParams);
  }
  publicar(){
    const token = 'EAAOnOdIErUQBO8LGIn8vKJ2yJ2Pln4Xl8Yb1LMSbnQmFvFC977c9oWiCgAXHrKSeg6ZBg8trLSzTv1H8N8Td4bHkGe1yG19lor41KaTWfp2fpm5g5438IGqKMf1HRWNp6VMmyPm3Y0CgZCoM4cGLHHyRX0sOnhFMe5A1lsSTbqg2LaDKV1VeACzHwg4RiOfA0tGmwT'
    const pageId = '311077885429029';
    this.fb.api(`/${pageId}/feed`, 'post', {
      message: 'Ta chida la partida',
      access_token: token
    }).then((response: any) => {
      console.log('Publicación exitosa', response);
    }).catch((error: any) => {
      console.error('Error al publicar', error);
    });
  }
}
