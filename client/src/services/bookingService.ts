import * as apiHandler from './apiHandlerService';

class BookingService {
  constructor() {
    console.log(''); //no empty function
  }

  /**
   * This method retrieves a user's [owner/sitter] sit requests
   * @param userId
   * @returns
   */
  public static getRequestsByUserId = (userType: string, userId: string): Promise<any> => {
    const typesObject: any = {
      owner: 'owner',
      sitter: 'sitter',
    };
    const url = `requests/${typesObject[userType]}/${userId}`;
    return apiHandler.get(url);
  };

  /**
   * This method creates a dog owner's sit requests
   * @param ownerId
   * @param data
   * @returns
   */
  public static createSitterRequest = (ownerId: string, data: any): Promise<any> => {
    const url = `requests/owner/${ownerId}`;
    return apiHandler.post(url, data);
  };

  /**
   * This method updates a dog owner's sit requests
   * @param ownerId
   * @param data
   * @returns
   */
  public static updateSitterRequest = (ownerId: string, data: any): Promise<any> => {
    const url = `requests/owner/${ownerId}`;
    return apiHandler.put(url, data);
  };
}

export default BookingService;
