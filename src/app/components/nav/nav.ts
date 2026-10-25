import { afterNextRender, Component, ElementRef, inject, Injector, signal, viewChild } from "@angular/core";
import { Router, RouterLink } from "@angular/router";

@Component({
  imports: [RouterLink],
  selector: "app-nav",
  styleUrl: "./nav.css",
  templateUrl: "./nav.html",
})
export class Nav {
    private readonly router = inject(Router);
  private readonly injector = inject(Injector);
  private readonly searchInput = viewChild<ElementRef<HTMLInputElement>>('searchInput');
 
  readonly brandLetters = ['C', 'e', 'r', 'n', 'e'];
 
  readonly categories = [
    { slug: 'sala', label: 'Sala' },
    { slug: 'quarto', label: 'Quarto' },
    { slug: 'escritorio', label: 'Escritório' },
    { slug: 'cozinha', label: 'Cozinha' },
    { slug: 'decoracao', label: 'Decoração' },
  ];
 
  readonly menuOpen = signal(false);
  readonly searchOpen = signal(false);
  readonly cartCount = signal(0);
 
  toggleMenu(): void {
    this.menuOpen.update(open => !open);
    this.searchOpen.set(false);
  }
 
  toggleSearch(): void {
    const willOpen = !this.searchOpen();
    this.searchOpen.set(willOpen);
    this.menuOpen.set(false);
 
    if (willOpen) {
      afterNextRender(() => this.searchInput()?.nativeElement.focus(), { injector: this.injector });
    }
  }
 
  closeAll(): void {
    this.menuOpen.set(false);
    this.searchOpen.set(false);
  }
 
  onSearch(event: Event, term: string): void {
    event.preventDefault();
    const busca = term.trim();
    this.router.navigate(['/produtos'], { queryParams: busca ? { busca } : {} });
    this.closeAll();
  }

}
