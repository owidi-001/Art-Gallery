// import { Injectable, Pipe, PipeTransform } from '@angular/core';
// import { DomSanitizer } from '@angular/platform-browser';
// import { map } from 'rxjs/operators';


// @Pipe({
//     name: 'thumbnail',
// })
// export class ThumbnailPipe implements PipeTransform {
//     constructor(private imageSvc: ImagesService, private sanitizer: DomSanitizer) { }
//     transform(value: any, args?: any): any {
//         return this.imageSvc.getBase64Image(value)
//             .pipe(map((baseImage: any) => {
//                 let objectURL = 'data:image/jpeg;base64,' + baseImage.image;
//                 return this.sanitizer.bypassSecurityTrustUrl(objectURL);
//             }));
//     }
// }
