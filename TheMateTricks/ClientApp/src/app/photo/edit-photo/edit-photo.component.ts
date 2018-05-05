import { Component, OnInit, Input } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { UserService } from '../../services/user.service';
import { PhotosDto } from '../../models/PhotosDto';
import { FileUploader } from 'ng2-file-upload';
import { environment } from '../../../environments/environment';

@Component({
  selector: 'app-edit-photo',
  templateUrl: './edit-photo.component.html',
  styleUrls: ['./edit-photo.component.css']
})
export class EditPhotoComponent implements OnInit {

  constructor(public AuthService: AuthService, public UserService: UserService) { }
  @Input() photos: PhotosDto[];
  public uploader: FileUploader;
  baseUrl = environment.apiUrl;
  initializeUploader() {
    this.uploader = new FileUploader({
      url:
        this.baseUrl +
        '/users/' +
        JSON.parse(localStorage.getItem('user')).id +
        '/photos',
      authToken: 'Bearer ' + localStorage.getItem('token'),
      isHTML5: true,
      allowedFileType: ['image'],
      removeAfterUpload: true,
      autoUpload: false,
      maxFileSize: 10 * 1024 * 1024
    });
  }
  ngOnInit() {
    this.initializeUploader();
  }
  reload() {
    console.log("TESTTTTT");
  }
}
