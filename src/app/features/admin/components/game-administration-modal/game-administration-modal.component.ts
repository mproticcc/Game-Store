import { NotificationService } from './../../../../shared/services/notification.service';
import { take } from 'rxjs';
import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Game } from 'src/app/features/models/game.model';
import { GameService } from 'src/app/features/services/game.service';
import { PlatformService } from 'src/app/features/services/platform.service';
import { Platform } from 'src/app/features/models/platform.model';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-game-administration-modal',
  templateUrl: './game-administration-modal.component.html',
  styleUrls: ['./game-administration-modal.component.scss'],
})
export class GameAdministrationModalComponent implements OnInit {
  platforms?: Platform[];

  games?: Game[];

  createGameForm = new FormGroup({
    name: new FormControl('', [
      Validators.required,
      Validators.pattern(/^[A-Z][\w!@#$%^&-:®*() ]{0,50}$/),
    ]),
    videoLink: new FormControl('', [
      Validators.required,
      Validators.pattern(
        /^((?:https?:)?\/\/)?((?:www|m)\.)?((?:youtube(-nocookie)?\.com|youtu.be))\/((?:[\w\-]+\?v=|embed\/|live\/|v\/)?)([\w\-]+)(\S+)?$/
      ),
    ]),
    description: new FormControl('', [Validators.required]),
    price: new FormControl('', [Validators.required]),
    creatorFirstName: new FormControl(
      JSON.parse(sessionStorage.getItem('User')!).firstName,
      [Validators.required, Validators.pattern(/^[A-Z][a-zA-Z]+$/)]
    ),
    creatorLastName: new FormControl(
      JSON.parse(sessionStorage.getItem('User')!).lastName,
      [Validators.required, Validators.pattern(/^[A-Z][a-zA-Z]+$/)]
    ),
    image: new FormControl('', Validators.required),
    imageWallpaper: new FormControl('', Validators.required),
    publishDate: new FormControl('', Validators.required),
    specification: new FormControl('', Validators.required),
    platforms: new FormControl('', Validators.required),
  });

  constructor(
    private gameService: GameService,
    private notificationService: NotificationService,
    private platformService: PlatformService,
    @Inject(MAT_DIALOG_DATA)
    public data: {
      title: string;
      buttonName: string;
      game: Game;
      isEditClicked: boolean;
    }
  ) {}

  ngOnInit(): void {
    this.getAllPlatforms();
    if (this.data.isEditClicked) {
      this.setInputFields();
    }
  }

  createNewGame(): void {
    const date = new Date();

    const game = {
      id: Math.round(Math.random() * date.getSeconds() * date.getMinutes()),
      ...this.createGameForm.value,
      platforms: [+this.createGameForm.value.platforms!],
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

  updateGame(): void {
    const game: Game = {
      id: this.data.game.id,
      name: this.createGameForm.value.name!,
      image: this.createGameForm.value.image!,
      imageWallpaper: this.createGameForm.value.imageWallpaper!,
      videoLink: this.createGameForm.value.videoLink!,
      price: +this.createGameForm.value.price!,
      description: this.createGameForm.value.description!,
      creatorFirstName: this.createGameForm.value.creatorFirstName,
      creatorLastName: this.createGameForm.value.creatorLastName,
      publishDate: this.createGameForm.value.publishDate!,
      specification: this.createGameForm.value.specification!,
      platforms: [+this.createGameForm.value.platforms!],
      createdAt: this.data.game.createdAt,
      deletedAt: null!,
      modifiedAt: null!,
    };

    this.gameService
      .editGame(game)
      .pipe(take(1))
      .subscribe(() => {
        this.notificationService.snackbarNotification(
          'Game successful edited',
          'Close',
          'center',
          'top',
          2000
        );
      });
  }

  private getAllPlatforms(): void {
    this.platformService
      .getAll()
      .pipe(take(1))
      .subscribe((platforms) => (this.platforms = platforms));
  }

  private setInputFields(): void {
    const date = this.data.game.publishDate.split('T');
    this.createGameForm.patchValue({
      name: this.data.game.name,
      image: this.data.game.image,
      imageWallpaper: this.data.game.imageWallpaper,
      videoLink: this.data.game.videoLink,
      price: this.data.game.price + '',
      description: this.data.game.description,
      creatorFirstName: this.data.game.creatorFirstName,
      creatorLastName: this.data.game.creatorLastName,
      publishDate: date[0],
      specification: this.data.game.specification,
      platforms: this.data.game.platforms.toString(),
    });
  }
}
