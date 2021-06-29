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

  /**
   * This method uploads a user's profile photo
   * @param userId
   * @returns
   */
  public static uploadProfilePhoto = (userId: string, file: any): Promise<any> => {
    const url = `uploads/single`;
    const fileData = {
      fileKey: 'singleFile',
      responseType: 'json',
      formBody: { userId },
    };
    return apiHandler.postFile(url, file, fileData);
  };

  /**
   * This method deletes a user's profile photo
   * @param fileId
   * @returns
   */
  public static deleteProfilePhoto = (fileId: string): Promise<any> => {
    const url = `uploads/profile-photo/${fileId}`;
    return apiHandler.del(url);
  };
}

export default ProfileService;
