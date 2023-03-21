import bcrypt from 'bcrypt';

export const createHashValue = async (value: string) => {
  const salt = await bcrypt.genSalt();
  return await bcrypt.hashSync(value, salt);
};

export const isValidPassword = async (psw: string, encryptedPsw: string) => {
  return await bcrypt.compareSync(psw, encryptedPsw);
};
