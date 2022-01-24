import { Component, OnInit } from '@angular/core';
import { ExitInterface } from './model/models';
import { ExitsService } from './services/exits.service';

@Component({
  selector: 'app-exit',
  templateUrl: './exit.component.html',
  styleUrls: ['./exit.component.scss'],
})
export class ExitComponent implements OnInit {
  public exits: ExitInterface[] = [];
  constructor(private exitsService: ExitsService) {}

  ngOnInit(): void {
    this.exitsService.getAllExits().subscribe((data: any) => {
      const apiResults: ExitInterface[] = data.results
      
      const formattedExit = apiResults.map(({ id, name, status, species, type, gender, image }) => ({ id, name, status, species, type, gender, image }));
      this.exits = formattedExit
    })
  }
}
