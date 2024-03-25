import {RoomCommunicationsService} from "../communications/room-communications.service";

/**
 * Represent a user in a game / room.
 * Generate the host (presenter) and the player (answering user).
 */
export abstract class UserService {
  protected constructor(protected room: RoomCommunicationsService, protected roomCode: string | undefined = undefined) {
  }

  public getRoomCode(): string | undefined {
    return this.roomCode
  }
}
