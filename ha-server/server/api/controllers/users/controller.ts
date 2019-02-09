import UsersService, {User} from '../../services/users.service';
import { Request, Response } from 'express';

function sanitizeUser(user: User): User {
  const clonedUser: User = new User();
  clonedUser.id = user.id;
  clonedUser.name = user.name;
  clonedUser.email = user.email;
  clonedUser.password = '*********';
  return clonedUser;
}

export class Controller {
  all(req: Request, res: Response): void {
    UsersService.all().then(users => {
      if (users) {
        res.json(users.map(sanitizeUser));
      }
      else res.json([]);
    })
    .catch(err => res.status(500).end());
  }

  login(req: Request, res: Response): void {
    UsersService.byEmail(req.body.email).then(user => {
      if (user && user.email == req.body.email && user.password == req.body.password) {
        res.json(sanitizeUser(user));
      }
      else res.status(401).end();
    })
    .catch(err => res.status(500).end());
  }

  byId(req: Request, res: Response): void {
    UsersService.byId(req.params.id).then(user => {
      if (user) {
        res.json(sanitizeUser(user));
      }
      else res.status(404).end();
    })
    .catch(err => res.status(500).end());
  }

  create(req: Request, res: Response): void {
    const newUser = new User();
    newUser.email = req.body.email;
    newUser.name = req.body.name;
    newUser.password = req.body.password;

    UsersService.create(newUser).then(user => {
        res
          .status(201)
          .location(`<%= apiRoot %>/users/${user.id}`)
          .json(sanitizeUser(user));
      })
      .catch(err => res.status(500).end());
  }
}

export default new Controller();
