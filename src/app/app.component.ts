import { Component, ElementRef, ViewChild } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
   title = 'uploader-app';
//   afuConfig = {
//     uploadAPI: {
//       url:"https://slack.com/api/files.upload"
//     },
//     replaceTexts: {
//       selectFileBtn: 'Select Files',
//       resetBtn: 'Reset',
//       uploadBtn: 'Upload',
//       // dragNDropBox: 'Drag N Drop',
//       attachPinBtn: 'Attach Files...',
//       afterUploadMsg_success: 'Successfully Uploaded !',
//       afterUploadMsg_error: 'Upload Failed !',
//       sizeLimit: 'Size Limit'
//     }
// }; library

 @ViewChild('fileInput', {static: false}) fileInput: ElementRef;

 constructor(private http: HttpClient){}

 onFileUpload(){
  const imageBlob = this.fileInput.nativeElement.files[0];
  const file = new FormData();
  file.set('file', imageBlob);

  this.http.post('http://localhost:3000/', file).subscribe(response =>{
    console.log(response);
  });
 }

 defaultBtnActive(){
    const defaultBtn = document.getElementById("default-btn");
    const customBtn = document.getElementById("custom-btn");
    defaultBtn.click();
 } 

  fileName = '';
  onFileSelected(event) {
    const fileSelected:File = event.target.files[0];
    const displayFileName = document.getElementById("custom-text");
    
    if (fileSelected) {
        this.fileName = fileSelected.name;
        displayFileName.textContent = this.fileName;

    }
  }
}
