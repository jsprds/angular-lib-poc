import { Component, Input } from '@angular/core';

/**
 * The logo component generates a clickable logo with a configurable title and image
 */
@Component({
  selector: 'jsprds-logo',
  templateUrl: './logo.component.html'
})
export class LogoComponent {
  /**
   * Define a title tag for the logo
   */
  @Input() public title = 'Logo';

  /**
   * Define an image source for the logo
   */
  @Input() public src = 'https://place-hold.it/170x170';

  /**
   * Define an link (href) for the logo
   */
  @Input() public link = '/';
}
