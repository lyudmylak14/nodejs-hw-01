import { readContacts } from '../utils/readContacts.js';

export const getAllContacts = async () => {
  try {
    const buffer = await readContacts();
    return buffer ? JSON.parse(buffer) : [];
  } catch (error) {
    console.error('Error getting all contacts:', error);
    return [];
  }
};

console.log(await getAllContacts());
