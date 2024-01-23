import { Component, OnInit, computed, effect, signal } from '@angular/core';

interface UserInterface {
  id: string;
  name: string;
}

@Component({
  selector: 'app-rx-signals',
  standalone: true,
  imports: [],
  templateUrl: './rx-signals.component.html',
  styleUrl: './rx-signals.component.scss'
})
export class RxSignalsComponent implements OnInit {
  title = signal('');
  users = signal<UserInterface[]>([]);
  titleChangeEffect = effect(() => {
    console.log('titleChangeEffect', this.title());
  });
  usersTotal = computed(() => this.users().length);

  ngOnInit(): void {
    setTimeout(() => {
      // this.users.set([{ id: '1', name: 'Foo' }]);
      this.users.update((prevUsers) => [
        ...prevUsers,
        { id: '1', name: 'Foo' },
      ]);
      // this.users.mutate((currUsers) =>
      //   currUsers.push({ id: '1', name: 'Foo' })
      // );
      console.log(this.users());
    }, 2000);
  }

  changeTitle(event: Event) {
    const title = (event.target as HTMLInputElement).value;

    this.title.set(title);
  }
}
