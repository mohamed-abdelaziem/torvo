import { Component, signal } from '@angular/core';
import { initFlowbite } from 'flowbite';
import { RouterOutlet } from '@angular/router';
@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  protected readonly title = signal('Torvo');

  ngOnInit(): void {
    initFlowbite();}

ngAfterViewChecked(): void {
const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".spy-link");

const options = {
  threshold: 0.6, // نسبة ظهور العنصر
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    const id = entry.target.getAttribute("id");
    const link = document.querySelector(`a[href="#${id}"]`);

    if (entry.isIntersecting) {
      navLinks.forEach((link) => link.classList.remove("active"));
      link?.classList.add("active");
    }
  });
}, options);

sections.forEach((section) => {
  observer.observe(section);
});
}


}
