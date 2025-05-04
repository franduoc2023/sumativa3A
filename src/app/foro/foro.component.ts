import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ForoDto2 } from '../services/foro.service';

@Component({
  selector: 'app-foro',
  standalone: true,
  templateUrl: './foro.component.html',
  styleUrls: ['./foro.component.css'],
  imports: [CommonModule,FormsModule,ReactiveFormsModule]
})
export class ForoComponent {
  mostrarForos = true;

  foros = [
    {
      titulo: 'Foro MMORPG',
      descripcion: 'Discute sobre Lineage II, WoW y otros MMORPGs.',
      link: '/foro/post',
      colorClass: 'text-primary'
    },
    {
      titulo: 'Foro de Acción',
      descripcion: 'Títulos llenos de adrenalina como God of War o DMC.',
      link: '/foro/accion',
      colorClass: 'text-success'
    },
    {
      titulo: 'Foro de Pelea',
      descripcion: 'Street Fighter, Tekken, Mortal Kombat y más.',
      link: '/foro/pelea',
      colorClass: 'text-danger'
    },
    {
      titulo: 'Foro de Disparo',
      descripcion: 'FPS y TPS como CS:GO, Apex, Call of Duty.',
      link: '/foro/disparo',
      colorClass: 'text-warning'
    },
    {
      titulo: 'Foro de Rol',
      descripcion: 'The Witcher, Skyrim, Baldur’s Gate y más RPGs.',
      link: '/foro/rol',
      colorClass: 'text-info'
    }
  ];





  busqueda: string = '';

  forosFiltrados(): ForoDto2[] {
    if (!this.busqueda) return this.foros;
    const termino = this.busqueda.toLowerCase();
    return this.foros.filter(foro =>
      foro.titulo.toLowerCase().includes(termino)
    );
  }





}


//este caso seria el optimo ya que el html solo me muestra el anidado de $ y puedo
//cambiar los valores de typescript a si despues puedo hacer un editor general sin modificar html
// a si puedo usar la API para modificar esas actualizaciones
// clase semana 7 clase minuto 3:44