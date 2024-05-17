import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-projfiles',
  templateUrl: './projfiles.component.html',
  styleUrls: ['./projfiles.component.css']
})
export class ProjfilesComponent implements OnInit {
  projects: any[] = [];
  selectedProjectId: number | null = null;
  projfiles: any[] = [];

  constructor(private http: HttpClient,private router:Router) {
    this.fetchProjects();
  }
  ngOnInit(): void {
    const currentUser = localStorage.getItem('currentUser');
    if (!currentUser) {
      this.router.navigate(['../../admin-panel/login']); // Replace '/login' with the path to your login page
    }
  }

  fetchProjects() {
    this.http.get('http://127.0.0.1:8000/api/projects').subscribe((res: any) => {
      this.projects = res.Data;
    });
  }

  handlePhotoInput(event: any) {
    const file = event.target.files[0];
    // Do something with the selected file, such as uploading it or processing it
  }

  onProjectSelect(event: any) {
    const projectId = event.target.value;
    this.selectedProjectId = projectId;
    this.fetchProjfilesForProject(projectId);
  }

  fetchProjfilesForProject(projectId: number) {
    if (projectId) {
      this.http.get(`http://127.0.0.1:8000/api/projfiles/project/${projectId}`).subscribe((res: any) => {
        this.projfiles = res;
      });
    }
  }

  addProjfile() {
    const projectId = this.selectedProjectId;
    if (projectId) {
      const formData = new FormData();
      const fileInput = document.getElementById('file') as HTMLInputElement;
      const file = fileInput?.files?.[0];

      if (file) {
        formData.append('projfile', file);
        formData.append('project_id', projectId.toString());
        const formDataObject: any = {};
        formData.forEach((value, key) => {
          formDataObject[key] = value;
        });
        console.log('formData:', formDataObject);
        this.http.post('http://127.0.0.1:8000/api/projfiles/upload', formData).subscribe((res: any) => {
          // Handle the response, maybe refresh the projfiles list
          this.fetchProjfilesForProject(projectId);
        }, (error) => {
          // Handle error
          console.error('Error uploading file:', error);
        });
      }
    }
  }

  deleteProjfile(id: any) {

    this.http.delete('http://127.0.0.1:8000/api/projfiles/' + id).subscribe((res => {
      const projectId = this.selectedProjectId;
      if (projectId) {
        this.fetchProjfilesForProject(projectId);
      }
    }));

  }
}
