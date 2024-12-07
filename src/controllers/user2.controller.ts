import { Request, Response } from 'express';

class User2Controller {
  async get(req: Request, res: Response): Promise<Response<{ name: string }>> {
    const response: { name: string } = {
      name: 'John Doe',
    };

    return res.status(200).send(response);
  }
}

export default new User2Controller();
