import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { SharedService } from 'src/app/customer/services/shared/shared.service';

import { CardService } from 'src/app/Cards/card/card.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-magazine',
  templateUrl: './magazine.component.html',
  styleUrls: ['./magazine.component.css']
})
export class MagazineComponent  implements OnInit {
  CardForm!: FormGroup;
  StarRating: number = 0;
  formData: FormData = new FormData();
  departments: any[] = [ ];

  cards: any[] = [];


  constructor(private router:Router,private fb: FormBuilder, private http: HttpClient,private  card:CardService, private shared :SharedService) {
    this.card.getAllMagazines().subscribe((data)=>{
      this.cards=data.Data
   })
   }

  ngOnInit(): void {

      const currentUser = localStorage.getItem('currentUser');
      if (!currentUser) {
        this.router.navigate(['../../admin-panel/login']); // Replace '/login' with the path to your login page
      }
    this.initForm();
  }

  initForm(): void {
    this.CardForm = this.fb.group({
      title: ['', Validators.required],
      description: ['', Validators.required],
      file_demo: ['', Validators.required],
      auther: ['', Validators.required],
    });
  }


  handleFileInput(event: any) {
    if (event && event.target && event.target.files && event.target.files.length > 0) {
        const file = event.target.files[0];
        this.CardForm.patchValue({
          file_demo: file
        });
        this.CardForm.get('file_demo')?.updateValueAndValidity();
    }
}


  addProject() {
    if (this.CardForm.valid) {
      this.formData = new FormData();
      const title = this.CardForm.get('title');
      const description = this.CardForm.get('description');
      const auther = this.CardForm.get('auther');
      const file_demo = this.CardForm.get('file_demo');


      // Check if form controls exist and have values before appending to formData
      if (title && title.value) {
        this.formData.append('title', title.value);
      }
      if (description && description.value) {
        this.formData.append('description', description.value);
      }
      if (auther && auther.value) {
        this.formData.append('auther', auther.value);
      }

      // if (videoDemo && videoDemo.value && videoDemo.value.files && videoDemo.value.files.length > 0) {
      //   const file = videoDemo.value.files[0]; // Get the file from the file input
      //   formData.append('file_demo', file, file.name); // Append the file to formData
      // }
      const file: File = this.CardForm.get('file_demo')?.value;
      this.formData.append('file_demo', file, file.name);

      console.log(file_demo);




      const formDataObject: any = {};
      this.formData.forEach((value, key) => {
        formDataObject[key] = value;
      });
      console.log('formData:', formDataObject);

      this.http.post('http://127.0.0.1:8000/api/magazines',this. formData)
        .subscribe(
          (response) => {
            Swal.fire({
              icon: 'success',
              title: 'تم اضافة الفاعليه بنجاح',

              imageUrl: "assets/images/logo2.png"
            }).then((result) => {
              // This code will execute when the user clicks the "OK" button
              if (result.isConfirmed) {
              console.log("مبروك")

              }
            });
            // Reset form after successful submission
            this.CardForm.reset();
          },
          (error) => {
            console.error('Error adding magazines:', error);
          }
        );
    }
  }



  deleteproject(id: any) {

    this.http.delete('http://127.0.0.1:8000/api/magazines/' + id).subscribe((res => {

    }));

  }
}
