import { Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-window-info',
  templateUrl: './window-info.component.html',
  styleUrls: ['./window-info.component.css']
})
export class WindowInfoComponent implements OnInit {
  size = '';

  constructor() { }

  ngOnInit(): void {
    this.recalculateSize();
  }

  @HostListener('window:resize', ['$event'])
  private onResize(event: UIEvent) {
    if (event && event.target) {
      this.recalculateSize();
    }
    else {
      this.size = '(error)';
    }
  }

  private recalculateSize() {
    this.size = `${window.innerWidth} x ${window.innerHeight}`
  }
}
