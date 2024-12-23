import { User } from "../user.model/user.model";
import { generateId } from './../utils/uuid';

class UserDTO {
  create(firstName: User['firstName'], lastName: User['lastName'], age: User['age'], hobbies: User['hobbies']): User {
    const id = generateId();
    return {
      firstName,
      lastName,
      age,
      hobbies,
      id
    }
  }

  update(firstName: User['firstName'], lastName: User['lastName'], age: User['age'], hobbies: User['hobbies'], id: User['id']): User {
    return {
      firstName,
      lastName,
      age,
      hobbies,
      id
    }
  }
}

export default UserDTO
