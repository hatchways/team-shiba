import * as apiHandler from './apiHandlerService';

class ProfileService {
  constructor() {
    console.log(''); //no empty function
  }

  /**
   * This method retrieves a user's profile photo
   * @param userId
   * @returns
   */
  public static getProfilePhoto = (userId: string): Promise<any> => {
    const url = `uploads/profile-photo/${userId}`;
    return apiHandler.get(url);
  };
}

export default ProfileService;
