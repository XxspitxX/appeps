import { Component, OnInit, Renderer2, HostListener} from '@angular/core';
import { style } from '@angular/animations';
import { Observable } from 'rxjs';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { map, shareReplay } from 'rxjs/operators';

@Component({
  selector: 'app-default',
  templateUrl: './default.component.html',
  styleUrls: ['./default.component.scss']
})
export class DefaultComponent implements OnInit {

  sideBarOpen = true;
  clicked = false;
  sidenav = 'side';
  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
  .pipe(
    map(result => result.matches),
    shareReplay()
  );
  constructor(private breakpointObserver: BreakpointObserver){
   
  }
  ngOnInit() {
    if(window.innerWidth < 768){
      this.sidenav = 'over';
       
 
    }
  }
 
  @HostListener('window:resize', ['$event'])
  onResize(event) {
      if (event.target.innerWidth < 768) {
          this.sidenav = 'over';

      }


      if (event.target.innerWidth > 768) {
         this.sidenav = 'side';
         this.sideBarOpen = true;
      }
  }
  sideBarToggler() {
    this.sideBarOpen = !this.sideBarOpen;
  }

 
  
  

}
