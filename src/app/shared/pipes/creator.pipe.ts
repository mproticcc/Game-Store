import { Game } from './../../features/models/game.model';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'creator',
})
export class CreatorPipe implements PipeTransform {
  transform(game: Game): string {
    if (!game.creatorFirstName) {
      return game.creatorLastName;
    }
    if (!game.creatorLastName) {
      return game.creatorFirstName;
    }
    if (!game.creatorFirstName && !game.creatorLastName) {
      return 'Error!';
    }
    return `${game.creatorFirstName} ${game.creatorLastName}`;
  }
}
