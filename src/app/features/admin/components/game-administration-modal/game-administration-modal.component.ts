import { NotificationService } from './../../../../shared/services/notification.service';
import { take } from 'rxjs';
import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Game } from 'src/app/features/models/game.model';
import { GameService } from 'src/app/features/services/game.service';

@Component({
  selector: 'app-game-administration-modal',
  templateUrl: './game-administration-modal.component.html',
  styleUrls: ['./game-administration-modal.component.scss'],
})
export class GameAdministrationModalComponent {
  private creatorFirstName: string = JSON.parse(sessionStorage.getItem('User'))
    .firstName;
  private creatorLastName: string = JSON.parse(sessionStorage.getItem('User'))
    .lastName;

  reservationForm = new FormGroup({
    name: new FormControl('', [
      Validators.required,
      Validators.pattern(/^[A-Z][a-zA-Z]{0,50}$/),
    ]),
    videoLink: new FormControl('', [
      Validators.required,
      Validators.pattern(
        /^((?:https?:)?\/\/)?((?:www|m)\.)?((?:youtube(-nocookie)?\.com|youtu.be))\/((?:[\w\-]+\?v=|embed\/|live\/|v\/)?)([\w\-]+)(\S+)?$/
      ),
    ]),
    description: new FormControl('', [Validators.required]),
    price: new FormControl('', [Validators.required]),
    creatorFirstName: new FormControl(this.creatorFirstName, [
      Validators.required,
      Validators.pattern(/^[A-Z][a-zA-Z]+$/),
    ]),
    creatorLastName: new FormControl(this.creatorLastName, [
      Validators.required,
      Validators.pattern(/^[A-Z][a-zA-Z]+$/),
    ]),
    image: new FormControl('', Validators.required),
    imageWallpaper: new FormControl('', Validators.required),
    publishDate: new FormControl('', Validators.required),
    specification: new FormControl('', Validators.required),
  });

  games?: Game[];

  constructor(
    private gameService: GameService,
    private notificationService: NotificationService
  ) {}

  createNewGame(): void {
    const date = new Date();

    const game: Game = {
      id: Math.round(Math.random() * date.getSeconds() * date.getMinutes()),
      name: this.reservationForm.value.name,
      image: this.reservationForm.value.image,
      imageWallpaper: this.reservationForm.value.imageWallpaper,
      videoLink: this.reservationForm.value.videoLink,
      price: +this.reservationForm.value.price,
      description: this.reservationForm.value.description,
      creatorFirstName: this.reservationForm.value.creatorFirstName,
      creatorLastName: this.reservationForm.value.creatorLastName,
      publishDate: this.reservationForm.value.publishDate,
      specification: this.reservationForm.value.specification,
      createdAt: new Date(),
      deletedAt: null,
      modifiedAt: null,
    };

    this.gameService
      .createNewGame(game)
      .pipe(take(1))
      .subscribe(() => {
        this.notificationService.snackbarNotification(
          'Game successful created',
          'Close',
          'center',
          'top',
          2000
        );
      });
  }
}
