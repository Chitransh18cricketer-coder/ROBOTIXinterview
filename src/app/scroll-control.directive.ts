import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appScrollControl]'
})
export class ScrollControlDirective {
  @Input() distanceFromTop = 800; // Adjust this value as needed

  private allowScrolling = true; // Add a flag to allow or prevent scrolling
  private previousScrollY = 0; // Store the previous scroll position
  private previousScrollDirection = 'down'; // Store the previous scroll direction

  constructor(private el: ElementRef) {}

  @HostListener('window:scroll', ['$event']) // Pass the event parameter
  onWindowScroll(event: Event) {
    this.toggleScrolling(event);
  }

  ngOnInit() {
    this.toggleScrolling(null); // Pass null initially to handle the initial load
  }

  // Function to call when virtual scrolling is complete
  virtualScrollingComplete() {
    // You can call this function when you determine that virtual scrolling is done
    // For example, based on the state of your virtual scrolling component
    this.allowScrolling = true; // Enable scrolling
  }

  private toggleScrolling(event: Event | null) {
    const element = this.el.nativeElement;
    const elementRect = element.getBoundingClientRect();
    const windowHeight = window.innerHeight;

    // Calculate the position of the element relative to the viewport
    const elementTop = elementRect.top;
    const elementBottom = elementRect.bottom;

    // Calculate the scroll direction
    let scrollDirection = 'down';
    if (event) {
      const deltaY = (event as any).deltaY; // Accessing deltaY for mouse wheel event
      scrollDirection = deltaY > 0 ? 'down' : 'up';
    }

    // Determine whether scrolling should be allowed based on the element's position
    const shouldAllowScrolling = elementTop <= windowHeight - this.distanceFromTop;

    // If scrolling direction changes from 'up' to 'down' or 'down' to 'up', store the current scroll position
    if (!shouldAllowScrolling || scrollDirection !== this.previousScrollDirection) {
      this.previousScrollY = window.scrollY;
    }

    // Set or reset the scroll position based on the flag
    if (!this.allowScrolling) {
      window.scrollTo(0, this.previousScrollY); // Restore the previous scroll position
    }

    // Update the allowScrolling flag
    this.allowScrolling = shouldAllowScrolling;

    // Store the current scroll direction
    this.previousScrollDirection = scrollDirection;
  }
}
