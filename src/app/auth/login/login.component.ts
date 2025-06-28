import { Component } from '@angular/core';
import { SupabaseClient, createClient } from '@supabase/supabase-js';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  email: string = '';
  password: string = '';
  supabase: SupabaseClient;

  constructor() {
    this.supabase = createClient(
      'https://stczcaggozcxszbprcde.supabase.co',
      'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InN0Y3pjYWdnb3pjeHN6YnByY2RlIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDk2NjIzMjgsImV4cCI6MjA2NTIzODMyOH0.VIiEu6NKL-SBB7pj-WN06NhoUplR29T4COxPaxuKqsc'
    );
  }

  async login() {
    const { data, error } = await this.supabase.auth.signInWithPassword({
      email: this.email,
      password: this.password
    });

    if (error) {
      alert('Error al iniciar sesión: ' + error.message);
    } else {
      alert('Inicio de sesión exitoso');
      console.log(data);
    }
  }
}
