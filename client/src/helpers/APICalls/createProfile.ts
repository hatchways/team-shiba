import { AuthApiData } from '../../interface/AuthApiData';
import { FetchOptions } from '../../interface/FetchOptions';

const createProfile = async (
  availableStatus: boolean,
  firstName: string,
  lastName: string,
  email: string,
  phoneNumber: string,
  address: string,
  description: string,
): Promise<AuthApiData> => {
  const fetchOptions: FetchOptions = {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ availableStatus, firstName, lastName, address, email, phoneNumber, description }),
    credentials: 'include',
  };
  return await fetch(`/auth/createProfile`, fetchOptions)
    .then((res) => res.json())
    .catch(() => ({
      error: { message: 'Unable to connect to server. Please try again' },
    }));
};

export default createProfile;
