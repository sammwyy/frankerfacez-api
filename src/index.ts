import fetch from 'isomorphic-unfetch';

import Emote from './entities/Emote';
import User from './entities/User';

type APIError = {
  message: string;
  error: string;
  status: number;
}

interface APIResponse {
  data: APIError | unknown;
  status: number;
}

export class FFZClient {
  private readonly endpoint: string;

  constructor() {
    this.endpoint = 'https://api.frankerfacez.com/v1/';
  }

  public async apiGET(
    path: string,
    headers: Record<string, string> = {},
  ): Promise<APIResponse> {
    if (!headers['X-FFZ-Client']) {
      headers['X-FFZ-Client'] = 'frankerfacez-api (js)';
    }

    const req = await fetch(this.endpoint + path, {
      headers,
    });
    const data = await req.json();
    return {data, status: req.status};
  }

  async getUser(userId: string): Promise<User> {
    const { data, status } = await this.apiGET('room/id/' + userId);
    if (status == 200) {
      return data as User;
    } else {
      throw new Error((data as APIError).message);
    }
  }

  async getUserEmotes(userId: string): Promise<Emote[]> {
    const user = await this.getUser(userId);
    return user.sets[user.room.set].emoticons;
  }
}

const FFZ = new FFZClient();
export default FFZ;
