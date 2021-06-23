import { AuthApiData } from '../../interface/AuthApiData';
import { FetchOptions } from '../../interface/FetchOptions';

const createProfile = async (
  dogSitter: string,
  availableStatus: string,
  firstName: string,
  lastName: string,
  email: string,
  phoneNumber: string,
  serviceCharge: string,
  address: string,
  description: string,
): Promise<AuthApiData> => {
  const fetchOptions: FetchOptions = {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      dogSitter,
      availableStatus,
      firstName,
      lastName,
      email,
      phoneNumber,
      serviceCharge,
      address,
      description,
    }),
    credentials: 'include',
  };
  return await fetch(`/auth/createProfile`, fetchOptions)
    .then((res) => res.json())
    .catch(() => ({
      error: { message: 'Unable to connect to server. Please try again' },
    }));
};

export default createProfile;
