import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {Router} from "@angular/router";
import {AlertController, LoadingController} from "@ionic/angular";
import {AuthService} from "../../service/auth.service";
import {LoginDto} from "../../dtos/login.dto";
import {ClienteService} from "../../service/cliente.service";

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss'],
})
export class SignInComponent implements OnInit {


  type = true;
  loginForm: FormGroup = new FormGroup<any>({});

  constructor(private router: Router,
              private fb: FormBuilder,
              private loadingCtrl: LoadingController,
              private alertController: AlertController,
              private authService: AuthService,
              clienteService:ClienteService) { }

  ngOnInit() {
    this.loginForm = this.fb.group({
      DNI:['',Validators.required],
      Contrasena:['',Validators.required]
    })
  }
  navigateform(){
    this.router.navigate(['crear-cuenta']);
  }
  navigateMotos(){
    this.router.navigate(['motos']);
  }

  login(){

    const login: LoginDto={
      DNI:this.loginForm.controls['DNI'].value,
      Contrasena:this.loginForm.controls['Contrasena'].value,

    }
    this.authService.auth(login).subscribe(res=>{
      if (res && res.length > 0){
        const user= res[0];
        switch (user.Rol) {
          case 'C':
            this.showLoading();
            this.router.navigate(['tab']);

            break;
          case 'V':
            this.showLoading();
            this.router.navigate(['listado-vendedor']);
        }
      }
      else{
        this.presentAlert();
      }
      console.log(res);
    })
  }
  async showLoading() {
    const loading = await this.loadingCtrl.create({
      message: 'Loading...',
      duration: 900,
      spinner: 'circles',
    });

    loading.present();
  }
  async presentAlert() {
    const alert = await this.alertController.create({
      header: 'Alerta',
      subHeader: 'Mensaje Importante',
      message: 'Su DNI y/o contraseña no son validos !',
      buttons: ['OK'],
    });

    await alert.present();
  }
  changeType() {
    this.type = !this.type;
  }



}
