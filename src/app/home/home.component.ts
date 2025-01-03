import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { NgbAccordionModule } from '@ng-bootstrap/ng-bootstrap';
import { HeaderComponent } from "../header/header.component";


@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, NgbAccordionModule, HeaderComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  taskGroups = [
    {
      title: 'Tasks/Recommendations',
      subtitles: [
        {
          name: 'Current Tasks',
          tasks: [
            { name: 'Task 1', targetDate: '12/06/2024', status: 'In Progress' },
            { name: 'Task 2', targetDate: '15/06/2024', status: 'In Progress' },
            { name: 'Task 3', targetDate: '18/06/2024', status: 'In Progress' }
          ]
        },
        {
          name: 'Upcoming Tasks',
          tasks: [
            { name: 'Task 4', targetDate: '20/06/2024', status: 'In Progress' },
            { name: 'Task 5', targetDate: '25/06/2024', status: 'In Progress' }
          ]
        }
      ]
    },
    {
      title: 'Meetings',
      subtitles: [
        {
          name: 'Current Month',
          tasks: [
            { name: 'Meeting 1', targetDate: '12/06/2024', status: 'In Progress' },
            { name: 'meeting 2', targetDate: '15/06/2024', status: 'In Progress' },
            { name: 'meeting 3', targetDate: '18/06/2024', status: 'In Progress' }
          ]
        },
        {
          name: 'Upcoming meetings',
          tasks: [
            { name: 'meeting 4', targetDate: '20/06/2024', status: 'In Progress' },
            { name: 'meeting 5', targetDate: '25/06/2024', status: 'In Progress' }
          ]
        }
      ]
    }

  ];

  isExpanded: boolean[] = [];

  constructor() { }

  toggleAccordion(index: number) {
    this.isExpanded[index] = !this.isExpanded[index];
  }
}
